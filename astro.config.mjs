// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://surf-sidi-kaouki.vercel.app',

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: true // On force le /fr/ dans l'URL
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
