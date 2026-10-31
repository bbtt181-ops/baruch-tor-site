# ברוך תור – מורה הנהיגה שלי

Astro static site. All business facts live in `src/data/site.ts`; hero photos in `src/data/heroPhotos.ts`.

- `npm install`
- `npm run dev` – local preview
- `npm run build` – static output in `dist/`

Deploy: Vercel auto-detects Astro (build `npm run build`, output `dist`).
When the real domain is bought, update `site` in `astro.config.mjs` and the Sitemap line in `public/robots.txt`.
