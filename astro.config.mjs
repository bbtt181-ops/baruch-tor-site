import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain once purchased
export default defineConfig({
  site: 'https://baruch-tor-site.vercel.app',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
