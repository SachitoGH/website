// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // This is required for the social media images and canonical URLs to work
  site: 'https://surf-sidi-kaouki.netlify.app',

  vite: {
    plugins: [tailwindcss()]
  }
});
