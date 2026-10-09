import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/config/site";
import { format, type Messages } from "@/lib/i18n";
import { AppleIcon, GooglePlayIcon, InstagramIcon } from "@/components/ui/brand-icons";
import { buttonClasses, Container, reveal, SectionHeading, Tag } from "@/components/ui/primitives";

export function Projects({ t }: { t: Messages["projects"] }) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-y border-border bg-surface-muted/50 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading id="projects-title" index="02" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

        <ul className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => {
            const copy = t.items[project.id];
            const { appStore, googlePlay, website, instagram } = project.links;
            const hasLinks = Boolean(appStore || googlePlay || website || instagram);

            return (
              <li
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
                {...reveal((i % 2) * 100)}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-muted">
                  <Image
                    src={project.image}
                    alt={format(t.imageAlt, { name: copy.name })}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/85 px-3 py-1 font-mono text-xs text-foreground backdrop-blur">
                    {copy.highlight}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="font-mono text-xs tracking-wider text-accent uppercase">{copy.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{copy.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{copy.description}</p>
                  <p className="mt-4 text-sm">
                    <span className="text-muted">{t.role}: </span>
                    <span className="font-medium">{copy.role}</span>
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech">
                    {project.tech.map((tech) => (
                      <li key={tech}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>

                  {hasLinks ? (
                    <div className="mt-auto flex flex-wrap gap-2 pt-7">
                      {appStore ? (
                        <a href={appStore} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary")}>
                          <AppleIcon className="size-4" />
                          {t.links.appStore}
                        </a>
                      ) : null}
                      {googlePlay ? (
                        <a href={googlePlay} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary")}>
                          <GooglePlayIcon className="size-3.5" />
                          {t.links.googlePlay}
                        </a>
                      ) : null}
                      {website ? (
                        <a href={website} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary")}>
                          {t.links.website}
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                        </a>
                      ) : null}
                      {instagram ? (
                        <a href={instagram} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary")}>
                          <InstagramIcon className="size-4" />
                          {t.links.instagram}
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
