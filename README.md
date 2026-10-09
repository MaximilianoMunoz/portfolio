# Maximiliano Muñoz López — Portafolio

Sitio web personal y portafolio. Senior Flutter Developer: desarrollo apps móviles para iOS y Android.

<details>
<summary>🇺🇸 English version</summary>

<br>

Personal website and portfolio. Senior Flutter Developer building mobile apps for iOS and Android.

### Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- [lucide-react](https://lucide.dev) icons

### Features

- Fully static: every page is prerendered at build time
- Bilingual (Spanish / English) with JSON-based translations: `/` (es) and `/en`
- Light and dark themes that follow the system preference
- SEO: per-locale metadata, `hreflang`, generated Open Graph images, JSON-LD, sitemap and robots.txt
- Subtle scroll animations that respect `prefers-reduced-motion`
- Lighthouse 95+ across all categories

### Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to the production URL.

### Project structure

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

### License

© Maximiliano Muñoz López. All rights reserved.

</details>

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [next-themes](https://github.com/pacocoursey/next-themes) para modo claro/oscuro
- Íconos de [lucide-react](https://lucide.dev)

## Características

- 100% estático: todas las páginas se generan al compilar
- Bilingüe (español / inglés) con traducciones en JSON: `/` (es) y `/en`
- Modo claro y oscuro según la preferencia del sistema
- SEO: metadata por idioma, `hreflang`, imágenes Open Graph generadas, JSON-LD, sitemap y robots.txt
- Animaciones sutiles al hacer scroll que respetan `prefers-reduced-motion`
- Lighthouse 95+ en todas las categorías

## Correr localmente

```bash
npm install
npm run dev
```

Otros scripts: `npm run build`, `npm run start`, `npm run lint`.

Define `NEXT_PUBLIC_SITE_URL` (ver `.env.example`) con la URL de producción.

## Estructura

```
app/
  [lang]/              # layout, página e imagen Open Graph por idioma
  sitemap.ts, robots.ts, global-not-found.tsx
components/
  layout/              # header, footer, selector de idioma y de tema
  sections/            # hero, servicios, proyectos, sobre mí, contacto
  ui/                  # componentes base e íconos
config/site.ts         # contacto, enlaces de proyectos y tecnologías
lib/i18n.ts            # utilidades de idioma
messages/              # es.json, en.json
public/                # imágenes y CV en PDF
```

## Licencia

© Maximiliano Muñoz López. Todos los derechos reservados.
