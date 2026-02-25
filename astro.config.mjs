import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://macromonk.fi',
  trailingSlash: 'always',
  redirects: {
    '/blog/fi/1rm-paiva-hajosi-siksi-lisaan-palautumisen-seurannan-macro-monkiin-fi/':
      '/blog/fi/1rm-paivani-hajosi-palautumisen-seuranta-fi/'
  }
});
