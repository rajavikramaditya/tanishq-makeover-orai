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
