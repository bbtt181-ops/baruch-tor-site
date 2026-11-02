import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain once purchased
export default defineConfig({
  site: 'https://www.baruch-tor.co.il',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
