/**
 * Datos que NO dependen del idioma: enlaces, contacto y URLs.
 * Los textos traducibles viven en messages/es.json y messages/en.json.
 */

export const siteConfig = {
  name: "Maximiliano Muñoz López",
  // Cambia esto por tu dominio final (o define NEXT_PUBLIC_SITE_URL en Vercel).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://maximilianomunoz.dev").replace(/\/$/, ""),
  email: "mmunozlopez97@gmail.com",
  // Número en formato internacional, solo dígitos (52 = México).
  whatsappNumber: "527223977437",
  linkedin: "https://www.linkedin.com/in/maximiliano-mu%C3%B1oz-l%C3%B3pez",
  github: "https://github.com/MaximilianoMunoz",
  cv: {
    es: "/cv-es.pdf",
    en: "/cv-en.pdf",
  },
  photo: "/me.jpg",
} as const;

export type ProjectId = "buzzstar" | "parlor" | "kiiwi" | "carmessie";

export type ProjectLinks = {
  appStore?: string;
  googlePlay?: string;
  website?: string;
};

/**
 * Imágenes, tecnologías y enlaces de cada proyecto.
 * Deja un enlace vacío ("") para ocultar su botón.
 * Los textos (nombre, descripción, rol) están en messages/*.json bajo "projects.items".
 */
export const projects: {
  id: ProjectId;
  image: string;
  tech: string[];
  links: ProjectLinks;
}[] = [
  {
    id: "buzzstar",
    image: "/projects/buzzstar.png",
    tech: ["Flutter", "Riverpod", "Agora SDK", "Stripe", "Firebase"],
    links: { appStore: "", googlePlay: "" },
  },
  {
    id: "parlor",
    image: "/projects/parlor.png",
    tech: ["Flutter", "Firebase"],
    links: { appStore: "", googlePlay: "" },
  },
  {
    id: "kiiwi",
    image: "/projects/kiiwi.png",
    tech: ["Flutter", "GetX", "REST", "Firebase"],
    links: { appStore: "", googlePlay: "" },
  },
  {
    id: "carmessie",
    image: "/projects/carmessie.png",
    tech: ["Next.js", "React"],
    links: { website: "https://www.carmessievelvet.com.mx/" },
  },
];

export const techStack = [
  "Flutter",
  "Dart",
  "Riverpod",
  "BLoC",
  "Firebase",
  "GraphQL",
  "REST",
  "Stripe",
  "Agora",
  "Next.js",
  "React",
] as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
