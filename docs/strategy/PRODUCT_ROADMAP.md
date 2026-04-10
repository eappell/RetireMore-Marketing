# RetireMore — Product Roadmap

**Last updated:** March 2026
**Public roadmap:** https://feedback.retiremore.com

---

## Roadmap Philosophy

This roadmap is organized into phases aligned with the business plan. Each item is tagged with its driver:

- **CFP** = CFP Financial Accuracy Audit finding
- **UX** = UX Audit recommendation
- **BIZ** = Business plan milestone
- **DATA** = Data accuracy / API integration
- **INFRA** = Infrastructure / DevOps

---

## Completed (March 2026 Session)

These items were completed during the March 2026 development sprint:

| Item | Tag | Status |
|------|-----|--------|
| Guided/Detailed wizard for Retirement Planner | UX | Done |
| Sequential expense timeline (no-overlap design) | UX | Done |
| Month/year picker with age display | UX | Done |
| Collapsible Key Indicators panel | UX | Done |
| Warmer language in Digital Estate Manager | UX | Done |
| "Contingent" → "Backup Beneficiary" in Legacy Flow | UX | Done |
| Plain-language scenario labels in Legacy Flow | UX | Done |
| GlossaryTerms for COLA, MAGI across all apps | UX | Done |
| "Life Expectancy" → "Plan Until Age" in all apps | UX | Done |
| Metal Tier descriptions in Healthcare-Cost | UX | Done |
| Fix Gifting premium gate copy | UX | Done |
| Tax-Impact results split into collapsible sections | UX | Done |
| State-Relocate criteria language softened | UX | Done |
| Match score explanation in Volunteer Matchmaker | UX | Done |
| Risk tolerance allocations in Longevity Planner | UX | Done |
| Plain language mode toggle (portal + all apps) | UX | Done |
| "What This Means For You" summary in 6 apps | UX | Done |
| RMD explanation in Tax-Impact step 3 | UX | Done |
| Future-dollars note on Projections tab | UX | Done |
| Monte Carlo tooltip → subtitle | UX | Done |
| Fix duplicate scroll-to-top button | UX | Done |
| Auto-dismiss Getting Started for existing users | UX | Done |
| Standardize all repos to `main` branch | INFRA | Done |
| Update all deploy.sh to reference `main` | INFRA | Done |
| Exclude test files from common-lib tsc build | INFRA | Done |
| Fider feedback board deployed | INFRA | Done |

---

## Phase 1: Pre-Launch (Now – Launch Day)

*Target: 4–6 weeks. Focus on credibility, legal, and launch readiness.*

### Must-Have for Launch

### Immediate (This Week)

| # | Item | Tag | Est. Effort | Priority |
|---|------|-----|------------|----------|
| 0a | Form Wyoming LLC (online, ~$100) | BIZ | 30 min | Critical |
| 0b | Get EIN from IRS (free, irs.gov, instant) | BIZ | 15 min | Critical |
| 0c | Open business bank account under LLC + EIN | BIZ | 1 day | Critical |
| 0d | Configure Stripe under LLC (not personal SSN) | BIZ | 30 min | Critical |

See `docs/LLC_FORMATION_GUIDE.md` for the full LLC → CA → AZ transition plan.

### Must-Have for Launch

| # | Item | Tag | Est. Effort | Priority |
|---|------|-----|------------|----------|
| 1 | Add financial planning disclaimers to every tool output | CFP | 2–3 hours | Critical |
| 3 | Terms of Service | BIZ | 1–2 days (legal) | Critical |
| 4 | Privacy Policy (CCPA/GDPR — users enter financial data) | BIZ | 1–2 days (legal) | Critical |
| 5 | Cookie consent implementation | BIZ | 2–3 hours | Critical |
| 6 | Stripe subscription flows — fill in real price IDs | BIZ | 2–3 hours | Critical |
| 7 | Set Stripe webhook secret + register endpoint | BIZ | 1 hour | Critical |
| 8 | Landing page with email capture | BIZ | 1–2 days | High |
| 9 | Update all stale hardcoded values (SS max benefit, earnings test limit, gift exclusion, IRMAA thresholds) | CFP | 4–6 hours | High |
| 10 | Centralize financial constants in Retire-Common-Lib with version dating | CFP | 4–6 hours | High |
| 11 | Document return assumptions (7%/3.5% — real or nominal?) | CFP | 1 hour | High |
| 12 | Refund policy page | BIZ | 1 hour | Medium |

### Nice-to-Have for Launch

| # | Item | Tag | Est. Effort | Priority |
|---|------|-----|------------|----------|
| 13 | Healthcare-Cost: decision tree to eliminate ineligible insurance options | UX | 4–6 hours | Medium |
| 14 | Accessibility: add `aria-label` to icon-only buttons across all apps | UX | 3–4 hours | Medium |
| 15 | Color-only status indicators: add text labels for colorblind users | UX | 2–3 hours | Medium |
| 16 | "Share with Executor" PDF export in Digital Estate Manager | CFP | 4–6 hours | Medium |

---

## Phase 2: Post-Launch / Content-Led Growth (Months 1–6)

*Focus: Content marketing, first paying users, CFP audit fixes.*

### Financial Accuracy (CFP Audit Tier 1)

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 17 | Add COLA to Social Security Optimizer benefit calculations | CFP | 1–2 days |
| 18 | Separate capital gains from ordinary income in Retirement Planner | CFP | 1–2 days |
| 19 | Add Social Security state taxation rules to State Relocator (13 states) | CFP | 4–6 hours |
| 20 | Invoke NIIT calculation in Retirement Planner (code exists, not called) | CFP | 2–3 hours |

### Retention Features

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 21 | Monthly email digest — insights summary, readiness score, action items | BIZ | 2–3 days |
| 22 | Age milestone alerts ("You're approaching 59½ — here's what changes") | BIZ | 1–2 days |
| 23 | Year-over-year readiness score tracking | BIZ | 1 day |

### Content & Marketing

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 24 | Publish first Medium/Substack article | BIZ | 1 day |
| 25 | Launch YouTube channel with 3 tutorial videos | BIZ | 1 week |
| 26 | LinkedIn founder story + CFP-focused content | BIZ | Ongoing |
| 27 | SEO-optimized tool landing pages | BIZ | 2–3 days |
| 28 | Email nurture sequence for free → paid conversion | BIZ | 1–2 days |

### API Integrations (Free Government APIs)

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 29 | Integrate BLS API for real-time CPI/inflation data | DATA | 1 day |
| 30 | Integrate FRED API for interest rates and economic indicators | DATA | 1 day |
| 31 | Integrate Census Bureau API for state demographics in Relocator | DATA | 1–2 days |

---

## Phase 3: Advisor Channel + Marketplace (Months 3–9)

*Focus: CFP onboarding, Retire Abroad marketplace, lead referrals.*

### CFP Audit Tier 2

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 32 | Add WEP/GPO to Social Security Optimizer | CFP | 2–3 days |
| 33 | Add state estate tax calculations to Legacy Flow (MA/OR start at $1M) | CFP | 1–2 days |
| 34 | Add Part D IRMAA to Tax Analyzer | CFP | 4–6 hours |
| 35 | Add fee drag to Longevity Planner (1% advisor fee impact) | CFP | 2–3 hours |
| 36 | Update annual gift exclusion to current year in Gifting Planner | CFP | 1 hour |

### Advisor Features

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 37 | Advisor white-label option (custom branding) | BIZ | 2–3 days |
| 38 | Per-client tool visibility controls (hide/show tools) | BIZ | Done (exists) |
| 39 | Client engagement analytics for advisors | BIZ | 2–3 days |
| 40 | Advisor referral program implementation | BIZ | 1–2 days |

### Marketplace & Revenue

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 41 | Retire Abroad: sell first 10 country placements | BIZ | Sales effort |
| 42 | Launch qualified lead referral program to vetted CFPs | BIZ | 1–2 days |
| 43 | One-time Readiness Report purchase flow ($49–$79) | BIZ | 1–2 days |
| 44 | App bundle purchase flow (Financial, Purpose, Legacy) | BIZ | 1 day |

### Paid API Integrations

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 45 | VolunteerMatch API — real opportunities in Volunteer Matchmaker | DATA | 2–3 days |
| 46 | Numbeo API — real cost-of-living data in Relocator + Retire Abroad | DATA | 1–2 days |

---

## Phase 4: Paid Acquisition + Scale (Months 6–12)

*Focus: Paid ads, scaling to 2,500+ subscribers, infrastructure upgrades.*

### CFP Audit Tier 3

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 47 | Roth conversion modeling in Retirement Planner | CFP | 3–5 days |
| 48 | Shared client profile across tools (reduce re-entry) | CFP | 1 week |
| 49 | Pro-rata rule in Roth conversion analysis (Tax Analyzer) | CFP | 1–2 days |
| 50 | TCJA sunset toggle in Legacy Flow ($7M vs $14M exemption) | CFP | 1 day |
| 51 | Simplified Monte Carlo for free-tier users (100 trials) | CFP | 1–2 days |

### Platform Enhancements

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 52 | Annual recalibration engine (January prompt to update tax brackets, SS COLA, Medicare premiums) | BIZ | 2–3 days |
| 53 | "What if" stress testing across all tools ("What if SS cuts 23%?") | BIZ | 3–5 days |
| 54 | 7 PDF report types — polish and test | BIZ | 2–3 days |
| 55 | Mobile-responsive improvements across all apps | UX | 1 week |

### Infrastructure

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 56 | Migrate VPS to DigitalOcean or Hetzner (8 CPU, 16 GB RAM) | INFRA | 1 day |
| 57 | Implement response caching for AI Orchestrator | INFRA | 4–6 hours |
| 58 | Set up error tracking (Sentry) | INFRA | 2–3 hours |
| 59 | Set up uptime monitoring | INFRA | 1 hour |
| 60 | Firebase to Blaze tier migration (if needed) | INFRA | 1 hour |

### Paid Acquisition

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 61 | Google Ads — retirement planning queries | BIZ | Ongoing |
| 62 | Facebook/Instagram ads — Gen X targeting | BIZ | Ongoing |
| 63 | Retargeting pixel for free tool users | BIZ | 2–3 hours |

---

## Phase 5: Year 2+ (Months 12–24)

*Focus: Enterprise, employer partnerships, advanced features.*

### New Revenue Streams

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 64 | Employer/HR benefits — per-employee-per-month pricing | BIZ | 2–4 weeks |
| 65 | White-label licensing to banks, credit unions, 401(k) providers | BIZ | 4–8 weeks |
| 66 | Affiliate partnerships (Medicare supplement, annuity referrals) | BIZ | 2–4 weeks |

### Advanced Integrations

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 67 | Plaid — connect real bank/brokerage accounts for auto-import | DATA | 2–3 weeks |
| 68 | Visa/immigration API for Retire Abroad | DATA | 1 week |
| 69 | Medicare.gov API — real-time plan data and drug prices | DATA | 1 week |
| 70 | SSA API — actual benefit estimates | DATA | 1 week |
| 71 | Zillow/Redfin — home value estimates for relocation comparison | DATA | 1 week |

### Platform Maturity

| # | Item | Tag | Est. Effort |
|---|------|-----|------------|
| 72 | SOC 2 compliance preparation (if pursuing enterprise clients) | INFRA | 2–3 months |
| 73 | Cloud migration (AWS/GCP) with auto-scaling | INFRA | 1–2 weeks |
| 74 | Native mobile app (or responsive PWA) | BIZ | 2–3 months |
| 75 | Community features (forum, peer Q&A) | BIZ | 2–4 weeks |

---

## Tracking & Governance

- **Public user voting:** https://feedback.retiremore.com (Fider)
- **Internal backlog:** Jira
- **Roadmap updates:** This document updated monthly; Fider roadmap updated as items move
- **Prioritization framework:** CFP audit fixes > launch blockers > retention features > growth features > nice-to-haves

---

*This roadmap is a living document. Priorities may shift based on user feedback (Fider), revenue data, and market conditions. Items from the CFP Financial Accuracy Audit are prioritized by their tier rating (Tier 1 = must fix, Tier 2 = should fix, Tier 3 = would improve).*
