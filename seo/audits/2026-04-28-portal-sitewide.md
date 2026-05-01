# SEO Audit — retiremore.com (portal, sitewide)
**Date:** 2026-04-28
**Scope:** Source-code audit of the Retire-Portal Next.js app (homepage + key marketing surfaces). Live URL fetch was blocked (HTTP 403 — likely Cloudflare/bot rule).

## Snapshot

- **Title (sitewide):** "RetireMore - Plan Your Future" (32 chars — ⚠️ short, generic, used on every public page)
- **Description (sitewide):** "Comprehensive retirement planning portal with multiple retirement calculators and AI recommendations" (102 chars — ⚠️ short, generic, used on every public page)
- **H1 (homepage):** "More Income. More Purpose. More Clarity." (rendered client-side; not in initial HTML)
- **H2s (homepage):** "Everything you need to plan every dimension of retirement" · "Retirement planning reimagined" · "Know exactly where you stand. Fix what's holding you back." · "Your personal AI retirement advisor" · "Start free, upgrade when you're ready" · "Real people. Real clarity." · "Your best retirement starts with one plan"
- **Canonical:** ❌ MISSING (no `metadata.alternates.canonical` anywhere)
- **Robots meta:** ❌ MISSING (no `metadata.robots`; no per-route noindex on `/dashboard`, `/admin`, `/auth/*`, `/profile`, `/advisor`, `/invite`, `/reports`)
- **OpenGraph tags:** ❌ MISSING (no `openGraph` field in [layout.tsx](apps/portal/app/layout.tsx#L19) or any page)
- **Twitter card tags:** ❌ MISSING
- **JSON-LD schema:** ❌ NONE on any public page (grep confirms zero `application/ld+json` scripts)
- **robots.txt:** ❌ MISSING from `/public` and no `app/robots.ts`
- **sitemap.xml:** ❌ MISSING from `/public` and no `app/sitemap.ts`
- **Per-page metadata:** Only [privacy-policy](apps/portal/app/privacy-policy/page.tsx) and [terms-of-service](apps/portal/app/terms-of-service/page.tsx) export their own metadata. Home, `/for-advisors`, `/for-institutions`, `/find-a-planner`, `/upgrade`, `/founding-advisors` all inherit the generic root title.
- **Rendering:** [app/page.tsx](apps/portal/app/page.tsx#L9-L17) is `"use client"` and gates rendering on `mounted && !loading` — initial HTML returned to crawlers is `<div style="min-height:100vh;background:#0d1b2a"></div>`. Same pattern in `/for-advisors`, `/for-institutions`, `/find-a-planner`, `/upgrade`. Googlebot eventually renders JS, but the cost is real (delayed indexation, weak SERP snippets, broken Bing/LinkedIn/Slack/Twitter previews).
- **Mobile redirect:** [next.config.ts](apps/portal/next.config.ts#L7-L18) 302-redirects any UA matching `(Mobile|Android|iPhone|iPad)` from `retiremore.com` → `m.retiremore.com`. **Googlebot Smartphone** UA contains "Mobile" — Google's mobile-first crawler is being bounced off the canonical domain on every request.
- **Word count (homepage rendered):** ~850 visible words (good).
- **Internal links (homepage):** ~14 (Sign In, signup ×3, anchor links, /for-advisors, /for-institutions, /privacy-policy, /terms-of-service). Zero links to per-tool landing pages because they don't exist yet.
- **External links:** 0 (no authority citations — this is fine for a landing page, but a content gap once the blog is live).
- **Image alt text:** Logo has alt="RetireMore" ✅. Modal screenshots use the tool name as alt ✅. No homepage `<img>` content images beyond these.

## Critical issues

### 1. Mobile redirect is breaking Google's mobile-first index
[next.config.ts:7-18](apps/portal/next.config.ts#L7-L18) sends every mobile UA — including Googlebot Smartphone — from `retiremore.com` to `m.retiremore.com` via 302. Three problems compound:
- Google indexes mobile-first. The crawler that matters most never sees `retiremore.com` content; it sees the redirect.
- It's a 302 (`permanent: false`), so Google keeps trying the original URL and ranking signals are split between two hostnames.
- There's no `rel="alternate" media="only screen and (max-width: …)"` ↔ `rel="canonical"` pairing between the two domains — the deprecated separate-mobile-URL pattern, done without the deprecated annotations.

This single config block is suppressing rankings for the entire domain.

### 2. No public marketing pages render server-side
Every public route ([page.tsx:1](apps/portal/app/page.tsx#L1), [for-advisors/page.tsx:1](apps/portal/app/for-advisors/page.tsx#L1), [for-institutions/page.tsx:1](apps/portal/app/for-institutions/page.tsx#L1), [find-a-planner/page.tsx:1](apps/portal/app/find-a-planner/page.tsx#L1), [upgrade/page.tsx:1](apps/portal/app/upgrade/page.tsx#L1)) starts with `"use client"` and gates render on `useState`+`useEffect`. The initial HTML returned to crawlers is an empty `<div>`. Convert these to server components (or wrap a small interactive island in `"use client"`) so the H1, copy, schema, and links exist in the static HTML.

### 3. No sitemap.xml and no robots.txt
Neither file exists in `/public` and there's no `app/sitemap.ts` / `app/robots.ts`. Google has no map, and authenticated app routes (`/dashboard`, `/admin`, `/profile`, `/advisor/*`, `/invite/*`, `/reports/*`, `/auth/*`) are crawlable — they'll dilute crawl budget and may rank instead of marketing pages.

### 4. Sitewide identical title & description
[layout.tsx:19-32](apps/portal/app/layout.tsx#L19-L32) sets one `<title>` and one description for the entire app. Every public page that doesn't override them serves the same SERP snippet. Per-page `export const metadata` is the fix — it exists on legal pages but is missing on every commercially valuable page.

### 5. No structured data anywhere
Zero JSON-LD across the codebase. For a multi-tool retirement-planning product, the table-stakes schema is:
- `Organization` (logo, sameAs, contactPoint) — sitewide
- `WebSite` with `SearchAction` — sitewide
- `SoftwareApplication` — per tool landing page (not yet built)
- `FAQPage` — pricing & for-advisors pages
- `Article` + `Author` + `Person` — blog posts (not yet built)
- `BreadcrumbList` — every non-home page

Templates already exist at [seo/schema-templates/](seo/schema-templates/) but are not wired in.

### 6. The blog is unbuilt
10 finished drafts sit in [content/blog/drafts/](content/blog/drafts/) and the [sitemap-plan.md](seo/sitemap-plan.md) maps them to `/blog/<slug>` — but the portal has no `/blog` route. Each draft is a 1,200–2,000-word piece targeting a high-intent keyword cluster (Social Security claiming, Roth conversions, Medicare costs, retire abroad, etc.). Until they ship, the domain has zero organic surface area beyond five thin landing pages.

## High-priority fixes

- **Per-page metadata on every public route.** Add `export const metadata: Metadata = { ... }` (with `title`, `description`, `alternates.canonical`, `openGraph`, `twitter`) to home, `/for-advisors`, `/for-institutions`, `/find-a-planner`, `/upgrade`, `/founding-advisors`. Lengths: title 50–60 chars, description 150–160 chars, both featuring the page's primary keyword.
- **Add `metadataBase`** to [layout.tsx](apps/portal/app/layout.tsx#L19) so OG/canonical URLs resolve to `https://retiremore.com` (currently any relative OG image URL would break).
- **Add a default `openGraph` and `twitter` block to root metadata** — site name, locale, default image (`/og-default.png` at 1200×630). Each page can override.
- **Add `noindex` to app surfaces** via per-segment `metadata.robots = { index: false }` on `/dashboard/layout.tsx`, `/admin/layout.tsx`, `/profile/layout.tsx`, `/advisor/layout.tsx`, `/invite/layout.tsx`, `/reports/layout.tsx`, `/auth/layout.tsx`, `/action-plan/layout.tsx`, `/apps/layout.tsx`. Belt and braces with `Disallow:` in robots.txt.
- **Wire `Organization` + `WebSite` JSON-LD in [layout.tsx](apps/portal/app/layout.tsx)** using the existing template at [seo/schema-templates/organization.json](seo/schema-templates/organization.json). Render via a `<Script type="application/ld+json" dangerouslySetInnerHTML=...>` in `<head>`.
- **Build the 12 per-tool landing pages.** [sitemap-plan.md](seo/sitemap-plan.md) already lists them at `/tools/<slug>`. Each page: H1 with the tool's primary keyword, 800–1,200 words, `SoftwareApplication` JSON-LD, internal link to the relevant app subdomain, FAQ block with `FAQPage` schema. These are the pages that will rank — the home page won't.
- **Ship the 10 blog drafts to `/blog/<slug>`.** Build a server-rendered blog index + post template with `Article` schema, breadcrumbs, related-posts, and prev/next nav. This unlocks the keyword clusters in [keyword-research](seo/sitemap-plan.md).

## Medium-priority fixes

- **Convert public pages to server components.** Move state-dependent islands (modal, form, scroll handlers) into small `"use client"` children. Hero, headings, copy, pricing tables, testimonials, and footer should all be in initial HTML.
- **Stop the mobile-redirect-then-rank pattern.** Either: (a) make the portal responsive at `retiremore.com` (preferred — kills the duplicate-domain problem), or (b) keep `m.` for app shell only, exclude marketing routes from the redirect, and add `Vary: User-Agent` + correct `rel="alternate"`/`rel="canonical"` pairs. Verify Googlebot Smartphone doesn't get bounced — log one fetch with that UA and watch the redirect chain.
- **Title format.** Use `<Page topic> | RetireMore` consistently. Homepage candidate: "Retirement Planning Tools, AI Coach & Readiness Score — RetireMore" (61 chars).
- **Description rewrite (homepage).** Lead with concrete outcomes and counts. Candidate: "Plan your retirement across income, taxes, healthcare, location, and legacy. 12 free planning tools, AI coach, and a personalized readiness score." (153 chars).
- **Add internal links from homepage to per-tool pages.** Each of the 12 tool cards in [IndividualsContent.tsx:502-512](apps/portal/components/landing/IndividualsContent.tsx#L502-L512) is a clickable `<div>` that opens a screenshot modal. Make the card title an anchor to `/tools/<slug>` (modal can still open via a secondary "Preview" affordance). This is your strongest internal-link surface.
- **Replace anchor links (`#tools`, `#ai`, `#pricing`, `#testimonials`) with real pages** when those sections justify their own page. `#pricing` is a particularly good `/pricing` candidate to rank for branded + comparison queries.
- **Add `aria-label` and visible link text to footer brand links.** Footer at [IndividualsContent.tsx:760-770](apps/portal/components/landing/IndividualsContent.tsx#L760-L770) is fine but very thin — consider adding a real footer with tool links, blog links, contact, social profiles. Footer links are a primary internal-linking lever.
- **Image strategy.** Hero is a CSS-rendered dashboard mockup, not an `<img>`. That's fast but invisible to image search. Add 1–2 real product screenshots with descriptive `alt` attributes (e.g., "RetireMore retirement income planner showing Monte Carlo simulation"). Same for the per-tool pages.
- **Preconnect/preload tuning.** [layout.tsx:43-45](apps/portal/app/layout.tsx#L43-L45) preconnects Google Fonts then loads Plus Jakarta Sans, but `IndividualsContent` and `LandingShell` `@import` Playfair Display + DM Sans inside CSS-in-JS at runtime. Move those to `next/font` so the initial paint isn't blocked by a render-time stylesheet fetch. CWV impact, not a direct ranking signal — but Core Web Vitals matters for the new IndexNow flow.
- **Trailing slash, www-redirect, and HSTS posture** — verify in production: pick one canonical (no trailing slash, non-www), 301 the other, and ensure HSTS is set so the canonical is unambiguous.

## Low / nice-to-have

- Add a `manifest.webmanifest` (icons in [layout.tsx:23-30](apps/portal/app/layout.tsx#L23-L30) hint at PWA intent but no manifest exists).
- Add `BreadcrumbList` schema once `/tools/<slug>` and `/blog/<slug>` ship.
- Add an `Author` page for the brand voice (Eddie or a named persona) — E-E-A-T signal for retirement/finance YMYL queries.
- Add a thin `/about` page with founder, mission, and methodology — also E-E-A-T.
- Add `hreflang` only when international content ships. The `Retire Abroad` tool may justify a `/global/` namespace later.
- `<link rel="me">` on social profiles for verified-author signaling.
- Add `Last-Modified` headers on static pages so Google can cache-bust efficiently.
- The homepage testimonials are first-name + last initial only, which reads as fictional. Real, attributable reviews (with photos and links to the reviewer's profile) earn `Review` schema and trust. Until they're real, drop the schema and consider rephrasing as "what early users are saying."
- The "12+ planning tools" / "100+ countries" stats are good. Make sure they appear in copy, not just CSS-rendered numbers, so they're actually crawlable.

## Voice / brand assessment

The visible homepage copy is **on voice** — it's specific (real numbers in the floating bubbles: $3,749/mo, 94% Monte Carlo, $142,800 lifetime tax savings), holistic (the three pillars), forward-looking ("the next chapter"), and avoids exclamation points. The H2 italics on "every dimension," "reimagined," "one plan" land the quietly-confident tone well.

Two voice nits: (1) "12+ AI-Powered Planning Tools" eyebrow is fine but "AI-Powered" is a category cliché — consider "12 retirement planning tools, one connected plan." (2) The pricing copy ("Less than the cost of one advisor consultation") is good but could be more specific: "$19/mo is what most fee-only advisors charge for 15 minutes." The brand voice rules call for real numbers.

The bigger problem isn't voice on the homepage — it's that the homepage is the only place voice lives. Once the 10 blog drafts and 12 tool landing pages ship, voice will need to scale.

## Recommended next actions (ranked)

1. **Fix the mobile redirect.** This is the single highest-leverage change. Either go responsive on `retiremore.com` (preferred — one domain, one canonical, immediate ranking lift) or scope the redirect to authenticated app routes only and exclude all marketing surfaces. Verify with `curl -A "Mozilla/5.0 (Linux; Android 13; ...) ... Mobile" https://retiremore.com` that Googlebot Smartphone gets a 200, not a 302.
2. **Ship `app/robots.ts` and `app/sitemap.ts`.** Allow marketing routes; disallow `/dashboard`, `/admin`, `/auth/*`, `/profile`, `/advisor`, `/invite`, `/reports`, `/api`, `/action-plan`, `/apps`. Generate the sitemap from a single `routes.ts` so it stays in sync. Submit in Google Search Console + Bing Webmaster.
3. **Add per-page metadata + canonical + OG to all six public pages.** One PR. Use a shared `buildMetadata({ title, description, path, image })` helper to keep them consistent. Add `metadataBase: new URL("https://retiremore.com")` to root.
4. **Convert the public pages to server components** so the H1, copy, pricing, and links are in the initial HTML. Push interactive bits (modal, signup forms) into `"use client"` children. This and step 3 together turn five empty-shell pages into five real SEO surfaces.
5. **Wire `Organization` + `WebSite` JSON-LD sitewide,** and add `SoftwareApplication` schema as you build the per-tool landing pages.
6. **Ship the 10 blog drafts.** They already exist; the only missing piece is the `/blog` route and the templates. This unlocks 10 keyword clusters and gives the domain crawlable depth.
7. **Build the 12 `/tools/<slug>` landing pages.** These are your money pages. Each one targets a tool-specific keyword cluster, hosts the canonical demo, and links into the app. Without them, you're trying to rank a single homepage for 12 different intents — which never works.
8. **Add `noindex` to all authenticated routes** as a layered defense once 2 ships. Belt and braces.
9. **Set up Search Console + Bing Webmaster + analytics goals** (signups, upgrades, demo requests). You can't optimize what you don't measure.
10. **Run a real Lighthouse pass after 1–4 ship.** Core Web Vitals on a hero with three CSS-in-JS `<style>` blocks the size of these is going to need work.
