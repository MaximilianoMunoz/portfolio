import type { ComponentType, ReactNode, SVGProps } from "react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import type { Locale, Messages } from "@/lib/i18n";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/brand-icons";
import { CopyButton } from "@/components/ui/CopyButton";
import { buttonClasses, Container, reveal } from "@/components/ui/primitives";

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
  children,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  children?: ReactNode;
}) {
  return (
    <li className="flex items-center gap-2 rounded-xl border border-border bg-surface pr-2 transition-colors hover:border-foreground/25">
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex min-w-0 flex-1 items-center gap-4 p-4"
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-foreground">
          <Icon className="size-[18px]" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block text-xs text-muted">{label}</span>
          <span className="block truncate font-medium">{value}</span>
        </span>
        {external ? <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted" aria-hidden="true" /> : null}
      </a>
      {children}
    </li>
  );
}

export function Contact({ t, lang }: { t: Messages["contact"]; lang: Locale }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-24 sm:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-12 lg:p-16">
          <div
            className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-accent-soft blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div {...reveal()}>
              <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-accent uppercase">
                <span>04</span>
                <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
                <span>{t.eyebrow}</span>
              </p>
              <h2 id="contact-title" className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                {t.title}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{t.intro}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappUrl(t.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses("primary", "lg")}
                >
                  <WhatsAppIcon className="size-5" />
                  {t.whatsapp}
                </a>
                <a href={siteConfig.cv[lang]} download className={buttonClasses("secondary", "lg")}>
                  <Download className="size-4" aria-hidden="true" />
                  {t.cv}
                </a>
              </div>
            </div>

            <ul className="flex flex-col gap-3 self-end" {...reveal(100)}>
              <ContactRow icon={Mail} label={t.email} value={siteConfig.email} href={`mailto:${siteConfig.email}`}>
                <CopyButton value={siteConfig.email} label={t.copy} copiedLabel={t.copied} />
              </ContactRow>
              <ContactRow
                icon={LinkedInIcon}
                label={t.linkedin}
                value="in/maximiliano-muñoz-lópez"
                href={siteConfig.linkedin}
                external
              />
              <ContactRow
                icon={GitHubIcon}
                label={t.github}
                value={siteConfig.github.replace("https://", "")}
                href={siteConfig.github}
                external
              />
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
