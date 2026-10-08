# Maximiliano Muñoz López — Portafolio

Sitio personal de portafolio y servicios. Una sola página, bilingüe (español / inglés), con modo claro y oscuro, 100% estático.

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · next-themes · lucide-react
- **Rutas:** `/` → español (por defecto) · `/en` → inglés
- **SEO:** metadata por idioma, `hreflang`, Open Graph/Twitter con imagen generada, JSON-LD (`Person`), `sitemap.xml` y `robots.txt`

## Correr localmente

Requisitos: Node.js 20.9 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

Otros comandos:

```bash
npm run build      # compila la versión de producción
npm run start      # sirve la versión compilada
npm run lint       # revisa el código con ESLint
```

## Editar el contenido

| Qué quieres cambiar | Dónde |
| --- | --- |
| Cualquier texto del sitio | `messages/es.json` y `messages/en.json` (misma estructura en ambos) |
| WhatsApp, correo, LinkedIn, GitHub, URL del sitio | `config/site.ts` → `siteConfig` |
| Tecnologías y enlaces de cada proyecto (App Store, Google Play, sitio web) | `config/site.ts` → `projects` |
| Lista de tecnologías de "Sobre mí" | `config/site.ts` → `techStack` |
| Colores (acento rojo, fondos, bordes) | `app/globals.css` (variables en `:root` y `.dark`) |

Notas:
- Si agregas una clave en `es.json`, agrégala también en `en.json`. TypeScript marca error si falta.
- En `projects`, un enlace vacío (`""`) oculta su botón. Ejemplo:
  ```ts
  links: { appStore: "https://apps.apple.com/app/id123", googlePlay: "https://play.google.com/store/apps/details?id=com.ejemplo" }
  ```
- El mensaje prellenado de WhatsApp está en `contact.whatsappMessage` de cada idioma.

## Cambiar imágenes y archivos

Todos viven en `public/`. Reemplázalos con un archivo **del mismo nombre**:

| Archivo | Uso | Tamaño recomendado |
| --- | --- | --- |
| `public/projects/buzzstar.png` | Tarjeta de BuzzStar | 1600 × 1000 (16:10) |
| `public/projects/parlor.png` | Tarjeta de Parlor Games | 1600 × 1000 (16:10) |
| `public/projects/kiiwi.png` | Tarjeta de Kiiwi | 1600 × 1000 (16:10) |
| `public/projects/carmessie.png` | Tarjeta de Carmessie Velvet | 1600 × 1000 (16:10) |
| `public/me.jpg` | Tu foto en "Sobre mí" | 800 × 1000 (4:5) |
| `public/cv-es.pdf` / `public/cv-en.pdf` | CV descargable según el idioma | — |

Los archivos actuales son **placeholders**. `next/image` optimiza las imágenes automáticamente (AVIF/WebP y tamaños responsivos), así que puedes subirlas en buena calidad.

Si quieres usar otra extensión (por ejemplo `.webp`), cambia la ruta en `config/site.ts`.

La imagen que se ve al compartir el link (Open Graph) se genera sola desde `app/[lang]/opengraph-image.tsx`.

## Estructura

```
app/
  [lang]/layout.tsx           # <html lang>, fuentes, tema, metadata
  [lang]/page.tsx             # arma las secciones + JSON-LD
  [lang]/opengraph-image.tsx  # imagen para WhatsApp/LinkedIn
  global-not-found.tsx        # página 404
  sitemap.ts · robots.ts · icon.svg · globals.css
components/
  layout/    Header, Footer, LanguageSwitcher, ThemeToggle
  sections/  Hero, Services, Projects, About, Contact
  ui/        primitivas, íconos de marcas, animación de scroll
config/site.ts                # datos y enlaces
lib/i18n.ts                   # idiomas y carga de textos
messages/                     # textos es / en
public/                       # imágenes y PDFs
```

## Desplegar en Vercel

1. Sube el repositorio a GitHub (ver abajo).
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio. Vercel detecta Next.js solo; no cambies nada del build.
3. En **Environment Variables** agrega:
   - `NEXT_PUBLIC_SITE_URL` = la URL final del sitio, sin `/` al final (ej. `https://tudominio.com`).
   Se usa para las URLs canónicas, el sitemap y las imágenes de Open Graph.
4. Haz clic en **Deploy**.
5. Cada `git push` a `main` vuelve a desplegar automáticamente.

### Dominio propio

1. En Vercel: **Project → Settings → Domains → Add** y escribe tu dominio (ej. `tudominio.com`). Agrega también `www.tudominio.com` y configúralo para redirigir al dominio principal.
2. En el panel de tu proveedor de dominio (GoDaddy, Namecheap, Cloudflare, etc.) crea los registros DNS que Vercel te muestre. Normalmente son:
   - `A` para `@` → la IP que indique Vercel
   - `CNAME` para `www` → el valor que indique Vercel
3. Espera a que Vercel marque el dominio como válido (de minutos a pocas horas). El certificado HTTPS se genera automáticamente.
4. Actualiza `NEXT_PUBLIC_SITE_URL` con el dominio final y vuelve a desplegar (**Deployments → ⋯ → Redeploy**).
