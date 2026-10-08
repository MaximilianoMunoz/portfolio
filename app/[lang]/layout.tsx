import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/config/site";
import { getMessages, hasLocale, localePath, locales } from "@/lib/i18n";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getMessages(lang).meta;

  return {
    metadataBase: new URL(siteConfig.url),
    title: t.title,
    description: t.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    keywords: [
      "Flutter",
      "Senior Flutter Developer",
      "iOS",
      "Android",
      "Dart",
      "Next.js",
      "Freelance",
      "Desarrollador de apps",
      "Maximiliano Muñoz López",
    ],
    alternates: {
      canonical: localePath(lang),
      languages: {
        es: localePath("es"),
        en: localePath("en"),
        "x-default": localePath("es"),
      },
    },
    openGraph: {
      type: "website",
      url: localePath(lang),
      siteName: siteConfig.name,
      title: t.title,
      description: t.description,
      locale: lang === "es" ? "es_MX" : "en_US",
      alternateLocale: lang === "es" ? "en_US" : "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables the scroll-reveal styles only when JS is available. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="min-h-dvh font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
