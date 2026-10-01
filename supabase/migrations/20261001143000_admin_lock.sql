-- Admin writes are limited to rows in studio_admins.
-- The public site can read the catalogue and occupied times, not private ledgers.

create table public.studio_admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);

insert into public.studio_admins (user_id)
select id from auth.users where email = 'rajavikramaditya0@gmail.com';

alter table public.studio_admins enable row level security;

create policy studio_admins_self on public.studio_admins
  for select to authenticated using (user_id = auth.uid());

create or replace function private.is_studio_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.studio_admins where user_id = auth.uid()
  );
$$;

revoke all on function private.is_studio_admin() from public;
grant execute on function private.is_studio_admin() to authenticated;

drop policy if exists studio_settings_admin_write on public.studio_settings;
drop policy if exists services_admin_read on public.services;
drop policy if exists services_admin_write on public.services;
drop policy if exists services_admin_all on public.services;
drop policy if exists slots_admin_read on public.time_slots;
drop policy if exists slots_admin_write on public.time_slots;
drop policy if exists slots_admin_all on public.time_slots;
drop policy if exists bookings_admin_all on public.bookings;
drop policy if exists blocks_admin_all on public.slot_blocks;
drop policy if exists lehengas_admin_all on public.lehengas;
drop policy if exists gift_books_admin_all on public.gift_books;
drop policy if exists gift_lines_admin_all on public.gift_lines;
drop policy if exists trainees_admin_all on public.trainees;

create policy studio_settings_admin_write on public.studio_settings
  for update to authenticated using (private.is_studio_admin()) with check (private.is_studio_admin());
create policy services_admin_all on public.services
  for all to authenticated using (private.is_studio_admin()) with check (private.is_studio_admin());
create policy slots_admin_all on public.time_slots
  for all to authenticated using (private.is_studio_admin()) with check (private.is_studio_admin());
create policy bookings_admin_all on public.bookings
  for all to authenticated using (private.is_studio_admin()) with check (private.is_studio_admin());
create policy blocks_admin_all on public.slot_blocks
  for all to authenticated using (private.is_studio_admin()) with check (private.is_studio_admin());
create policy lehengas_admin_all on public.lehengas
  for all to authenticated using (private.is_studio_admin()) with check (private.is_studio_admin());
create policy gift_books_admin_all on public.gift_books
  for all to authenticated using (private.is_studio_admin()) with check (private.is_studio_admin());
create policy gift_lines_admin_all on public.gift_lines
  for all to authenticated using (private.is_studio_admin()) with check (private.is_studio_admin());
create policy trainees_admin_all on public.trainees
  for all to authenticated using (private.is_studio_admin()) with check (private.is_studio_admin());
