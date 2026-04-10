# RetireMore Marketing — Brand Bible

> This file is loaded into every Claude Code conversation in this project. Anything an agent or skill needs to *know about RetireMore* should be findable from here in one hop. Anything that doesn't belong inline lives in `brand/`, `docs/strategy/`, or one of the channel folders.

---

## What this project is

RetireMore-Marketing is the operational marketing surface for RetireMore. It is a Claude Code-first workspace: skills, subagents, and content folders that turn marketing strategy into shipped artifacts (blog posts, ad copy, email sequences, outreach lists, reports). Lightweight Node/TS scripts in `scripts/` integrate with the APIs already wired into the product (Loops, Resend, PostHog, Stripe).

The product itself lives in [`../Retire-Portal`](../Retire-Portal). Strategy docs we migrated from there are in `docs/strategy/` for reference; the originals remain authoritative.

## The product in 30 seconds

**Brand**: RetireMore (renamed from RetireWise in March 2026)
**Domain**: retiremore.com (currently serving on retiremore.now until the .com transfer completes)
**Support**: support@retiremore.app
**Tagline**: *More Income. More Purpose. More Clarity.*
**Positioning**: The only retirement platform that plans your entire life — finances, location, healthcare, purpose, and legacy — all in one place.
**Trust pillars** (use these in copy):
1. No financial products sold
2. No advisor required
3. We never take referral fees from advisors
4. Free to start

## Audience

Pre-retirees and early retirees, **age 50–70**, who want comprehensive, independent retirement planning without sales pressure or being pushed into managed products. They are typically:

- Researching their own retirement before (or instead of) hiring an advisor
- Holistic thinkers — they care about *purpose, location, and legacy* as much as portfolio math
- DIY-leaning but not anti-advice
- Suspicious of anything that feels like a sales funnel for insurance or AUM

Detailed personas: [brand/audience-personas.md](brand/audience-personas.md)

## The 12 tools (canonical)

Source of truth: [`../Retire-Portal/apps/portal/lib/appRegistry.ts`](../Retire-Portal/apps/portal/lib/appRegistry.ts). When that file changes, update [brand/product-tools.md](brand/product-tools.md).

**Financial Security (5)**
1. **Retirement Income Planner** — Model income, taxes, and net worth across every scenario with Monte Carlo simulation
2. **Social Security Optimization** — Find the claiming strategy that maximizes lifetime benefits (singles + couples)
3. **Tax Impact Analyzer** — Plan Roth conversions, withdrawal order, and IRMAA avoidance
4. **Longevity & Drawdown Planner** — Sustainable withdrawal strategies based on longevity estimates
5. **Healthcare Cost Calculator** — Project lifetime healthcare costs with Medicare, IRMAA, long-term care

**Lifestyle & Purpose (4)**
6. **Retire Abroad AI** — Compare 100+ countries across cost of living, healthcare, visas, and culture
7. **State Relocate Selector** — Compare states with comprehensive tax analysis and relocation guidance
8. **Retirement Identity Builder** — Discover who you are beyond your career with a 7-step guided journey
9. **Volunteer Purpose Matchmaker** — Match your skills to meaningful volunteer opportunities

**Legacy & Impact (3)**
10. **Legacy Flow Visualizer** — Visualize estate distribution with interactive Sankey diagrams
11. **Gifting Strategy Planner** — Plan meaningful lifetime gifts within tax thresholds
12. **Digital Estate Manager** — Organize your complete digital legacy vault

## Pricing

| Tier | Monthly | Annual | Effective | Headline benefit |
|------|---------|--------|-----------|------------------|
| **Free** | $0 | $0 | Always free | All 12 tools, 3 scenarios/tool, AI Coach 5 questions/day |
| **Premium** | $19 | $149/yr | $12/mo (save 35%) | Unlimited scenarios, PDF reports, AI Coach 10 queries/mo, Readiness Score, Smart Action Plan |
| **Planner** | $29 | $229/yr | $19/mo (save 34%) | Everything in Premium + unlimited AI Coach, cross-tool insights, scenario simulator, risk detector, couples planning, "Future You" simulation |

Valid tier strings in code: `'admin' | 'paid' | 'planner' | 'free' | null`. **Never use `'pro'`** — it is not a valid tier. Premium = `paid`. Planner is the upper tier (formerly called "Pro" in old copy).

Full detail: [brand/pricing-tiers.md](brand/pricing-tiers.md)

## Voice

- **Forward-looking, empowering, clarity-first.** Retirement is the next chapter, not the end of one.
- **Holistic.** We talk about purpose, location, healthcare, and legacy *alongside* the money. That's the wedge.
- **Specific over abstract.** Use real numbers, real ages, real scenarios. ("Claim at 62 vs 70 = $324K difference over 20 years" beats "Social Security claiming has a big impact.")
- **Quietly confident.** No exclamation points. No urgency manipulation. No "limited time" tricks.
- **No fear-mongering.** We can name risks (longevity, IRMAA, sequence-of-returns) but we always pair them with what to *do*.
- **Plain English.** Define jargon the first time it appears (RMD, IRMAA, FRA, Roth conversion).
- **No sales pressure.** We have no salespeople and we don't sell products. The free tier is genuinely useful.

**Compliance rails — always true:**
- We are a planning tool, not financial advice. Add a one-line disclaimer to any piece that gives specific numerical guidance: *"This is a planning tool, not personalized financial advice."*
- No specific securities recommendations. Ever.
- No promises of returns. No "guaranteed."
- No claims that the IRS, SSA, or Medicare endorse us.
- Cite primary sources for stats (SSA, CMS, BLS, NBER, Boston College CRR, Kitces, etc.).

Full do/don't list: [brand/voice.md](brand/voice.md)

## Tech context (for scripts and integrations)

Portal stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind 4, Firebase Auth + Firestore, Stripe, PostHog, Resend (transactional), Loops (marketing — set up but underused), Vercel.

Where things live:
- App registry (12 tools): [`../Retire-Portal/apps/portal/lib/appRegistry.ts`](../Retire-Portal/apps/portal/lib/appRegistry.ts)
- PostHog client init: [`../Retire-Portal/apps/portal/lib/posthog.ts`](../Retire-Portal/apps/portal/lib/posthog.ts)
- Event taxonomy (single source of truth): [`../Retire-Portal/apps/portal/lib/analytics/events.ts`](../Retire-Portal/apps/portal/lib/analytics/events.ts)
- Landing copy (current): [`../Retire-Portal/apps/portal/public/index.html`](../Retire-Portal/apps/portal/public/index.html)
- Pricing copy (current): [`../Retire-Portal/apps/portal/app/upgrade/page.tsx`](../Retire-Portal/apps/portal/app/upgrade/page.tsx)
- Loops setup spec: [`../Retire-Portal/docs/business/LOOPS_EMAIL_SETUP.md`](../Retire-Portal/docs/business/LOOPS_EMAIL_SETUP.md) (mirrored to [email/LOOPS_EMAIL_SETUP.md](email/LOOPS_EMAIL_SETUP.md))
- Affiliate program spec: [`../Retire-Portal/docs/business/AFFILIATE_PROGRAM.md`](../Retire-Portal/docs/business/AFFILIATE_PROGRAM.md) (mirrored to [affiliate/AFFILIATE_PROGRAM.md](affiliate/AFFILIATE_PROGRAM.md))

## Where to put things

| You're working on… | Read | Write to | Use agent / skill |
|---|---|---|---|
| A blog post | `brand/`, `seo/keyword-research/` | `content/blog/drafts/` | content-writer / `/new-blog-post` |
| Keyword research | `brand/product-tools.md` | `seo/keyword-research/` | seo-strategist / `/keyword-research` |
| SEO audit of a URL | — | `seo/audits/` | seo-strategist / `/seo-audit` |
| A Loops email sequence | `email/LOOPS_EMAIL_SETUP.md` | `email/sequences/` | email-marketer / `/new-email-sequence` |
| Google or Meta ad copy | `brand/value-props.md` | `paid/google-ads/` or `paid/meta-ads/` | paid-copywriter / `/ad-campaign` |
| Cold outreach (advisors, podcasts, partners) | `outreach/templates/` | `outreach/<segment>/` | outreach-specialist / `/outreach-list` |
| A week of social posts | `social/content-calendar.md` | `social/<channel>/` | social-media-manager / `/social-week` |
| Affiliate channel pitch | `affiliate/AFFILIATE_PROGRAM.md`, `affiliate/channels/` | `affiliate/recruitment/` | affiliate-recruiter / `/affiliate-pitch` |
| Weekly metrics report | — (script pulls live data) | `analytics/reports/` | analytics-reporter / `/weekly-report` |
| Publish a finalized draft to the portal | `content/blog/drafts/<slug>.md` | `../Retire-Portal/apps/portal/app/blog/<slug>/page.mdx` | `/publish-blog` |

## Operating rules for agents in this project

1. **Brand voice is non-negotiable.** Read [brand/voice.md](brand/voice.md) before drafting any copy. If you're unsure whether a sentence sounds like RetireMore, it doesn't.
2. **Numbers must be sourced.** Every statistic in published copy needs a citation in the document footer. Prefer SSA, CMS, BLS, NBER, Boston College CRR, Kitces, Morningstar, Vanguard research, and peer-reviewed journals. No "studies show" without a study.
3. **Never invent product features.** The 12 tools above are the entire product. If you need to describe a feature, check `brand/product-tools.md` and the appRegistry. If a tool doesn't do something, don't claim it does.
4. **Internal links are required in blog posts.** Every blog post links to *at least* the most relevant tool's landing or `/demo` page.
5. **Disclaimers on financial guidance.** Any draft that names specific dollar amounts, ages, or strategies for the reader gets a one-line *"This is a planning tool, not personalized financial advice"* footer.
6. **Don't push to remote.** Scripts that touch Retire-Portal (`publish-blog.ts`) write files locally and *print* the `gh pr create` command — they never push. Same for any future scripts that touch Loops campaigns: draft mode by default, send only on explicit user confirmation.
7. **Secrets stay in `.env`.** Never commit `.env`. Never write API keys into any file in this repo. `.env.example` documents what keys are needed.
8. **One slash command per natural unit of work.** Don't run `/new-blog-post` and `/social-week` and `/ad-campaign` from a single prompt. The user invokes them one at a time so they can review.
9. **Never propose paid advisor matching, lead-gen marketplaces, or per-lead fees from RIAs.** Trust pillar #3 ("We never take referral fees from advisors") is permanent. When users need a fiduciary, point them to the free directory at [content/landing-pages/fiduciary-directory.md](content/landing-pages/fiduciary-directory.md) — never to SmartAsset, NerdWallet Advisor Matcher, Zoe, Wealthramp, Indyfin, or any similar service. The full policy lives in the appendix of [affiliate/AFFILIATE_PROGRAM.md](affiliate/AFFILIATE_PROGRAM.md).

## Source-of-truth references (always read these before changing claims)

- Product: [`../Retire-Portal/apps/portal/lib/appRegistry.ts`](../Retire-Portal/apps/portal/lib/appRegistry.ts)
- Pricing: [`../Retire-Portal/apps/portal/app/upgrade/page.tsx`](../Retire-Portal/apps/portal/app/upgrade/page.tsx)
- Landing copy: [`../Retire-Portal/apps/portal/public/index.html`](../Retire-Portal/apps/portal/public/index.html)
- Events: [`../Retire-Portal/apps/portal/lib/analytics/events.ts`](../Retire-Portal/apps/portal/lib/analytics/events.ts)
- Business plan: [docs/strategy/BusinessPlan.md](docs/strategy/BusinessPlan.md)
- Launch playbook: [docs/strategy/Launch-Marketing-Playbook.md](docs/strategy/Launch-Marketing-Playbook.md)
- Customer acquisition: [docs/strategy/CUSTOMER_ACQUISITION.md](docs/strategy/CUSTOMER_ACQUISITION.md)
