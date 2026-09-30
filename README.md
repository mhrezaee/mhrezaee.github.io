# mhrezaee.github.io

Personal portfolio of Hadi Rezaee, live at <https://mhrezaee.github.io>.

**Stack:** [Astro 7](https://astro.build) · [Tailwind CSS 4](https://tailwindcss.com) · TypeScript · [Lenis](https://lenis.darkroom.engineering) smooth scroll · Geist fonts · Iconify SVG icons (inlined at build time).

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the production build
npm run check     # type-check
```

## Editing content

All text (bio, experience, skills, education, links) lives in [`src/data/profile.ts`](src/data/profile.ts).
Components in `src/components/` only render that data. The portrait is `src/assets/headshot.jpg` (a crop of `profile.jpg`)
(optimized to WebP automatically). `public/og.jpg` is the social-share preview image.

## Deploy

Every push to `main` builds and deploys through GitHub Actions (`.github/workflows/deploy.yml`).
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
