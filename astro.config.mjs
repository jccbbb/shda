import { defineConfig } from 'astro/config';

// Determine deployment target from environment
const isCloudflare = process.env.CF_PAGES === '1';

// https://astro.build/config
export default defineConfig({
  site: isCloudflare
    ? 'https://shda.pages.dev'  // Update to your custom domain when ready
    : 'https://jccbbb.github.io',
  base: isCloudflare ? '/' : '/shda',
});
