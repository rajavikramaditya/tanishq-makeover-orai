-- Package reference videos: each bridal package can link a look video.

alter table public.services
  add column if not exists ref_video_url text not null default '';
