# Maximiliano Muñoz López — Portfolio

Personal website and portfolio. Senior Flutter Developer building mobile apps for iOS and Android.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- [lucide-react](https://lucide.dev) icons

## Features

- Fully static: every page is prerendered at build time
- Bilingual (Spanish / English) with JSON-based translations: `/` (es) and `/en`
- Light and dark themes that follow the system preference
- SEO: per-locale metadata, `hreflang`, generated Open Graph images, JSON-LD, sitemap and robots.txt
- Subtle scroll animations that respect `prefers-reduced-motion`
- Lighthouse 95+ across all categories

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to the production URL.

## Project structure

```
app/
  [lang]/              # localized layout, page and Open Graph image
  sitemap.ts, robots.ts, global-not-found.tsx
components/
  layout/              # header, footer, language and theme switchers
  sections/            # hero, services, projects, about, contact
  ui/                  # shared primitives and icons
config/site.ts         # contact info, project links and tech stack
lib/i18n.ts            # locale helpers
messages/              # es.json, en.json
public/                # images and résumé PDFs
```

## License

© Maximiliano Muñoz López. All rights reserved.
