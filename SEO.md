# SEO Playbook — retiremore.com

The current state of SEO on the portal, the architecture future work plugs into, and the maintenance cadence that keeps it healthy.

**Last updated:** 2026-04-29 (post blog launch)

---

## 1. Status snapshot

### Shipped (April 2026)

**Infrastructure**
- [`apps/portal/lib/seo/metadata.ts`](../Retire-Portal/apps/portal/lib/seo/metadata.ts) — `buildMetadata()` + `NOINDEX_METADATA` helpers. Single source of truth for site URL, brand name, default OG image.
- [`apps/portal/lib/seo/jsonLd.ts`](../Retire-Portal/apps/portal/lib/seo/jsonLd.ts) — Organization, WebSite (with SearchAction), and SoftwareApplication schemas.
- [`apps/portal/lib/seo/tools.ts`](../Retire-Portal/apps/portal/lib/seo/tools.ts) — typed registry of all 12 retirement-planning tools, powering metadata, JSON-LD, hero copy, FAQ, and internal linking on `/tools/<slug>` pages.
- [`apps/portal/components/seo/JsonLd.tsx`](../Retire-Portal/apps/portal/components/seo/JsonLd.tsx) — single component to inject `<script type="application/ld+json">`.
- [`apps/portal/components/seo/HomeAuthRedirect.tsx`](../Retire-Portal/apps/portal/components/seo/HomeAuthRedirect.tsx) — client island that redirects logged-in users from `/` to `/dashboard` without breaking SSR for anonymous visitors.
- [`apps/portal/components/seo/ToolPageContent.tsx`](../Retire-Portal/apps/portal/components/seo/ToolPageContent.tsx) — server-rendered template for tool landing pages.
- [`apps/portal/lib/blog.ts`](../Retire-Portal/apps/portal/lib/blog.ts) — markdown loader (gray-matter + remark) that reads `apps/portal/content/blog/<slug>.md` at build time, with helpers for listing, related posts, prev/next, and read-time estimation.
- [`apps/portal/components/seo/BlogPostContent.tsx`](../Retire-Portal/apps/portal/components/seo/BlogPostContent.tsx) — server-rendered template for blog posts.
- [`apps/portal/scripts/migrate-blog-drafts.mjs`](../Retire-Portal/apps/portal/scripts/migrate-blog-drafts.mjs) — one-off migration script that copied the 10 drafts from the marketing repo with frontmatter. Pattern is reusable when bulk-migrating future content.

**Crawl & index**
- `app/robots.ts` — allows marketing routes; disallows `/api/`, `/dashboard`, `/admin`, `/auth/`, `/profile`, `/advisor`, `/invite`, `/reports`, `/action-plan`, `/apps`, `/upgrade`. Points to sitemap.
- `app/sitemap.ts` — generates 31 URLs from a single source (7 marketing + tools index + 12 tools + blog index + 10 posts). Tools come from [`tools.ts`](../Retire-Portal/apps/portal/lib/seo/tools.ts); blog posts come from [`blog.ts`](../Retire-Portal/apps/portal/lib/blog.ts) reading `content/blog/`.
- `next.config.ts` mobile redirect — scoped to authenticated app paths only. `retiremore.com/` and all marketing routes serve directly to mobile UAs (including Googlebot Smartphone) instead of bouncing to `m.retiremore.com`.

**Indexable public pages** (all server-rendered with full metadata + canonical + OG + JSON-LD)
- `/` — homepage with `SoftwareApplication` schema
- `/tools` — index page listing all 12 tools by category
- `/tools/<slug>` — 12 individual tool landing pages, each with `SoftwareApplication` + `FAQPage` + `BreadcrumbList` schema
- `/blog` — index page with featured post, posts grouped by category
- `/blog/<slug>` — 10 blog posts, each with `Article` + `BreadcrumbList` schema, related-tool CTA, prev/next navigation, and 3 same-category related posts
- `/for-advisors`, `/for-institutions`, `/find-a-planner`, `/founding-advisors`
- `/privacy-policy`, `/terms-of-service`

**Noindexed app surfaces** (via `metadata.robots = NOINDEX_METADATA` on the segment layout, plus robots.txt Disallow)
- `/dashboard`, `/admin`, `/auth/*`, `/profile`, `/advisor`, `/invite`, `/reports`, `/action-plan`, `/apps`, `/upgrade`

**Sitewide schema**
- Every public page emits `Organization` + `WebSite` JSON-LD via the root layout.
- The homepage and `/tools` add `SoftwareApplication`.
- `/tools/<slug>` adds `SoftwareApplication` + `FAQPage` + `BreadcrumbList`.
- `/blog/<slug>` adds `Article` (with publisher, headline, datePublished) + `BreadcrumbList`.

### Open audit

The detailed pre-work audit lives at [`seo/audits/2026-04-28-portal-sitewide.md`](seo/audits/2026-04-28-portal-sitewide.md). Re-read that when you want the original baseline.

### Known gaps (priority order)

1. **No purpose-built 1200×630 OG card.** Stopgap: white-tag logo. Flagged in [`apps/portal/lib/seo/metadata.ts`](../Retire-Portal/apps/portal/lib/seo/metadata.ts#L5).
2. **No per-tool or per-post OG cards.** All `/tools/<slug>` and `/blog/<slug>` pages share the default OG.
3. **Blog posts attribute to the org, not a person.** `Article.author` is `Organization`. For E-E-A-T on YMYL retirement content, attributed authors with `Person` schema and `/about/<author>` pages would help. Real bylines also need real author bios.
4. **No `Author` page or `/about` page.** E-E-A-T signal for retirement/finance YMYL queries is thin.
5. **Some blog post titles are clickbait-y.** Voice rules forbid hype words but the migrated drafts contain a few ("Free Retirement Hack" was rewritten on migration; "$100K Mistake" remains). Acceptable but worth a copy-pass when there's time.
6. **No `manifest.webmanifest`.** Icons are configured but no PWA manifest.
7. **Testimonials use first-name + last-initial.** Reads as fictional; can't legitimately use `Review` schema until real attributed testimonials exist.
8. **Hero CSS-in-JS.** [`IndividualsContent.tsx`](../Retire-Portal/apps/portal/components/landing/IndividualsContent.tsx) `@import`s Playfair Display + DM Sans inside a `<style>` block at runtime. Move to `next/font` for CWV.
9. **No Search Console verification or Bing Webmaster setup yet.** No analytics goals tied to organic traffic.
10. **No internal links from the homepage or `/tools/<slug>` pages to relevant blog posts.** Blog posts link out to tools but not the reverse — the strongest internal-link surface is one-directional.

---

## 2. Architecture & conventions

### When you add a new public page

1. **Use a server component.** Default. Push interactivity (forms, modals, auth-dependent UI) into a `"use client"` child island.
2. **Export `metadata` via `buildMetadata()`** from either the page (server components) or a `layout.tsx` (when the page must remain `"use client"`):

   ```ts
   import { buildMetadata } from "@/lib/seo/metadata";

   export const metadata = buildMetadata({
     title: "Short, keyword-led title",   // <50 chars, no "RetireMore" suffix
     description: "150-160 chars, lead with the outcome and a real number.",
     path: "/your-page",                  // canonical path
   });
   ```

3. **Add the URL to [`app/sitemap.ts`](../Retire-Portal/apps/portal/app/sitemap.ts).** If it's a tool, just add it to [`tools.ts`](../Retire-Portal/apps/portal/lib/seo/tools.ts) and the sitemap picks it up automatically.
4. **Add JSON-LD if appropriate.** Use existing schemas in [`jsonLd.ts`](../Retire-Portal/apps/portal/lib/seo/jsonLd.ts) or build a per-page one in the page file. Wrap in `<JsonLd data={...} />`.
5. **Add internal links from the homepage, related tool pages, or footer.** Pages without inbound links don't rank.

### When you add a new tool

Add an entry to `TOOLS` in [`apps/portal/lib/seo/tools.ts`](../Retire-Portal/apps/portal/lib/seo/tools.ts). The route, sitemap entry, JSON-LD, and prerender all flow from that one entry.

### When you add a private route

Create a `layout.tsx` for the segment (or update an existing one):

```ts
import type { Metadata } from "next";
import { NOINDEX_METADATA } from "@/lib/seo/metadata";

export const metadata: Metadata = NOINDEX_METADATA;
```

Then add the path to the `Disallow:` list in [`apps/portal/app/robots.ts`](../Retire-Portal/apps/portal/app/robots.ts). Belt and braces — never rely on robots.txt alone.

### Voice rules in SEO copy

The full guide is [`brand/voice.md`](brand/voice.md). The non-negotiables that show up most in titles, descriptions, and FAQ answers:

- Real numbers always. "$324,000 over 20 years" beats "huge impact."
- No exclamation points anywhere — including CTAs.
- No "ultimate," "secret," "shocking," "must-read," "guru."
- Define jargon on first use (RMD, IRMAA, FRA, QCD, WEP/GPO).
- Add the planning-tool disclaimer where any specific guidance is given.

### Title and description targets

- **`<title>`**: 47–58 characters total (including " | RetireMore" suffix). The helper appends the suffix; pass a clean title without it.
- **`<meta description>`**: 150–160 characters. Lead with the outcome, then 1–2 specific features.
- **H1**: one per page. Should contain the primary keyword and not duplicate the `<title>` exactly.

---

## 3. Maintenance cadence

### Per-PR (every change)

When CI is set up: a check that builds the portal and asserts the 5 critical SEO signals didn't regress on the public pages. Until then, do this manually before merging anything that touches `app/`:

```bash
cd apps/portal && npm run build
# Then for each public page you touched:
grep -oE '<title>[^<]+|name="description"[^>]+|rel="canonical"[^>]+|name="robots"[^>]+' \
  .next/server/app/<page>.html
```

### Weekly (15 min)

- **Search Console: Index Coverage report.** Look for new errors, drops in indexed pages, or URLs being indexed that shouldn't be (e.g., `/dashboard`).
- **Search Console: Performance.** Check 7-day clicks/impressions for any sharp drops on top pages. Sort by CTR ascending — low-CTR titles are the cheapest wins.
- **PostHog: organic traffic dashboard.** Compare week-over-week. Investigate >20% drops.
- **Quick crawl of any new pages** with the verification commands in §5.

### Monthly (2–3 hours)

- **Run `/seo-audit` on 3–5 pages**: pick the homepage, the lowest-CTR page from Search Console, and any pages added in the last month. Save audits to `seo/audits/YYYY-MM-DD-<slug>.md`.
- **Broken-link check.** Crawl `retiremore.com` and the marketing surfaces. Fix any 404s linked from indexed pages.
- **Sitemap audit.** Submit sitemap to Search Console, confirm 0 errors and 0 unexpected exclusions. Verify lastmod dates updated for changed pages.
- **Core Web Vitals review.** Search Console > Core Web Vitals. Fix anything in the "Poor" bucket on mobile.
- **Title/description CTR pass.** Top 10 pages by impressions in Search Console. For any page with CTR below the SERP median for its rank, rewrite the title/description and re-deploy.
- **Schema validation.** Spot-check 2–3 pages in [Google's Rich Results Test](https://search.google.com/test/rich-results). Fix any errors.
- **Internal-link audit.** New pages linked from at least 3 other indexed pages? Run `Grep` for the URL across `apps/portal/` and `content/blog/`.

### Quarterly (1 day)

- **Full sitewide audit.** Re-baseline the audit at `seo/audits/`. Compare against the previous quarter's audit — note progress and regressions.
- **Keyword research refresh.** Use the `/keyword-research` skill for the top 3 traffic-priority topics. Update the editorial calendar.
- **Backlink audit.** Pull from Search Console > Links. Identify lost links, toxic links, and gaps vs. competitors. Outreach to recover anything notable.
- **Competitor SERP scan.** For the top 10 keywords we target, screenshot the SERP. Note any new competitors, format changes (more People Also Ask, more video, more AI summaries), or new schema types appearing.
- **Stale content sweep.** Any blog post >12 months old: refresh stats, update tax thresholds (IRMAA, contribution limits, exemptions change annually), update the `Last-Modified` date in the post frontmatter.
- **Test the mobile redirect.** `curl -I -A "Googlebot/Mobile" https://retiremore.com/for-advisors` should still return 200, not 302. Regression-watch on the [`next.config.ts`](../Retire-Portal/apps/portal/next.config.ts) allowlist.

### Annually (half a day)

- **Tax-rule refresh sweep.** Every tool page and blog post that quotes IRS thresholds (IRMAA brackets, gift exclusions, lifetime exemption, contribution limits, RMD ages) needs reverification each January.
- **Schema review.** schema.org evolves. Audit our types against the current spec.
- **OG image refresh.** New brand guidelines, new product screenshots, new positioning.

---

## 4. Adding new content — checklists

### New blog post

1. **Draft** in [`content/blog/drafts/`](content/blog/drafts/) using the `/new-blog-post` skill.
2. **Voice check** against [`brand/voice.md`](brand/voice.md). No "hack," "secret," "shocking," exclamation points, urgency manipulation.
3. Word count 1,200–2,000 for SEO-targeted posts.
4. Cite at least 2 authoritative sources (SSA, CMS, BLS, NBER, Boston College CRR, Kitces, Morningstar, Vanguard research, peer-reviewed journals).
5. **Publish** by writing the markdown file to [`apps/portal/content/blog/<slug>.md`](../Retire-Portal/apps/portal/content/blog/) with this frontmatter:

   ```yaml
   ---
   title: "Page H1 — also used as <title>. Aim for ≤47 chars."
   slug: "url-slug"
   description: "150–160 char meta description."
   date: "2026-04-29"
   excerpt: "1–2 sentences for the index card."
   category: "Social Security & Income"  # one of the 5 enum values in lib/blog.ts
   relatedTool: "social-security-optimizer"  # slug from lib/seo/tools.ts
   dek: "Italic subtitle that appears under the H1."
   ---
   ```

6. Body is plain markdown (GFM). Use `##` for section headings — the H1 is rendered from frontmatter. Drop the H1 and dek from the body if migrating from a draft.
7. Sitemap auto-includes the post — no manual step.
8. **Internal-link from the related tool page** if the tool has a strong content angle (e.g., "Read more: [post title]" near the FAQ). This is the inverse link that today is missing — see Known Gaps #10.
9. **Soft-cross-link from 1–2 related published posts** if relevant.
10. Move the source draft from `content/blog/drafts/` to `content/blog/published/` so the marketing repo tracks publication state.

### New tool

Add to [`apps/portal/lib/seo/tools.ts`](../Retire-Portal/apps/portal/lib/seo/tools.ts) with all required fields:
- `slug`, `appId`, `category`
- `title` (<50 chars, no brand suffix), `description` (150–160 chars)
- `eyebrow`, `h1`, `intro`
- `bullets` (3–5, ~80–120 chars each)
- `hook` (a specific stat with explanation)
- `howItWorks` (3–4 numbered steps)
- `body` (150–300 words, on voice)
- `faq` (3–5 Q&A pairs, used by `FAQPage` schema)
- `relatedSlugs` (3 — used for internal linking)
- `ctaLabel`

Then ensure:
- `appId` matches an entry in [`apps/portal/lib/appRegistry.ts`](../Retire-Portal/apps/portal/lib/appRegistry.ts).
- Build passes; the new `/tools/<slug>` page prerenders.

### New marketing page

Follow the pattern in [`/for-institutions/layout.tsx`](../Retire-Portal/apps/portal/app/for-institutions/layout.tsx):

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "...",
  description: "...",
  path: "/your-page",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
```

If the page itself can be a server component, skip the layout and put the metadata on the page directly.

---

## 5. Verification commands

Run from `apps/portal/`. Useful before merging or for ad-hoc checks.

```bash
# Build (will prerender all static pages)
npm run build

# 5 critical SEO signals on the homepage
grep -oE '<title>[^<]+|name="description" content="[^"]+|rel="canonical" href="[^"]+|name="robots" content="[^"]+|property="og:image" content="[^"]+' \
  .next/server/app/index.html

# JSON-LD types on a tool page
grep -oE '"@type":"[^"]+"' \
  .next/server/app/tools/social-security-optimizer.html | sort -u

# Robots.txt and sitemap (boot the prod server first: npm run start)
curl -s http://localhost:3000/robots.txt
curl -s http://localhost:3000/sitemap.xml | grep -oE '<loc>[^<]+</loc>'

# Mobile-redirect regression check
curl -I -H "Host: retiremore.com" \
  -A "Mozilla/5.0 (Linux; Android 13) Mobile Safari" \
  http://localhost:3000/for-advisors
# Expected: HTTP/1.1 200 OK (NOT 302 redirect)

# Same for Googlebot Smartphone
curl -I -H "Host: retiremore.com" \
  -A "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X) AppleWebKit/537.36 ... (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
  http://localhost:3000/
```

---

## 6. External tools & accounts

| Tool | Purpose | Cadence |
|---|---|---|
| Google Search Console | Index coverage, search performance, Core Web Vitals, sitemap submission | Weekly |
| Bing Webmaster Tools | Same as Search Console for Bing/DuckDuckGo (DDG uses Bing's index) | Monthly |
| [Google Rich Results Test](https://search.google.com/test/rich-results) | Schema validation | After any schema change |
| [Schema.org Validator](https://validator.schema.org) | Strict schema validation | After any schema change |
| PostHog (`RetireMore Portal` project, id 356526) | Organic traffic dashboards, conversion funnels from organic | Weekly |
| [PageSpeed Insights](https://pagespeed.web.dev/) | Field + lab Core Web Vitals | Per release |
| [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) | Mobile rendering check | After any layout change |

**Setup TODOs** (not done yet):
- Verify `retiremore.com` in Google Search Console (DNS TXT method preferred).
- Submit `https://retiremore.com/sitemap.xml` to Search Console + Bing.
- Wire a PostHog dashboard for organic traffic + organic→signup conversion.
- Add a CI check (GitHub Action) that runs `npm run build` and asserts the 5 critical SEO signals on the homepage didn't disappear.

---

## 7. File map (quick reference)

```
apps/portal/
├── app/
│   ├── layout.tsx                 # Sitewide metadata, default OG, Org+WebSite JSON-LD
│   ├── page.tsx                   # Homepage (server component)
│   ├── robots.ts                  # robots.txt
│   ├── sitemap.ts                 # sitemap.xml (31 URLs)
│   ├── tools/
│   │   ├── page.tsx               # /tools index
│   │   └── [slug]/page.tsx        # 12 tool landing pages
│   ├── blog/
│   │   ├── page.tsx               # /blog index
│   │   └── [slug]/page.tsx        # blog post template
│   ├── for-advisors/layout.tsx    # Per-route metadata
│   ├── for-institutions/layout.tsx
│   ├── find-a-planner/layout.tsx
│   ├── founding-advisors/layout.tsx
│   ├── dashboard/layout.tsx       # noindex
│   ├── admin/layout.tsx           # noindex
│   ├── auth/layout.tsx            # noindex
│   ├── profile/layout.tsx         # noindex
│   ├── advisor/layout.tsx         # noindex
│   ├── invite/layout.tsx          # noindex
│   ├── reports/layout.tsx         # noindex
│   ├── action-plan/layout.tsx     # noindex
│   ├── apps/layout.tsx            # noindex
│   └── upgrade/layout.tsx         # noindex
├── components/seo/
│   ├── JsonLd.tsx                 # JSON-LD injector
│   ├── HomeAuthRedirect.tsx       # Client island for auth-redirect on /
│   ├── ToolPageContent.tsx        # /tools/<slug> template
│   └── BlogPostContent.tsx        # /blog/<slug> template
├── content/blog/                  # 10 published blog posts (markdown + frontmatter)
├── lib/
│   ├── blog.ts                    # Markdown loader, list/find/related/prev-next helpers
│   └── seo/
│       ├── metadata.ts            # buildMetadata, NOINDEX_METADATA, SITE_URL
│       ├── jsonLd.ts              # Org, WebSite, SoftwareApplication
│       └── tools.ts               # 12-tool registry
├── scripts/migrate-blog-drafts.mjs   # One-off draft → portal migration
└── next.config.ts                 # Mobile-redirect allowlist (app routes only)

RetireMore-Marketing/
├── SEO.md                         # This document
├── brand/voice.md                 # Voice rules
├── content/blog/
│   ├── drafts/                    # Unpublished posts (start here)
│   └── published/                 # Posts that have been migrated to the portal
└── seo/
    ├── audits/                    # /seo-audit outputs (dated)
    ├── internal-linking-map.md
    ├── schema-templates/          # Reference schemas (not directly imported)
    └── sitemap-plan.md            # Original architecture plan
```

---

## 8. The "if I only had 30 minutes a week" version

If maintenance time is tight, this is the minimum:

1. Open Search Console > Index Coverage. Skim for new errors. (5 min)
2. Open Search Console > Performance. Sort by CTR ascending. Identify the worst-performing top-10-impression page. (5 min)
3. Rewrite that page's title and description. Deploy. (15 min)
4. Verify the deploy didn't regress on `<title>`, description, canonical, robots, or JSON-LD with the curl commands in §5. (5 min)

That's it. Search Console drives the work; everything else is leverage on top.
