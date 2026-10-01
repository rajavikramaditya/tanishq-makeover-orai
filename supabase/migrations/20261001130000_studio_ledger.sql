-- Tanishq Makeover Orai: public catalogue, shared calendar, private studio ledger.

create schema if not exists private;

create table public.studio_settings (
  id integer primary key default 1 check (id = 1),
  whatsapp text not null,
  phone_main text not null,
  phone_booking text not null,
  phone_extra text not null,
  instagram text not null,
  address_hi text not null,
  address_en text not null,
  updated_at timestamptz not null default now()
);

create table public.services (
  id text primary key,
  category text not null check (category in ('bridal', 'salon')),
  group_key text not null,
  name_hi text not null,
  name_en text not null,
  note_hi text not null default '',
  note_en text not null default '',
  price_inr integer check (price_inr is null or price_inr >= 0),
  sort_order integer not null default 0,
  active boolean not null default true,
  updated_at timestamptz not null default now()
);

create index services_category_sort_idx on public.services (category, sort_order);

create table public.time_slots (
  id text primary key,
  label_hi text not null,
  label_en text not null,
  starts text not null,
  ends text not null,
  sort_order integer not null default 0,
  active boolean not null default true
);

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('bridal', 'salon')),
  service_id text not null references public.services (id),
  event_date date not null,
  slot text not null,
  customer_name text not null,
  phone text not null,
  guest_for text not null check (guest_for in ('self', 'bride', 'family')),
  note text not null default '',
  status text not null default 'requested' check (status in ('requested', 'confirmed', 'completed', 'cancelled')),
  paid_status text not null default 'unpaid' check (paid_status in ('unpaid', 'partial', 'paid')),
  amount_inr integer check (amount_inr is null or amount_inr >= 0),
  created_at timestamptz not null default now()
);

create index bookings_day_idx on public.bookings (event_date, slot);
create index bookings_status_day_idx on public.bookings (status, event_date);

create unique index bookings_open_slot_uidx
  on public.bookings (event_date, slot)
  where status in ('requested', 'confirmed');

create table public.slot_blocks (
  id uuid primary key default gen_random_uuid(),
  event_date date not null,
  slot text not null,
  note text not null default '',
  created_at timestamptz not null default now(),
  unique (event_date, slot)
);

create index slot_blocks_day_idx on public.slot_blocks (event_date);

create table public.lehengas (
  id uuid primary key default gen_random_uuid(),
  tag_no text not null unique,
  title text not null default '',
  photo text not null default '',
  status text not null default 'available' check (status in ('available', 'booked', 'returned', 'hold')),
  client_name text not null default '',
  client_phone text not null default '',
  event_date date,
  paid_status text not null default 'unpaid' check (paid_status in ('unpaid', 'partial', 'paid')),
  amount_inr integer check (amount_inr is null or amount_inr >= 0),
  note text not null default '',
  updated_at timestamptz not null default now()
);

create table public.gift_books (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  event_date date,
  note text not null default '',
  created_at timestamptz not null default now()
);

create table public.gift_lines (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references public.gift_books (id) on delete cascade,
  product_name text not null,
  total_qty integer not null check (total_qty >= 0),
  used_qty integer not null default 0 check (used_qty >= 0),
  note text not null default '',
  check (used_qty <= total_qty)
);

create index gift_lines_book_idx on public.gift_lines (book_id);

create table public.trainees (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  age integer check (age is null or (age >= 5 and age <= 80)),
  guardian_name text not null default '',
  phone text not null default '',
  course text not null,
  started_on date not null,
  status text not null default 'learning' check (status in ('learning', 'completed', 'paused')),
  fee_inr integer not null default 0 check (fee_inr >= 0),
  paid_inr integer not null default 0 check (paid_inr >= 0),
  note text not null default '',
  updated_at timestamptz not null default now(),
  check (paid_inr <= fee_inr)
);

create index trainees_started_idx on public.trainees (started_on);

alter table public.studio_settings enable row level security;
alter table public.services enable row level security;
alter table public.time_slots enable row level security;
alter table public.bookings enable row level security;
alter table public.slot_blocks enable row level security;
alter table public.lehengas enable row level security;
alter table public.gift_books enable row level security;
alter table public.gift_lines enable row level security;
alter table public.trainees enable row level security;

create policy studio_settings_public_read on public.studio_settings
  for select to anon, authenticated using (true);
create policy studio_settings_admin_write on public.studio_settings
  for update to authenticated using (true) with check (true);

create policy services_public_read on public.services
  for select to anon using (active = true);
create policy services_admin_read on public.services
  for select to authenticated using (true);
create policy services_admin_write on public.services
  for all to authenticated using (true) with check (true);

create policy slots_public_read on public.time_slots
  for select to anon using (active = true);
create policy slots_admin_read on public.time_slots
  for select to authenticated using (true);
create policy slots_admin_write on public.time_slots
  for all to authenticated using (true) with check (true);

create policy bookings_admin_all on public.bookings
  for all to authenticated using (true) with check (true);

create policy blocks_admin_all on public.slot_blocks
  for all to authenticated using (true) with check (true);

create policy lehengas_admin_all on public.lehengas
  for all to authenticated using (true) with check (true);

create policy gift_books_admin_all on public.gift_books
  for all to authenticated using (true) with check (true);

create policy gift_lines_admin_all on public.gift_lines
  for all to authenticated using (true) with check (true);

create policy trainees_admin_all on public.trainees
  for all to authenticated using (true) with check (true);

insert into public.studio_settings (
  whatsapp, phone_main, phone_booking, phone_extra, instagram, address_hi, address_en
) values (
  '917355718075',
  '7355718075',
  '7080849084',
  '9936575872',
  'https://www.instagram.com/tanishqmakeoverorai/',
  'बाइक एजेंसी, ध्रुव-तारा के उत्तर की ओर, राधा पैलेस के सामने, जिला परिषद रोड, ओराई, उत्तर प्रदेश 285001',
  'Bike Agency, north of Dhruv-Tara, opposite Radha Palace, Zilla Parishad Road, Orai, Uttar Pradesh 285001'
);

insert into public.time_slots (id, label_hi, label_en, starts, ends, sort_order) values
  ('morning', 'सुबह', 'Morning', '09:00', '12:00', 1),
  ('afternoon', 'दोपहर', 'Afternoon', '12:00', '16:00', 2),
  ('evening', 'संध्या', 'Evening', '16:00', '19:00', 3),
  ('night', 'रात्रि पूर्व', 'Early night', '19:00', '20:30', 4);

insert into public.services (id, category, group_key, name_hi, name_en, note_hi, note_en, price_inr, sort_order) values
  ('wedding', 'bridal', 'bridal', 'विवाह मेकअप', 'Wedding makeup', 'विवाह-दिवस का पूर्ण रूप, आधार से अंतिम सज्जा तक।', 'The full wedding-day look, from base to the final setting.', null, 1),
  ('hd', 'bridal', 'bridal', 'एचडी ब्राइडल', 'HD bridal', 'कैमरे के लिए स्पष्ट और दीर्घस्थायी फिनिश।', 'A clear, long-wear finish made for the camera.', null, 2),
  ('airbrush', 'bridal', 'bridal', 'एयरब्रश ब्राइडल', 'Airbrush bridal', 'हल्की परत, समरूप रंग और लंबे समय तक टिकाव।', 'A light, even layer with long wear.', null, 3),
  ('engagement', 'bridal', 'bridal', 'सगाई', 'Engagement', 'सगाई के लिए कोमल और चित्र-योग्य रूप।', 'A soft look that reads clearly in photographs.', null, 4),
  ('haldi', 'bridal', 'bridal', 'हल्दी', 'Haldi', 'हल्दी और फूलों के साथ हल्की, ताज़ा सज्जा।', 'Light and fresh, composed for yellow and flowers.', null, 5),
  ('mehndi', 'bridal', 'bridal', 'मेहंदी', 'Mehndi', 'मेहंदी और पारिवारिक समारोह के लिए मृदु रूप।', 'A softer glam for mehndi and family functions.', null, 6),
  ('sangeet', 'bridal', 'bridal', 'संगीत', 'Sangeet', 'संगीत की शाम के लिए चमकदार रूप।', 'A brighter look for the sangeet evening.', null, 7),
  ('reception', 'bridal', 'bridal', 'रिसेप्शन', 'Reception', 'रिसेप्शन के लिए संध्या-कालीन रूप।', 'An evening look for the reception.', null, 8),
  ('trial', 'bridal', 'bridal', 'मेकअप ट्रायल', 'Makeup trial', 'विवाह से पहले रूप की परीक्षा।', 'A trial of the look before the wedding day.', null, 9),
  ('prebridal', 'bridal', 'bridal', 'प्री-ब्राइडल केयर', 'Pre-bridal care', 'विवाह से पहले त्वचा की तैयारी।', 'Skin preparation in the days before the wedding.', null, 10),
  ('family', 'bridal', 'bridal', 'परिवार ग्लैम', 'Family glam', 'माता, बहन और अतिथियों की एक साथ सज्जा।', 'Mothers, sisters, and guests, prepared together.', null, 11),
  ('shoot', 'bridal', 'bridal', 'फोटोशूट', 'Photoshoot', 'चित्रण के लिए रूप। छायाचित्र अलग से निर्धारित होता है।', 'A look built for the camera. Photography is arranged separately.', null, 12),
  ('thread-brow', 'salon', 'thread', 'भौंह सूत्रण', 'Eyebrow threading', 'भौंहों का आकार।', 'Brow shaping.', 50, 101),
  ('thread-lip', 'salon', 'thread', 'ऊपरी ओष्ठ सूत्रण', 'Upper lip threading', 'ऊपरी ओष्ठ।', 'Upper lip.', 40, 102),
  ('thread-forehead', 'salon', 'thread', 'ललाट सूत्रण', 'Forehead threading', 'ललाट की रेखा।', 'Forehead.', 40, 103),
  ('thread-face', 'salon', 'thread', 'पूर्ण मुख सूत्रण', 'Full face threading', 'भौंह, ललाट और ओष्ठ।', 'Brows, forehead, and lip.', 120, 104),
  ('wax-underarm', 'salon', 'wax', 'काँख वैक्स', 'Underarm wax', 'दोनों काँख।', 'Both underarms.', 100, 201),
  ('wax-half-arm', 'salon', 'wax', 'अर्ध बाहु वैक्स', 'Half arms wax', 'कोहनी तक।', 'To the elbow.', 200, 202),
  ('wax-full-arm', 'salon', 'wax', 'पूर्ण बाहु वैक्स', 'Full arms wax', 'पूर्ण बाहु।', 'Full arms.', 350, 203),
  ('wax-arm-under', 'salon', 'wax', 'बाहु तथा काँख', 'Arms and underarms', 'पूर्ण बाहु के साथ काँख।', 'Full arms with underarms.', 400, 204),
  ('wax-half-leg', 'salon', 'wax', 'अर्ध पाद वैक्स', 'Half legs wax', 'घुटने तक।', 'To the knee.', 300, 205),
  ('wax-full-leg', 'salon', 'wax', 'पूर्ण पाद वैक्स', 'Full legs wax', 'पूर्ण पाद।', 'Full legs.', 550, 206),
  ('wax-body', 'salon', 'wax', 'पूर्ण शरीर वैक्स', 'Full body wax', 'बाहु, पाद और काँख।', 'Arms, legs, and underarms.', 1800, 207),
  ('skin-cleanup', 'salon', 'skin', 'क्लीनअप', 'Cleanup', 'त्वचा की सफाई।', 'A skin cleanup.', 600, 301),
  ('skin-fruit', 'salon', 'skin', 'फल फेशियल', 'Fruit facial', 'सामान्य त्वचा के लिए।', 'For regular skin care.', 800, 302),
  ('skin-gold', 'salon', 'skin', 'गोल्ड फेशियल', 'Gold facial', 'उज्ज्वल फिनिश।', 'A brighter finish.', 1200, 303),
  ('skin-detan', 'salon', 'skin', 'डी-टैन', 'De-tan', 'धूप के प्रभाव को हल्का करना।', 'Softens the look of sun exposure.', 700, 304),
  ('skin-bridal', 'salon', 'skin', 'ब्राइडल ग्लो फेशियल', 'Bridal glow facial', 'विवाह से पहले की त्वचा।', 'Skin care before the wedding.', 1600, 305),
  ('hair-wash', 'salon', 'hair', 'केश प्रक्षालन', 'Hair wash', 'धोकर सुखाना।', 'Wash and dry.', 200, 401),
  ('hair-blow', 'salon', 'hair', 'ब्लो ड्राई', 'Blow dry', 'सेट करके सुखाना।', 'A styled blow dry.', 400, 402),
  ('hair-spa', 'salon', 'hair', 'हेयर स्पा', 'Hair spa', 'रूखे केशों के लिए पोषण।', 'Nourishment for dry hair.', 1000, 403),
  ('hair-bun', 'salon', 'hair', 'जूड़ा / हेयर स्टाइल', 'Bun and hair styling', 'समारोह के लिए केश-रचना।', 'Hair setting for a function.', 700, 404),
  ('hands-mani', 'salon', 'hands', 'मैनीक्योर', 'Manicure', 'हस्त और नख।', 'Hands and nails.', 450, 501),
  ('hands-pedi', 'salon', 'hands', 'पेडीक्योर', 'Pedicure', 'पाद और नख।', 'Feet and nails.', 550, 502),
  ('hands-combo', 'salon', 'hands', 'मैनीक्योर और पेडीक्योर', 'Manicure and pedicure', 'हस्त तथा पाद, दोनों।', 'Hands and feet together.', 900, 503),
  ('style-drape', 'salon', 'style', 'साड़ी ड्रेपिंग', 'Saree draping', 'मेकअप के साथ या अलग।', 'With the makeup, or on its own.', 500, 601),
  ('style-light', 'salon', 'style', 'हल्का मेकअप', 'Light makeup', 'दैनिक समारोह के लिए।', 'For a smaller gathering.', 1500, 602),
  ('style-party', 'salon', 'style', 'पार्टी मेकअप', 'Party makeup', 'जन्मदिन या संध्या। विवाह-रूप अलग है।', 'A birthday or an evening. Bridal looks are separate.', 2500, 603);

create or replace function private.occupied_slots(from_date date, to_date date)
returns table (day date, slot text)
language sql
stable
security definer
set search_path = public
as $$
  select b.event_date, b.slot
  from public.bookings b
  where b.status in ('requested', 'confirmed')
    and b.event_date between from_date and to_date
  union
  select k.event_date, k.slot
  from public.slot_blocks k
  where k.event_date between from_date and to_date
$$;

create or replace function private.request_appointment(
  p_category text,
  p_service_id text,
  p_event_date date,
  p_slot text,
  p_customer_name text,
  p_phone text,
  p_guest_for text,
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
  if p_category not in ('bridal', 'salon') then
    raise exception 'invalid_request';
  end if;
  if p_guest_for not in ('self', 'bride', 'family') then
    raise exception 'invalid_request';
  end if;
  if clean_name is null or char_length(clean_name) < 2 then
    raise exception 'invalid_request';
  end if;
  if clean_phone !~ '^[6-9][0-9]{9}$' then
    raise exception 'invalid_request';
  end if;
  if p_event_date < current_date or p_event_date > current_date + 60 then
    raise exception 'invalid_request';
  end if;
  if not exists (
    select 1 from public.services s
    where s.id = p_service_id and s.category = p_category and s.active
  ) then
    raise exception 'invalid_request';
  end if;
  if not exists (
    select 1 from public.time_slots t where t.id = p_slot and t.active
  ) then
    raise exception 'invalid_request';
  end if;
  if exists (
    select 1 from public.bookings b
    where b.event_date = p_event_date and b.slot = p_slot and b.status in ('requested', 'confirmed')
  ) or exists (
    select 1 from public.slot_blocks k
    where k.event_date = p_event_date and k.slot = p_slot
  ) then
    raise exception 'slot_taken';
  end if;

  insert into public.bookings (
    category, service_id, event_date, slot, customer_name, phone, guest_for, note, status, paid_status
  ) values (
    p_category, p_service_id, p_event_date, p_slot, clean_name, clean_phone, p_guest_for, clean_note, 'requested', 'unpaid'
  ) returning id into new_id;

  return new_id;
exception
  when unique_violation then
    raise exception 'slot_taken';
end;
$$;

create or replace function public.occupied_slots(from_date date, to_date date)
returns table (day date, slot text)
language sql
stable
security invoker
set search_path = public, private
as $$
  select * from private.occupied_slots(from_date, to_date);
$$;

create or replace function public.request_appointment(
  p_category text,
  p_service_id text,
  p_event_date date,
  p_slot text,
  p_customer_name text,
  p_phone text,
  p_guest_for text,
  p_note text
) returns uuid
language sql
volatile
security invoker
set search_path = public, private
as $$
  select private.request_appointment(
    p_category, p_service_id, p_event_date, p_slot, p_customer_name, p_phone, p_guest_for, p_note
  );
$$;

revoke all on function private.occupied_slots(date, date) from public;
revoke all on function private.request_appointment(text, text, date, text, text, text, text, text) from public;
revoke all on function public.occupied_slots(date, date) from public;
revoke all on function public.request_appointment(text, text, date, text, text, text, text, text) from public;

grant usage on schema private to anon, authenticated, service_role;
grant execute on function private.occupied_slots(date, date) to anon, authenticated, service_role;
grant execute on function private.request_appointment(text, text, date, text, text, text, text, text) to anon, authenticated, service_role;
grant execute on function public.occupied_slots(date, date) to anon, authenticated, service_role;
grant execute on function public.request_appointment(text, text, date, text, text, text, text, text) to anon, authenticated, service_role;

do $$
begin
  alter publication supabase_realtime add table public.bookings;
exception
  when duplicate_object then null;
  when undefined_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.slot_blocks;
exception
  when duplicate_object then null;
  when undefined_object then null;
end $$;
