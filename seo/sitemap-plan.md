# Sitemap Plan — retiremore.com

The proposed URL structure for retiremore.com. Today the site is mostly under the app shell; this plan separates marketing surfaces from app surfaces so SEO has a place to live.

## Top-level structure

```
retiremore.com/                          (home / landing)
retiremore.com/upgrade                   (pricing)
retiremore.com/demo                      (no-login tool explorer)
retiremore.com/blog                      (blog index)
retiremore.com/blog/<slug>               (individual posts)
retiremore.com/tools                     (canonical tool index)
retiremore.com/tools/<tool-slug>         (per-tool landing pages — SEO targets)
retiremore.com/about
retiremore.com/contact
retiremore.com/privacy
retiremore.com/terms
retiremore.com/disclaimer                (financial disclaimer page)
retiremore.com/dashboard                 (app — noindex)
retiremore.com/login                     (app — noindex)
retiremore.com/signup                    (app — noindex)
```

## Per-tool landing pages (SEO targets)

These do not exist yet. Each is a marketing-quality landing page that ranks for the tool's keyword cluster and links into the app.

```
retiremore.com/tools/retirement-income-planner
retiremore.com/tools/social-security-optimizer
retiremore.com/tools/tax-impact-analyzer
retiremore.com/tools/longevity-drawdown-planner
retiremore.com/tools/healthcare-cost-calculator
retiremore.com/tools/retire-abroad
retiremore.com/tools/state-relocate-selector
retiremore.com/tools/retirement-identity-builder
retiremore.com/tools/volunteer-purpose-matchmaker
retiremore.com/tools/legacy-flow-visualizer
retiremore.com/tools/gifting-strategy-planner
retiremore.com/tools/digital-estate-manager
```

## Blog category structure

The 10 migrated articles map to 5 content pillars. Recommend `/blog/<pillar>/<slug>` only if the count grows past ~30 posts; until then, flat `/blog/<slug>`.

| Pillar | Source articles |
|---|---|
| Social Security & Income | 01-social-security-mistake, 04-afford-to-retire |
| Tax & Drawdown | 05-roth-conversion-window, 06-outliving-your-money |
| Healthcare | 02-medicare-costs |
| Location & Lifestyle | 03-states-retirement-taxes, 07-retire-abroad |
| Identity, Purpose & Legacy | 08-retirement-identity, 09-volunteering-purpose, 10-legacy-planning |

## robots.txt

```
User-agent: *
Allow: /
Disallow: /dashboard
Disallow: /login
Disallow: /signup
Disallow: /api
Disallow: /onboarding
Disallow: /admin
Sitemap: https://retiremore.com/sitemap.xml
```

## Indexation rules

- **Index:** marketing pages, blog, tool landing pages, about/contact/legal
- **Noindex:** app pages (`/dashboard`, `/onboarding`, `/admin`, anything user-specific)
- **Canonical:** every page sets `<link rel="canonical">` to its own URL (no protocol/domain mixing)

## Open questions

- Where do mobile-app subdomains (`m-planner.retiremore.com`, etc.) fit? Recommend `noindex` on the mobile entries — they're app shells, not SEO targets.
- Should `retire-abroad-ai.vercel.app` redirect to `retiremore.com/tools/retire-abroad`? Yes — kill the duplicate domain to consolidate authority.
