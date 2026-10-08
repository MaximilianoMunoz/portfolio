import { CreditCard, Globe, Smartphone, Wrench } from "lucide-react";
import type { Messages } from "@/lib/i18n";
import { Container, reveal, SectionHeading } from "@/components/ui/primitives";

// Order matches services.items in messages/*.json
const icons = [Smartphone, Wrench, CreditCard, Globe];

export function Services({ t }: { t: Messages["services"] }) {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading id="services-title" index="01" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

        <ul className="grid gap-4 sm:grid-cols-2">
          {t.items.map((item, i) => {
            const Icon = icons[i] ?? Smartphone;
            return (
              <li
                key={item.title}
                className="group relative rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8"
                {...reveal(i * 80)}
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
