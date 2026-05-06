# RetireMore — Affiliate & Referral Program

**Updated:** 2026-05-06 (replaces March 2026 v1)
**Status:** Spec ready to ship. Recruitment plan in [recruitment/launch-creators.md](recruitment/launch-creators.md). Platform setup in [platform-eval.md](platform-eval.md). Competitive context in [competitive-analysis.md](competitive-analysis.md). DIY-vs-agency analysis in [managed-services.md](managed-services.md).

---

## Program Overview

RetireMore's affiliate program pays partners for driving qualified subscribers. Two parallel tracks:

1. **Consumer affiliates** (content creators, podcasters, YouTubers, newsletter authors, finance educators) — paid via recurring commission for the lifetime of every paying customer they refer.
2. **Advisor referrals** (existing advisor customers refer other advisors) — paid via one-time bounty plus recurring residual.

Public rate card lives at retiremore.com/affiliates. Boldin and Empower both hide theirs; transparency is our recruiting wedge.

---

## Commission Structure

### Consumer track (default)

| Element | Rate |
|---|---|
| **Base recurring commission** | **30% of every payment, for the lifetime of the subscription** |
| **First-conversion bonus** | **$20 one-time**, paid the first time *any* affiliate's first ever referral converts to paid. Once per affiliate, lifetime. |
| **Tier escalators** | 30% (0 to 24 active subs) → 35% (25 to 99) → 40% (100+) |
| **Cookie window** | 90 days |
| **Attribution** | Last-paid-touch (free user → paid upgrade keeps original affiliate credit) |
| **Refund clawback** | 30 days. After 30 days, commissions are banked. |

#### What that pays in dollars (Standard 30% tier)

| Plan they buy | Year 1 to affiliate | Year 3 cumulative | Year 5 cumulative |
|---|---|---|---|
| Premium annual ($149) | $44.70 | $134.10 | $223.50 |
| Premium monthly ($19) | $68.40 | $205.20 | $342.00 |
| Planner annual ($229) | $68.70 | $206.10 | $343.50 |
| Planner monthly ($29) | $104.40 | $313.20 | $522.00 |

Pro tier (35%) and Premier tier (40%) scale proportionally.

### Tier mechanics

- "Active" means currently paying. Refunded or churned customers drop out of the count and out of payouts.
- Tier increases apply to the **whole book**, not just new conversions. Hit Pro at 25 active subs and the existing recurring book bumps to 35% the next billing cycle.
- Tier downgrades only after 60 days below threshold (a slow month doesn't whiplash earnings).

### Advisor track (separate program)

Existing advisor customers refer other advisors. Consumer creators do not run this track. Pricing reflects the live advisor tiers in [`apps/portal/app/advisor/pricing/page.tsx`](../../Retire-Portal/apps/portal/app/advisor/pricing/page.tsx) and the CFP pitch deck. Annual billing is the canonical headline rate; monthly billing exists at a higher rate but is not the figure we lead with.

| Plan they buy | Annual rate (canonical) | Annual total | Monthly billing | One-time bounty | Recurring residual |
|---|---|---|---|---|---|
| Solo (up to 20 clients) | $79/mo | $948/yr | $99/mo | $100 after first paid month | 10% recurring lifetime |
| Professional (up to 45 clients) | $159/mo | $1,908/yr | $199/mo | $200 after first paid month | 10% recurring lifetime |
| Enterprise (unlimited clients) | $399/mo | $4,788/yr | $499/mo | $500 after first paid month | 10% recurring lifetime |

The 10% recurring residual is computed against actual paid revenue: a Solo annual customer ($948/yr) generates $94.80/yr to the referring advisor; a Professional annual customer generates $190.80/yr; Enterprise annual generates $478.80/yr.

Quarterly bonus: refer 5+ advisors in a quarter, earn an additional $500.
Cookie window: 90 days. Attribution: last-paid-touch.

### Custom assets for vetted creators (10k+ audience)

On top of the public self-serve tier:

1. **Custom promo code** (e.g., `PETER20` for 20% off first year). Discount is split: customer saves $30 on Premium annual; RetireMore eats $15; affiliate's first-year commission drops from $44.70 to $29.70 on those sales.
2. **Custom landing page** at `/r/{handle}` with the creator's name, photo, and pre-filled promo code. Industry data shows 30 to 50% conversion lift in personal-finance affiliate programs.
3. **Co-marketing slot:** top 5 partners by quarter get an email mention to our list, plus up to $500 per quarter for a sponsored YouTube deep-dive.

### Payment terms

- Minimum payout: $50, rolls forward if unmet.
- Methods: Wise (international), PayPal (US), ACH (US business entities).
- Frequency: monthly, net 30 after commission is confirmed.
- No commission cap. Lifetime recurring is intentional and uncapped.

---

## Why these numbers

Detailed comp data is in [competitive-analysis.md](competitive-analysis.md). Summary:

| Comp | Public rate | Recurring? |
|---|---|---|
| ProjectionLab | 20% | Yes (one source claims 2-yr cap) |
| Boldin | Not disclosed; called "low" by White Coat Investor | Tiered |
| Empower | Up to $250/lead, $100k-asset gate | One-time |
| Monarch Money | $20 per paid sub | One-time |

30% recurring lifetime materially beats every published rate while sitting inside the 25 to 35% range that's standard for SaaS subscription affiliates. The $20 first-conversion bonus solves the "first paycheck takes 3 months and is $4" problem that kills micro-influencer momentum.

**Margin guardrail:** at 30% on Premium annual ($149), affiliate cost is $44.70 year 1, paid as the customer pays us (not up-front). Compared to paid-ads CAC in this vertical ($80 to $200 paid up-front for a $149 ARR customer), affiliate is cash-flow-friendlier. The risk is a power-affiliate driving 1,000 conversions and being owed ~$45k/yr in perpetuity. That's a problem we want.

---

## Brand-policy guardrails

The four iron rules that override everything else (full text in appendix below):

1. **Never run a paid advisor-matching service.** No SmartAsset / NerdWallet Advisor Matcher / Zoe / Wealthramp / Indyfin pattern. Permanent.
2. **Never pay fee-only CFPs/RIAs per signup for sending us their fiduciary clients.** That's a kickback under SEC Rule 206(4)-3. CFPs use a referral or educational license, not paid affiliate.
3. **Never sell, share, or rent user contact info** to financial-services firms.
4. **When users need a fiduciary, point them to free directories** (NAPFA, XY Planning Network, Garrett, Fee-Only Network, CFP Board verifier).

These are inherited from CLAUDE.md trust pillar #3 and are the wedge that distinguishes RetireMore from every other player in the category.

---

## Affiliate Channels

### 1. Retirement Content Creators (YouTube, podcasts, newsletters, blogs)

**Who:** Creators making content about retirement planning, financial independence, FIRE, or "life after 50."
**Why they'd promote RetireMore:** Their audience is asking exactly the questions RetireMore answers. Recommending a comprehensive 12-tool platform differentiates them from creators who only push one calculator.
**Track:** Consumer (30% recurring lifetime + $20 first-conversion bonus).
**Outreach strategy:** Identify creators with 10k to 500k followers. Offer free Planner access for review. Provide custom landing pages and promo codes. Supply demo video clips and talking points.
**Target list:** See [recruitment/launch-creators.md](recruitment/launch-creators.md) for the first 20.
**KPI:** 50 to 100 creator partnerships in Year 1, targeting 5 to 10 conversions per creator per month.

### 2. Expat Community Influencers

**Who:** Creators, bloggers, and community leaders focused on retiring abroad.
**Why they'd promote:** Retire Abroad AI compares 100+ countries on cost of living, healthcare, visas, and culture. No comp offers this depth.
**Track:** Consumer.
**Outreach:** Target expat YouTubers and bloggers (Portugal, Mexico, Costa Rica, Panama, Spain, etc.). Offer co-branded "compare your top 3 countries" content. Country-specific landing pages.
**KPI:** 20 to 30 partnerships, 3 to 5 conversions per creator per month.

### 3. Travel & Lifestyle Vloggers

**Who:** Slow-travel, snowbird, and digital-nomad creators whose audience overlaps with "where should I retire?"
**Why they'd promote:** Their audience dreams about retiring somewhere beautiful but hasn't done the financial analysis.
**Track:** Consumer.
**Outreach:** Target retirement-friendly destination coverage (not backpacker content). Offer destination-specific comparison links and "can you afford to retire here?" angles.
**KPI:** 15 to 25 partnerships.

### 4. Financial Educators & Podcasters

**Who:** Personal finance educators, financial-literacy advocates, retirement-focused podcast hosts.
**Why they'd promote:** RetireMore is helpful, not salesy. They can recommend it without compromising audience trust.
**Track:** Consumer (NOT applicable to fee-only CFPs/RIAs; see compliance carve-out).
**Outreach:** Podcast sponsorship + affiliate combo. Founder guest spots. CFP-specific landing for dual consumer/advisor conversion.
**KPI:** 10 to 20 partnerships, podcast sponsorships starting Q3 2026.

### 5. CFP & Advisor-to-Advisor Referrals

**Who:** Existing CFPs/RIAs in our advisor program who refer other advisors.
**Why they'd refer:** Strong financial incentive ($200 to $350 + 10% recurring lifetime) for advisor-to-advisor word-of-mouth.
**Track:** Advisor referral (separate program).
**Important:** This is advisors referring *peer advisors* to use RetireMore as a tool. It is NOT advisors referring their fiduciary clients to RetireMore for paid signup commission (which would be a kickback under Investment Advisers Act).
**Program structure:**
- Existing advisor customers automatically get a referral link
- First 3 months free for the referred advisor
- Referring advisor earns commission after referred advisor's first paid month
- Tiered bonus: 5+ referrals in a quarter, $500 bonus
**KPI:** 30% of advisor customers participate, 2 to 3 referrals per active referrer per year.

### 6. HR & Benefits Consultants

**Who:** Benefits brokers, HR consultants, employee wellness providers advising companies on retirement readiness.
**Why they'd refer:** RetireMore fills a gap that 401(k) providers don't cover (lifestyle, healthcare, Social Security, estate).
**Track:** Custom B2B (not the standard consumer/advisor tracks). $500 per employer contract + 10% of first-year contract value.
**Outreach:** HR consulting firms specializing in pre-retirement benefits. Wellness platforms (Virgin Pulse, Limeade, Wellable). White-label option for consultants who want a branded offering.
**KPI:** 5 to 10 consultant partnerships by end of Year 1.

### 7. Estate Planning & Elder Law Attorneys

**Who:** Solo and small-firm attorneys serving clients approaching retirement.
**Why they'd refer:** Digital Estate Manager and Legacy Flow help their clients organize information attorneys need anyway.
**Track:** Consumer.
**Outreach:** Co-branded "Prepare for Your Estate Planning Meeting" checklist. Free attorney accounts so they see what their clients produce. CLE webinar partnerships.
**KPI:** 50 to 100 attorney referral partners by end of Year 2.

### 8. Insurance Agents & Medicare Brokers

**Who:** Independent insurance agents and Medicare brokers (not captive agents).
**Why they'd refer:** Healthcare Cost Estimator naturally leads into Medigap, Medicare Advantage, and LTC conversations.
**Track:** Consumer (lower per-customer LTV match, so the standard 30% is fine).
**Outreach:** Embed widget for agent websites. Medicare Cost Preview landing page. Open Enrollment season (Oct-Dec) timing.
**KPI:** 100+ agent partners by Year 2.

### 9. Retirement Community & 55+ Living Partners

**Who:** Active adult communities, CCRCs, senior living marketplaces, relocation services.
**Why they'd partner:** Their prospects are actively planning relocation; State Relocator helps build trust and accelerate sales.
**Track:** Custom B2B. Negotiated CPA, typically $25 to $50 per consumer signup (these users are high-intent).
**Outreach:** 55Places.com, Where to Retire magazine, community sales teams.
**KPI:** 10 to 20 community partnerships by Year 2.

### 10. Podcast Networks & Media Partners

**Who:** Podcast networks, newsletters, media companies with retirement-age audiences.
**Why they'd partner:** Natural sponsor fit. Helpful product, not a brokerage or insurance ad.
**Track:** Custom hybrid (flat sponsorship + CPA bonus).
**Outreach:** Kiplinger, MarketWatch retirement, NextAvenue, top retirement podcasts.
**KPI:** 5 podcast sponsorships in Year 1, 10+ in Year 2.

---

## Affiliate Program Infrastructure

### Platform: Rewardful

Two-way Stripe sync, lifetime recurring commission native, $49/mo Starter plan covers up to $7,500 tracked monthly revenue. Setup in 1 to 3 days. Detailed eval and migration path in [platform-eval.md](platform-eval.md).

| Component | Solution | Monthly cost |
|---|---|---|
| Affiliate tracking | Rewardful (Stripe-native) | $49 to $149 |
| Referral link generation | Rewardful default `?via=<id>` | Included |
| Affiliate dashboard | Rewardful | Included |
| Custom landing pages | Rewardful templates + `/r/{handle}` route | Built in-house |
| Payouts | Wise / PayPal | Pass-through fees |
| Brand kit hosting | VPS static folder (no Vercel) | Negligible |

### Operational cadence

- Weekly: review and approve new affiliate signups.
- Monthly: pay out, send affiliate scorecard via Loops, review top/bottom performers.
- Quarterly: review tier thresholds and commission structure, select top 5 for co-marketing.

---

## Compliance & Legal

- **FTC disclosure:** All affiliates must disclose their relationship to RetireMore in linking content. We provide canned language in the brand kit.
- **Affiliate agreement:** Standard terms covering prohibited tactics (spam, misleading claims, paid-search bidding on brand terms, coupon-site listings without approval), brand usage, payment terms, termination.
- **Financial disclaimers:** Affiliates may NOT present RetireMore as financial advice. Approved language: "RetireMore is an educational planning tool, not a substitute for professional financial advice."
- **No incentivized signups.** Affiliates may not offer cash, gift cards, or kickbacks to end users beyond the discount codes we provide.
- **No paid bidding on brand terms.** No Google Ads against "RetireMore" or variants.
- **No coupon-site listings without approval.** Custom codes are fine; landing on Honey or RetailMeNot without approval is grounds for termination.
- **Geographic restrictions:** US-only at launch; international affiliates considered in Year 2.
- **Self-referral disabled.** Affiliates cannot earn on their own subscription.

---

## Revenue Projections

Updated for the 30% recurring lifetime model. Key shifts vs v1: higher per-conversion lifetime cost, but better cash flow (no upfront bounty per consumer conversion), better incentive alignment with retention, and projected higher per-affiliate productivity from a more competitive rate.

| Phase | Active Affiliates | Monthly New Conversions | Avg Year 1 Commission per Conversion | Monthly Affiliate Cost (steady-state) | Monthly Revenue Generated |
|---|---|---|---|---|---|
| **Launch** (Month 1-3) | 10 to 20 | 30 to 60 | $50 | $1,500 to $3,000 | $4,500 to $11,000 |
| **Growth** (Month 4-9) | 50 to 100 | 150 to 400 | $50 | $7,500 to $20,000 | $22,500 to $72,000 |
| **Scale** (Month 10-18) | 200 to 500 | 500 to 1,500 | $52 | $26,000 to $78,000 | $75,000 to $270,000 |
| **Mature** (Month 18+) | 500+ | 1,500+ | $54 | $80,000+ | $270,000+ |

**Assumptions:**
- Blended consumer ARPU: $189/yr (mix-weighted toward Premium annual).
- 30% recurring at standard tier; mix of paying customers will eventually push avg cost to ~36% as affiliates climb tier escalators.
- Affiliate-driven users convert at ~3% (click → paid signup).
- Average affiliate generates 5 to 10 conversions per month once active.
- Year 2+ retention: 55% (lifetime commission means we keep paying on year-2+ customers; that's reflected as higher steady-state cost vs new-conversion cost).

**ROI:** Payback period on affiliate-acquired customer is under 2 months for Premium annual. With 55% Year 2 retention, LTV/CAC from affiliates exceeds 4:1.

---

## Launch Timeline

| Week | Action |
|---|---|
| 1 | Set up Rewardful, connect Stripe, configure 30% recurring + tier escalators + 90-day cookie. Create affiliate agreement and FTC disclosure template. |
| 2 | Build /affiliates landing page (copy in [landing-page.md](landing-page.md)). Build creative kit (logos, screenshots, talking points, video clips). |
| 3 | Touch 1 outreach to first 7 Tier-1 creators (see [recruitment/launch-creators.md](recruitment/launch-creators.md)). |
| 4 | Public launch. Add /affiliates link in portal footer. Touch 1 outreach to Tier 2. |
| Month 2 | Touch 2 follow-ups. Begin advisor referral program build into advisor dashboard. Outreach to expat and travel creators. |
| Month 3 | Begin podcast sponsorship conversations. Outreach to HR/benefits consultants. First payout cycle. |
| Month 6 | Performance review. Adjust thresholds. Identify quarterly co-marketing partners. |

---

*Reviewed quarterly. Update when commission structure changes, when launch creators report back on the rate's competitiveness, or when migrating platforms.*

---

## Appendix — What this program will NEVER do (brand policy, 2026-04-10)

This appendix codifies a brand policy that supersedes anything elsewhere in this document if the two conflict.

**1. We will never run a paid advisor-matching service.**
RetireMore will not operate a SmartAsset / NerdWallet Advisor Matcher / Zoe Financial / Wealthramp / Indyfin-style lead-gen marketplace where users are matched with RIAs in exchange for per-lead fees paid to RetireMore. This is a permanent policy, not a v1 deferral. It is part of trust pillar #3 in [`../CLAUDE.md`](../CLAUDE.md): *"We never take referral fees from advisors."*

**2. We will never accept per-signup commissions from CFPs or RIAs.**
Existing affiliate segment #4 (Fee-only CFPs / RIAs) is **inbound only** — CFPs promote RetireMore to *their* clients, not the other way around. The relationship is structured as a referral or educational license that does not compromise the advisor's fiduciary duty (per the affiliate-recruiter agent's compliance rail). RetireMore does not pay CFPs to send users in our direction in any structure that resembles a kickback for referring fiduciary clients.

**3. We will never sell, share, or rent user contact info to financial services firms.**
No exceptions. This applies to advisors, insurance brokers, annuity issuers, brokerages, robo-advisors, lenders, and credit card companies.

**4. When users need a fiduciary, we point them to free directories.**
See the spec at [`../content/landing-pages/fiduciary-directory.md`](../content/landing-pages/fiduciary-directory.md) — a free, no-money-changes-hands page that links to NAPFA, XY Planning Network, Garrett Planning Network, Fee-Only Network, and the CFP Board verifier. No revenue, no tracking of individual user-to-directory clicks beyond aggregate PostHog events.

**Why this is permanent.** Every other "find an advisor" service monetizes by selling users as leads. Refusing to do that is a competitive wedge, not a sacrifice — and it's the one promise that, if broken, would unravel the entire brand position.

**SEC note.** Patterns prohibited above (per-lead fees, paid matching) would trigger SEC Rule 206(4)-3 (the solicitor rule) and require written disclosure to clients. The simpler answer is to not do them at all.
