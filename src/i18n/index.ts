import { en, type Translations } from "./en";
import { zh } from "./zh";

export const locales = ["en", "zh"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, Translations> = { en, zh };

export function useTranslations(lang: Locale | string | undefined): Translations {
  const safe = (lang === "zh" ? "zh" : "en") as Locale;
  return dictionaries[safe];
}

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "zh";
}

export function normalizeLocale(value: unknown): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function pathForLocale(currentPath: string, target: Locale): string {
  const stripped = currentPath.replace(/^\/zh(\/|$)/, "/");
  if (target === "zh") {
    const path = stripped === "/" ? "/zh/" : `/zh${stripped}`;
    return path;
  }
  return stripped;
}

export function localizedHref(href: string, lang: Locale): string {
  if (lang === "en") return href;
  if (href === "/") return "/zh/";
  return `/zh${href}`;
}

export type { Translations } from "./en";
