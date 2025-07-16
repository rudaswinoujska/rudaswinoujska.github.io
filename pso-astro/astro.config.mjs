import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://twojastrona.pl',
  markdown: { ... },
  // Dodaj domyślny język:
  experimental: {
    assets: {
      htmlLang: 'pl'
    }
  },
  integrations: [tailwind()]
});