-- Sparkle Makeover and Beauty Salon, Orai: bridal packages + lehenga wardrobe only.
-- Rebrands studio_settings, hides salon catalogue, adds lehenga video + requests + public calendar.

alter table public.lehengas
  add column if not exists video_url text not null default '';

alter table public.studio_settings
  add column if not exists email text not null default '';
alter table public.studio_settings
  add column if not exists facebook text not null default '';
alter table public.studio_settings
  add column if not exists hours_hi text not null default '';
alter table public.studio_settings
  add column if not exists hours_en text not null default '';

update public.studio_settings set
  whatsapp = '918081817807',
  phone_main = '8081817807',
  phone_booking = '8081817807',
  phone_extra = '8081817807',
  email = 'sparklemakeover21@gmail.com',
  facebook = 'https://facebook.com/101835146093091',
  instagram = 'https://facebook.com/101835146093091',
  hours_hi = 'सुबह 11 – रात 8 · सभी दिन',
  hours_en = '11 AM – 8 PM · All days',
  address_hi = 'हनुमान चबूतरा के पास, राजेन्द्र नगर, ओराई, उत्तर प्रदेश 285001',
  address_en = 'Near Hanuman Chabutara, Rajendra Nagar, Orai, Uttar Pradesh 285001',
  updated_at = now()
where id = 1;

-- Small salon services stay in the table but leave the public site.
update public.services set active = false where category = 'salon';

create table if not exists public.lehenga_requests (
  id uuid primary key default gen_random_uuid(),
  lehenga_id uuid not null references public.lehengas (id) on delete cascade,
  event_date date not null,
  customer_name text not null,
  phone text not null,
  note text not null default '',
  status text not null default 'requested' check (status in ('requested', 'confirmed', 'cancelled')),
  created_at timestamptz not null default now()
);

create index if not exists lehenga_requests_day_idx on public.lehenga_requests (event_date);
create index if not exists lehenga_requests_lehenga_idx on public.lehenga_requests (lehenga_id, event_date);

alter table public.lehenga_requests enable row level security;

drop policy if exists lehenga_requests_admin_all on public.lehenga_requests;
create policy lehenga_requests_admin_all on public.lehenga_requests
  for all to authenticated using (private.is_studio_admin()) with check (private.is_studio_admin());

-- Public showcase: safe columns only, never the client's name or phone.
create or replace function public.lehenga_showcase()
returns table (id uuid, tag_no text, title text, photo text, video_url text, status text, event_date date)
language sql
stable
security definer
set search_path = public
as $$
  select l.id, l.tag_no, l.title, l.photo, l.video_url, l.status, l.event_date
  from public.lehengas l
  order by l.tag_no;
$$;

revoke all on function public.lehenga_showcase() from public;
grant execute on function public.lehenga_showcase() to anon, authenticated, service_role;

-- Public calendar: wardrobe blocks plus live customer requests.
create or replace function public.lehenga_calendar(from_date date, to_date date)
returns table (lehenga_id uuid, day date, kind text)
language sql
stable
security definer
set search_path = public
as $$
  select l.id, l.event_date, 'wardrobe'
  from public.lehengas l
  where l.event_date between from_date and to_date
    and l.status in ('booked', 'hold')
  union
  select r.lehenga_id, r.event_date, 'request'
  from public.lehenga_requests r
  where r.event_date between from_date and to_date
    and r.status in ('requested', 'confirmed');
$$;

revoke all on function public.lehenga_calendar(date, date) from public;
grant execute on function public.lehenga_calendar(date, date) to anon, authenticated, service_role;

create or replace function private.request_lehenga(
  p_lehenga_id uuid,
  p_event_date date,
  p_customer_name text,
  p_phone text,
  p_note text
) returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  new_id uuid;
  clean_name text := left(btrim(p_customer_name), 80);
  clean_phone text := regexp_replace(coalesce(p_phone, ''), '[^0-9]', '', 'g');
  clean_note text := left(btrim(coalesce(p_note, '')), 280);
begin
  if clean_name is null or char_length(clean_name) < 2 then
    raise exception 'invalid_request';
  end if;
  if clean_phone !~ '^[6-9][0-9]{9}$' then
    raise exception 'invalid_request';
  end if;
  if p_event_date < current_date or p_event_date > current_date + 60 then
    raise exception 'invalid_request';
  end if;
  if not exists (select 1 from public.lehengas where id = p_lehenga_id) then
    raise exception 'invalid_request';
  end if;
  if exists (
    select 1 from public.lehengas
    where id = p_lehenga_id and event_date = p_event_date and status in ('booked', 'hold')
  ) or exists (
    select 1 from public.lehenga_requests
    where lehenga_id = p_lehenga_id and event_date = p_event_date and status in ('requested', 'confirmed')
  ) then
    raise exception 'slot_taken';
  end if;

  insert into public.lehenga_requests (lehenga_id, event_date, customer_name, phone, note, status)
  values (p_lehenga_id, p_event_date, clean_name, clean_phone, clean_note, 'requested')
  returning id into new_id;

  return new_id;
exception
  when unique_violation then
    raise exception 'slot_taken';
end;
$$;

create or replace function public.request_lehenga(
  p_lehenga_id uuid,
  p_event_date date,
  p_customer_name text,
  p_phone text,
  p_note text
) returns uuid
language sql
volatile
security invoker
set search_path = public, private
as $$
  select private.request_lehenga(p_lehenga_id, p_event_date, p_customer_name, p_phone, p_note);
$$;

revoke all on function private.request_lehenga(uuid, date, text, text, text) from public;
revoke all on function public.request_lehenga(uuid, date, text, text, text) from public;
grant execute on function private.request_lehenga(uuid, date, text, text, text) to anon, authenticated, service_role;
grant execute on function public.request_lehenga(uuid, date, text, text, text) to anon, authenticated, service_role;

-- Media bucket for lehenga photos and videos, managed from the desk.
insert into storage.buckets (id, name, public)
values ('lehenga-media', 'lehenga-media', true)
on conflict (id) do update set public = true;

drop policy if exists "lehenga media public read" on storage.objects;
create policy "lehenga media public read" on storage.objects
  for select to anon, authenticated using (bucket_id = 'lehenga-media');

drop policy if exists "lehenga media admin write" on storage.objects;
create policy "lehenga media admin write" on storage.objects
  for all to authenticated using (bucket_id = 'lehenga-media' and private.is_studio_admin())
  with check (bucket_id = 'lehenga-media' and private.is_studio_admin());

do $$
begin
  alter publication supabase_realtime add table public.lehenga_requests;
exception
  when duplicate_object then null;
  when undefined_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.lehengas;
exception
  when duplicate_object then null;
  when undefined_object then null;
end $$;
