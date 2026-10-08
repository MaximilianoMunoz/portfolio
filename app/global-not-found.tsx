import type { Metadata } from "next";
import { Geist } from "next/font/google";
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `404 — ${es.notFound.title}`,
  robots: { index: false },
};

// Rendered for any URL that doesn't match a route. It bypasses the [lang] layout,
// so it shows both languages and follows the OS color scheme.
export default function GlobalNotFound() {
  return (
    <html lang="es" className={`${geistSans.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
      </head>
      <body className="flex min-h-dvh items-center justify-center px-6 font-sans">
        <main className="max-w-md text-center">
          <p className="font-mono text-sm tracking-widest text-accent">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">{es.notFound.title}</h1>
          <p className="mt-3 text-muted">{es.notFound.description}</p>
          <p className="mt-1 text-sm text-muted">{en.notFound.description}</p>
          <div className="mt-8 flex justify-center gap-3 text-sm">
            {/* Plain anchors: this page is outside the app's layouts. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="rounded-full bg-accent-solid px-5 py-2.5 font-medium text-white hover:bg-accent-solid-hover">
              {es.notFound.back}
            </a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/en" className="rounded-full border border-border px-5 py-2.5 font-medium hover:bg-surface-muted">
              {en.notFound.back}
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
