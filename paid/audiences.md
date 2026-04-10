# Paid Audiences — Persona → Targeting

Map each persona from [`brand/audience-personas.md`](../brand/audience-personas.md) to channel-specific audience definitions for Google Ads and Meta Ads.

## 1. Linda — Pre-Retiree Researcher (58)

### Google Ads
- **Search keywords:** "am i on track to retire," "retirement calculator," "social security claiming age," "retirement income planner," "retiring at 62 vs 65 vs 67"
- **Audiences:** In-market for "Investment Services," "Retirement Planning," 55–64 age, household income top 50%
- **Negative keywords:** "free retirement," "retirement homes," "early retirement extreme," "FIRE movement"

### Meta Ads
- **Age:** 52–65
- **Locations:** US, Canada
- **Interests:** Retirement planning, Personal finance, Investing, AARP, Suze Orman, Dave Ramsey, Kitces
- **Behaviors:** Engaged shoppers in financial services
- **Custom audiences:** Email list of newsletter subscribers, lookalikes (1–3%) from existing paid users
- **Exclusions:** Existing customers, anyone already retired (interest in golf travel + age 70+)

## 2. Mark — Newly Retired Optimizer (64)

### Google Ads
- **Search keywords:** "roth conversion calculator," "withdrawal sequence retirement," "irmaa cliff," "monte carlo retirement simulator," "tax efficient withdrawal"
- **Audiences:** Affinity "DIY Investors," "Personal Finance Enthusiasts," 60–70 age
- **Negative keywords:** "robo advisor," "managed account," "annuity"

### Meta Ads
- **Age:** 60–72
- **Locations:** US (especially FL, TX, AZ, NC for retiree concentration)
- **Interests:** Bogleheads, Kitces, Pralana, Boldin, Vanguard, Fidelity, retirement income
- **Behaviors:** Recently retired (Meta inferred), high-value financial product engagement
- **Custom audiences:** Lookalikes from Planner-tier users, lookalikes from blog readers of optimization content

## 3. Janet & David — Expat-Curious (62 & 65)

### Google Ads
- **Search keywords:** "best countries to retire abroad," "retire in portugal," "retire in mexico cost," "expat health insurance," "d7 visa portugal," "retiree visa thailand"
- **Audiences:** In-market "International Travel," 55–70 age, affinity "Expats"
- **Negative keywords:** "vacation rental," "real estate investment," "timeshare"

### Meta Ads
- **Age:** 55–72
- **Locations:** US, Canada, UK
- **Interests:** International Living, Expat Exchange, House Hunters International, retirement abroad, Lonely Planet, Anthony Bourdain, expat communities (country-specific)
- **Behaviors:** Frequent international travelers, interest in international real estate
- **Custom audiences:** Lookalikes from Retire Abroad AI users; visitors to /demo/retire-abroad

## 4. Robert — Identity-Searcher (67)

### Google Ads
- **Search keywords:** "what to do in retirement besides golf," "retirement identity," "purpose in retirement," "encore career," "meaningful work after retirement"
- **Audiences:** Affinity "Self-improvement," "Lifelong learners," 65+
- **Negative keywords:** "retirement community," "assisted living"

### Meta Ads
- **Age:** 62–75
- **Locations:** US
- **Interests:** Modern Elder Academy, Arthur Brooks, Atul Gawande, NextAvenue, Encore.org, AARP, lifelong learning, board service
- **Behaviors:** Recently retired, professional career history (executives, lawyers, doctors, professors)
- **Custom audiences:** LinkedIn export of retiring executives; lookalikes from Identity Builder users

## 5. Patricia — Estate Organizer (71)

### Google Ads
- **Search keywords:** "digital estate planning," "estate plan checklist," "what happens to my online accounts when i die," "executor checklist," "annual gift exclusion 2026"
- **Audiences:** Affinity "Estate Planning," "Legal Services," 65+
- **Negative keywords:** "funeral home," "probate attorney" (too commercial)

### Meta Ads
- **Age:** 65–80
- **Locations:** US
- **Interests:** AARP, estate planning, Trust & Will, NextAvenue, financial planning for seniors
- **Behaviors:** Grandparents, recently widowed (where targetable), high net worth
- **Custom audiences:** Visitors to /demo/digital-estate-manager; lookalikes from Digital Estate Manager users

## Custom audiences (built once, reused)

| Audience name | Source |
|---|---|
| `signed_up_no_save` | PostHog: `User Signed Up` AND NOT `Tool Data Saved` (last 30d) |
| `power_free_users` | PostHog: `tier = free` AND `toolsCompleted ≥ 3` |
| `paid_users_lookalike_1pct` | Meta lookalike from Stripe customer email export, 1% |
| `blog_reader_to_signup` | PostHog: `$pageview` on `/blog/*` AND `User Signed Up` |
| `cancelled_30d_winback` | Stripe: cancelled in last 30 days |

## Exclusions (always)

- Existing paid customers (don't waste impressions on them — use lifecycle email instead)
- Anyone who's clicked an ad and signed up in the last 7 days (already in onboarding sequence)
