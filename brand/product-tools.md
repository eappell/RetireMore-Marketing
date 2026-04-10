# Product Tools — Canonical Reference

Source of truth: [`../../Retire-Portal/apps/portal/lib/appRegistry.ts`](../../Retire-Portal/apps/portal/lib/appRegistry.ts). Mirror any changes here.

All 12 tools are available on the **Free** tier (`freeAllowed: true` for every entry). Tier gating happens on *features within tools* (saved scenarios, PDF export, AI Coach query limits) — not on access to the tools themselves.

---

## Financial Security (5 tools)

### 1. Retirement Income Planner
- **id:** `income-estimator`
- **Mobile URL:** https://m-planner.retiremore.com
- **One-liner:** Model income, taxes, and net worth across every scenario with Monte Carlo simulation.
- **What it actually does:** Builds a year-by-year income, tax, and net-worth projection from now through end of plan. Supports multiple income sources (W-2, SS, pension, rental, business, RMDs), tax-aware withdrawals, and Monte Carlo sequence-of-returns modeling.
- **Best for:** Pre-retirees and the early-retired who want to know "am I on track?" with real math.
- **Persona fit:** Linda (primary), Mark, Patricia
- **Inbound keyword themes:** "am I on track to retire," "retirement calculator with monte carlo," "retirement income projection"

### 2. Social Security Optimization
- **id:** `ss-optimizer`
- **Mobile URL:** https://m-ss.retiremore.com/mobile
- **One-liner:** Find the claiming strategy that maximizes lifetime benefits.
- **What it does:** Computes lifetime benefit by claiming age (62–70) for individuals and couples, including spousal and survivor strategies. Outputs break-even age, expected lifetime benefit at each claiming age, and recommended strategy with trade-off explanation.
- **Best for:** Anyone within 10 years of claiming.
- **Persona fit:** Linda (primary), Mark
- **Inbound keyword themes:** "when to claim social security," "social security claiming strategy," "spousal benefit calculator"

### 3. Tax Impact Analyzer
- **id:** `tax-analyzer`
- **Mobile URL:** https://m-tax.retiremore.com/mobile
- **One-liner:** Plan Roth conversions, withdrawal order, and IRMAA avoidance.
- **What it does:** Models tax-bracket-aware Roth conversion strategies during the gap years (retirement → RMD age), withdrawal sequencing across taxable/tax-deferred/Roth accounts, and IRMAA cliff avoidance. Shows after-tax dollars and lifetime tax delta side by side.
- **Best for:** Retirees and pre-retirees in the gap years.
- **Persona fit:** Mark (primary), Linda
- **Inbound keyword themes:** "roth conversion calculator," "irmaa cliffs," "withdrawal order optimization"

### 4. Longevity & Drawdown Planner
- **id:** `longevity-planner`
- **Mobile URL:** https://m-longevity.retiremore.com/mobile
- **One-liner:** Sustainable withdrawal strategies based on longevity estimates.
- **What it does:** Combines longevity estimates (using mortality data) with sustainable withdrawal modeling. Tests fixed-percent, dynamic (Guyton-Klinger), and floor-and-ceiling strategies against the user's portfolio. Surfaces sequence-of-returns risk and probability of plan success.
- **Best for:** Newly retired or close to it.
- **Persona fit:** Mark (primary), Linda
- **Inbound keyword themes:** "safe withdrawal rate," "4% rule alternatives," "sustainable retirement withdrawal"

### 5. Healthcare Cost Calculator
- **id:** `healthcare-cost`
- **Mobile URL:** https://m-healthcare.retiremore.com/mobile
- **One-liner:** Project lifetime healthcare costs with Medicare, IRMAA, long-term care.
- **What it does:** Projects healthcare costs by year through end of plan. Models pre-Medicare ACA premiums, Medicare Parts A/B/D, Medigap or Medicare Advantage, IRMAA brackets based on income, dental/vision/hearing, and a long-term care assumption (with toggleable LTC insurance scenarios). International healthcare scenarios for expat retirees (Planner tier).
- **Best for:** Anyone retiring before 65; anyone evaluating LTC; anyone affected by IRMAA.
- **Persona fit:** Linda, Mark, Janet & David
- **Inbound keyword themes:** "healthcare costs in retirement," "medicare irmaa brackets," "retiring before 65 health insurance"

---

## Lifestyle & Purpose (4 tools)

### 6. Retire Abroad AI
- **id:** `retire-abroad`
- **URL:** https://retire-abroad-ai.vercel.app/
- **Mobile URL:** https://m-abroad.retiremore.com/mobile
- **One-liner:** Compare 100+ countries across cost of living, healthcare, visas, and culture.
- **What it does:** Filters and ranks 100+ countries on 14 criteria (cost of living, healthcare quality and cost, visa accessibility, climate, safety, English usage, culture/community, infrastructure, banking, taxation, etc.). AI Country Insights deep-dive (Planner tier) generates personalized analysis per country.
- **Best for:** Couples exploring expat retirement; anyone curious about a specific country.
- **Persona fit:** Janet & David (primary)
- **Inbound keyword themes:** "best countries to retire abroad," "retire in portugal," "retire in mexico cost of living"

### 7. State Relocate Selector
- **id:** `state-relocator`
- **Mobile URL:** https://m-state.retiremore.com/mobile
- **One-liner:** Compare states with comprehensive tax analysis and relocation guidance.
- **What it does:** State-by-state comparison on income tax, sales tax, property tax, estate/inheritance tax, cost of living, climate, healthcare, and retiree-friendliness. Shows tax delta vs. current state.
- **Best for:** Pre-retirees considering a move within the US.
- **Persona fit:** Mark, Linda
- **Inbound keyword themes:** "best states to retire," "states with no income tax," "retirement tax friendly states"

### 8. Retirement Identity Builder
- **id:** `retirement-identity-builder`
- **Mobile URL:** https://m-identity.retiremore.com/mobile
- **One-liner:** Discover who you are beyond your career with a 7-step guided journey.
- **What it does:** Seven-step guided exercise covering values, strengths, identities, daily structure, relationships, contribution, and a personal "purpose statement." Outputs an Identity Plan that pairs with the Volunteer Matchmaker.
- **Best for:** Recently retired or about to retire from a long, identity-defining career.
- **Persona fit:** Robert (primary)
- **Inbound keyword themes:** "what to do in retirement besides golf," "retirement identity crisis," "purpose after retirement"

### 9. Volunteer Purpose Matchmaker
- **id:** `volunteer-matcher`
- **Mobile URL:** https://m-volunteer.retiremore.com/mobile
- **One-liner:** Match your skills to meaningful volunteer opportunities near you.
- **What it does:** Takes the user's skills, interests, time availability, and location and matches to volunteer opportunities (causes and roles). Outputs a personalized list with why each match was made.
- **Best for:** Identity-searchers; anyone with time and skills looking to contribute.
- **Persona fit:** Robert (primary)
- **Inbound keyword themes:** "volunteer opportunities for retirees," "encore career," "meaningful work after retirement"

---

## Legacy & Impact (3 tools)

### 10. Legacy Flow Visualizer
- **id:** `legacy-flow-visualizer`
- **Mobile URL:** https://m-legacy.retiremore.com/mobile
- **One-liner:** Visualize estate distribution with interactive Sankey diagrams.
- **What it does:** Takes estate inputs (assets, beneficiaries, trusts, charitable intent, taxes) and renders a Sankey diagram of how the estate flows. Lets the user toggle scenarios (with/without trust, different beneficiary splits, charitable bequest variations).
- **Best for:** Anyone with assets to leave behind who wants to *see* the picture before talking to an attorney.
- **Persona fit:** Patricia (primary), Mark
- **Inbound keyword themes:** "estate planning visualization," "how does my estate get distributed," "estate planning for non-lawyers"

### 11. Gifting Strategy Planner
- **id:** `gifting-planner`
- **Mobile URL:** https://m-gifting.retiremore.com/mobile
- **One-liner:** Plan meaningful lifetime gifts within tax thresholds.
- **What it does:** Models annual exclusion gifts ($18K/donor/recipient as of 2026, check current limit), 529 superfunding, lifetime exemption usage, and direct medical/tuition payments (which don't count against the exclusion). Surfaces tax efficiency and estate-reduction impact.
- **Best for:** Wealthy retirees with adult children/grandchildren and a desire to give while living.
- **Persona fit:** Patricia (primary), Mark
- **Inbound keyword themes:** "annual gift exclusion 2026," "lifetime gift tax exemption," "529 superfunding"

### 12. Digital Estate Manager
- **id:** `digital-estate-manager`
- **Mobile URL:** https://m-digital.retiremore.com/mobile
- **One-liner:** Organize your complete digital legacy vault.
- **What it does:** Inventories accounts (financial, online, subscriptions, social), stores executor instructions, links to legal documents, password manager integration guidance, and final-wishes documentation. Designed to be the one thing your executor opens.
- **Best for:** Anyone with a digital footprint (everyone) and a desire to make it easy for their family.
- **Persona fit:** Patricia (primary)
- **Inbound keyword themes:** "digital estate planning," "what happens to my online accounts when i die," "executor checklist"

---

## Cross-tool stories (use in pillar content)

- **The Roth → IRMAA story:** Tax Analyzer + Healthcare Cost — show how aggressive Roth conversions can push the user into IRMAA brackets and what to do about it.
- **The expat healthcare story:** Retire Abroad + Healthcare Cost — international healthcare scenarios bridging the gap before Medicare.
- **The state-tax-aware drawdown story:** State Relocator + Tax Analyzer + Income Planner — moving from CA to TX before drawing down a Roth conversion.
- **The "what do I do with my time" story:** Identity Builder + Volunteer Matchmaker — purpose framework that ends in concrete next steps.
- **The estate-with-living-gifts story:** Gifting Planner + Legacy Flow Visualizer — see the estate get smaller (and the family closer) over time.
