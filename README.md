# Macro Monk Marketing + Blog

<p align="center">
  <img src="public/macro-monk.png" alt="Macro Monk logo" width="360" />
</p>

Astro site for **Macro Monk** with bilingual landing + blog content.

## Production Path

- Landing (EN): `https://macromonk.fi/`
- Landing (FI): `https://macromonk.fi/fi/`
- Blog (EN): `https://macromonk.fi/blog/`
- Blog (FI): `https://macromonk.fi/blog/fi/`

## Content Focus

- Training and nutrition guidance for lifters and athletes
- Body-composition trend explanations
- App marketing content that links to `https://app.macromonk.fi/`
- EN/FI language switcher across landing and blog

## Tech Stack
- Astro
- Markdown content collections
- Static output suitable for Vercel

## Local Development

```bash
npm install
npm run dev
```

## Writing New Posts

- Use templates:
  - `src/content/blog/templates/post-template-en.md`
  - `src/content/blog/templates/post-template-fi.md`
- Store post images in `public/blog/featured/` and `public/blog/instructions/`.
- Set optional featured image frontmatter fields:
  - `featuredImage`
  - `featuredImageAlt`

Build for production:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```
