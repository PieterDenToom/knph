// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Keep pre-v7 whitespace handling; the v7 default ('jsx') strips spaces
  // between inline elements (e.g. "RM 50" became "RM50").
  compressHTML: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
