import es from "@/messages/es.json";
import en from "@/messages/en.json";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export type Messages = typeof es;

// `satisfies` makes TypeScript fail if en.json is missing a key from es.json.
const dictionaries = { es, en: en satisfies Messages } as const;

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

/** Public path of the home page for a locale: "/" for Spanish, "/en" for English. */
export function localePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

/** Replaces {placeholders} in a message. */
export function format(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? `{${key}}`);
}
