import { ArrowDown, ArrowRight } from "lucide-react";
import type { Messages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { buttonClasses, Container, reveal } from "@/components/ui/primitives";

export function Hero({ t }: { t: Messages["hero"] }) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {t.badge}
        </p>

        {/* No reveal animation on the heading: it's the LCP element and must paint immediately. */}
        <h1 className="max-w-4xl text-5xl leading-[1.02] font-semibold tracking-tighter text-balance sm:text-7xl lg:text-8xl">
          {siteConfig.name}
        </h1>

        <p className="mt-6 font-mono text-sm tracking-wide text-accent uppercase sm:text-base">{t.role}</p>

        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-pretty text-muted sm:text-2xl">{t.tagline}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className={buttonClasses("primary", "lg")}>
            {t.ctaPrimary}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a href="#projects" className={buttonClasses("secondary", "lg")}>
            {t.ctaSecondary}
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-20 lg:grid-cols-4">
          {t.stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col-reverse bg-surface p-5 sm:p-6" {...reveal(i * 80)}>
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
