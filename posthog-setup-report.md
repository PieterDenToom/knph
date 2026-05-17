<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Klinik Ng Poh Huat Astro static site.

## What was done

- Created `src/components/posthog.astro` — the PostHog web snippet component (using `is:inline` to prevent Astro TypeScript processing errors). Configured via `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` environment variables written to `.env`.
- Updated `src/layouts/Layout.astro` — imported and rendered `<PostHog />` inside `<head>`. This single change ensures PostHog loads on every page, including all `/zh/*` Chinese-language pages.
- Added `is:inline` event tracking scripts to 4 files to capture 10 meaningful business events focused on contact conversions, service discovery, and user engagement.

## Events instrumented

| Event | Description | File |
|---|---|---|
| `health_screening_cta_clicked` | Hero primary CTA click to health screening page | `src/components/Hero.astro` |
| `contact_cta_clicked` | Hero secondary CTA click to contact page | `src/components/Hero.astro` |
| `view_all_packages_clicked` | "View all packages" ghost CTA below home carousel | `src/pages/index.astro` |
| `weight_management_cta_clicked` | Phone or WhatsApp CTA click from weight management section | `src/pages/index.astro` |
| `phone_cta_clicked` | Phone call link click on contact page | `src/pages/contact.astro` |
| `whatsapp_cta_clicked` | WhatsApp link click on contact page | `src/pages/contact.astro` |
| `email_clicked` | Email address link click on contact page | `src/pages/contact.astro` |
| `get_directions_clicked` | Google Maps or Waze directions link click on contact page | `src/pages/contact.astro` |
| `vaccination_pricing_viewed` | User scrolls to the vaccination pricing table (IntersectionObserver, fires once) | `src/pages/vaccinations.astro` |
| `language_switched` | User switches site language between English and Chinese | `src/components/LanguageSwitcher.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1595085)
- [Contact CTA Clicks Over Time](/insights/YjmEgD7m) — phone and WhatsApp click volume, day by day
- [Contact Conversion Funnel](/insights/F2uir95S) — site visit → phone or WhatsApp click conversion rate
- [Health Screening Engagement](/insights/xmPfd6Bz) — health screening CTA → view all packages funnel
- [Vaccination Pricing Page Views](/insights/QBz418fl) — how many users see the vaccination pricing table
- [Language Switcher Usage](/insights/zj307lLo) — English ↔ Chinese switches, broken down by target language

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-astro-static/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
