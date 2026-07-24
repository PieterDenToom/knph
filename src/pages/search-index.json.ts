import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { en } from "../i18n/en";
import { zh } from "../i18n/zh";
import { localizedHref, type Locale } from "../i18n";

export const prerender = true;

interface SearchEntry {
  title: string;
  description: string;
  url: string;
  lang: Locale;
  group: string;
}

const categoryGroupKey: Record<string, keyof typeof en.screening.groups> = {
  screening: "screening",
  "womens-health": "womens",
  specialised: "specialised",
  allergy: "allergy",
  infectious: "infectious",
};

export const GET: APIRoute = async () => {
  const offers = await getCollection("offers");
  const vaccines = await getCollection("vaccines");

  const dict = { en, zh };
  const entries: SearchEntry[] = [];

  for (const lang of ["en", "zh"] as const) {
    const t = dict[lang];

    for (const offer of offers) {
      const d = offer.data;
      const title = (lang === "zh" && d.nameZh) || d.name;
      const description = (lang === "zh" && d.taglineZh) || d.tagline;
      const groupKey = categoryGroupKey[d.category];
      const group = groupKey
        ? t.screening.groups[groupKey].label
        : t.common.search.groupScreening;
      entries.push({
        title,
        description,
        url: `${localizedHref("/health-screening", lang)}#${d.code.toLowerCase()}`,
        lang,
        group,
      });
    }

    for (const vaccine of vaccines) {
      const d = vaccine.data;
      const title = (lang === "zh" && d.nameZh) || d.name;
      entries.push({
        title,
        description: `${d.currency} ${d.price}`,
        url: `${localizedHref("/vaccinations", lang)}#vaccination-pricing-section`,
        lang,
        group: t.common.search.groupVaccinations,
      });
    }

    const pages: Array<{ path: string; title: string; description: string }> = [
      { path: "/", title: t.meta.siteName, description: t.home.hero.lead },
      { path: "/about", title: t.about.hero.title, description: t.about.hero.description },
      {
        path: "/health-screening",
        title: t.screening.hero.title,
        description: t.screening.hero.description,
      },
      {
        path: "/vaccinations",
        title: t.vaccinations.hero.title,
        description: t.vaccinations.hero.description,
      },
      {
        path: "/chronic-disease",
        title: t.chronic.hero.title,
        description: t.chronic.hero.description,
      },
      {
        path: "/weight-management",
        title: t.weightManagement.hero.title,
        description: t.weightManagement.hero.description,
      },
      { path: "/contact", title: t.contact.hero.title, description: t.contact.hero.description },
    ];

    for (const page of pages) {
      entries.push({
        title: page.title,
        description: page.description,
        url: localizedHref(page.path, lang),
        lang,
        group: t.common.search.groupPages,
      });
    }
  }

  return new Response(JSON.stringify(entries), {
    headers: { "Content-Type": "application/json" },
  });
};
