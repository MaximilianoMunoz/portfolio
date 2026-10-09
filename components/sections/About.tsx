import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { siteConfig, techStack } from "@/config/site";
import type { Messages } from "@/lib/i18n";
import { Container, reveal, SectionHeading } from "@/components/ui/primitives";

export function About({ t }: { t: Messages["about"] }) {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading id="about-title" index="03" eyebrow={t.eyebrow} title={t.title} />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div {...reveal()}>
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border border-border bg-surface-muted lg:mx-0">
              <Image
                src={siteConfig.photo}
                alt={t.photoAlt}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 384px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="space-y-5 text-lg leading-relaxed text-muted" {...reveal(80)}>
              {t.paragraphs.map((p) => (
                <p key={p} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 flex gap-5 rounded-2xl border border-border bg-surface p-6" {...reveal(120)}>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs tracking-wider text-accent uppercase">{t.education.label}</p>
                <p className="mt-1 text-lg font-semibold tracking-tight">{t.education.title}</p>
                <p className="mt-1 text-muted">{t.education.school}</p>
              </div>
            </div>

            <div className="mt-10" {...reveal(160)}>
              <h3 className="mb-4 font-mono text-xs tracking-wider text-muted uppercase">{t.stackTitle}</h3>
              <ul className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-border bg-surface px-3.5 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
