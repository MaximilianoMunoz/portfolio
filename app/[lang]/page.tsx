import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getMessages, hasLocale, localePath } from "@/lib/i18n";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { RevealObserver } from "@/components/ui/RevealObserver";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getMessages(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: t.hero.role,
    description: t.meta.description,
    url: `${siteConfig.url}${localePath(lang)}`,
    image: `${siteConfig.url}${siteConfig.photo}`,
    email: `mailto:${siteConfig.email}`,
    sameAs: [siteConfig.linkedin, siteConfig.github],
    knowsAbout: ["Flutter", "Dart", "iOS", "Android", "Firebase", "Stripe", "Agora", "Next.js", "React"],
    award: t.about.award.title,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header lang={lang} t={t.nav} />
      <main id="main">
        <Hero t={t.hero} />
        <Services t={t.services} />
        <Projects t={t.projects} />
        <About t={t.about} />
        <Contact t={t.contact} lang={lang} />
      </main>
      <Footer t={t.footer} />
      <RevealObserver />
    </>
  );
}
