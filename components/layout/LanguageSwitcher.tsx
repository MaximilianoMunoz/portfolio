import Link from "next/link";
import { localePath, locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex items-center rounded-full border border-border p-0.5 font-mono text-xs">
      {locales.map((locale) => {
        const active = locale === lang;
        return (
          <Link
            key={locale}
            href={localePath(locale)}
            hrefLang={locale}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
              active ? "bg-foreground text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
