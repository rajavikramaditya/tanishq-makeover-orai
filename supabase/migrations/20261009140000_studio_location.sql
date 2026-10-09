-- Location pin, lane directions, and separate social links for the studio footer.

alter table public.studio_settings add column if not exists directions_hi text not null default '';
alter table public.studio_settings add column if not exists directions_en text not null default '';
alter table public.studio_settings add column if not exists map_lat double precision;
alter table public.studio_settings add column if not exists map_lng double precision;

update public.studio_settings set
  instagram = 'https://www.instagram.com/spar.klemakeover/',
  facebook = 'https://facebook.com/101835146093091',
  map_lat = 25.990364,
  map_lng = 79.465031,
  directions_hi = 'हनुमान चबूतरा पहुँचकर राजेन्द्र नगर की गली में आएँ। मैप का पिन सीधे पार्लर पर है। रास्ता न मिले तो कॉल या WhatsApp करें — हम लाइव लोकेशन भेज देंगे।',
  directions_en = 'Reach Hanuman Chabutara and turn into the Rajendra Nagar lane. The map pin sits on the parlour itself. If you cannot find it, call or WhatsApp and we will send a live location.',
  updated_at = now()
where id = 1;
