import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const offers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/offers" }),
  schema: z.object({
    code: z.string(),
    name: z.string(),
    nameZh: z.string().optional(),
    category: z.enum(["screening", "womens-health", "specialised", "allergy"]),
    tagline: z.string(),
    taglineZh: z.string().optional(),
    description: z.string().optional(),
    descriptionZh: z.string().optional(),
    price: z.object({
      promo: z.number(),
      normal: z.number().optional(),
      tagOn: z.number().optional(),
    }),
    currency: z.string().default("RM"),
    features: z.array(z.string()).default([]),
    addOn: z
      .object({
        selectCount: z.number(),
        label: z.string().optional(),
        items: z.array(z.string()),
      })
      .optional(),
    sample: z.string().optional(),
    sampleZh: z.string().optional(),
    tat: z.string().optional(),
    tatZh: z.string().optional(),
    notes: z.array(z.string()).default([]),
    notesZh: z.array(z.string()).default([]),
    badge: z.string().optional(),
    badgeZh: z.string().optional(),
    featuredOnHome: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { offers };
