import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { Messages } from "@/lib/i18n";
import { Container } from "@/components/ui/primitives";

export function Footer({ t }: { t: Messages["footer"] }) {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {t.rights}
          <span className="block sm:inline sm:pl-1">{t.built}</span>
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
          {t.backToTop}
          <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </Container>
    </footer>
  );
}
