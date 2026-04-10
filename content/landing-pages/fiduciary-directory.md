---
slug: find-a-fiduciary
status: spec
persona: all (esp. Mark, Patricia)
primary_tool: none — informational page
primary_keyword: how to find a fee-only fiduciary
created: 2026-04-10
---

# Spec: /find-a-fiduciary

A free, no-money-changes-hands directory page that points users to fiduciary fee-only advisor networks. This page is the operational expression of trust pillar #3 — *"We never take referral fees from advisors."*

## Why this page exists

RetireMore's tools cover the planning that doesn't require a human advisor. But some users — usually with complex situations (business sale, non-grantor trust, IRMAA + Roth conversion stack, expat tax, divorce + Social Security) — actually need a person.

Every other "find an advisor" service on the internet (SmartAsset, NerdWallet Advisor Matcher, Zoe Financial, Wealthramp, Indyfin) monetizes by selling user contact info to RIAs at $50–$150 per lead. Users don't always know it. We won't do that. But we still want to help users find a real fiduciary when they need one.

The answer is a free directory page that points to existing, reputable fiduciary networks — and earns nothing for the link.

## Page goals

- Validate the third trust pillar in concrete form (proof, not just claim)
- Give complex-situation users a useful next step
- Differentiate from SmartAsset-style lead gen ("you are not the lead")
- Earn organic traffic for "how to find a fee-only fiduciary" / "how to find a fiduciary advisor" / "fee-only vs commission advisor"

## Page goals it does NOT have

- Lead capture (no email gate)
- Tracking individual user → directory clicks for sales purposes
- Affiliate links
- Sponsored placements

## Recommended directories (vetted, no money changes hands)

1. **NAPFA — National Association of Personal Financial Advisors** — fee-only fiduciaries, the strictest US standard. https://www.napfa.org/find-an-advisor
2. **XY Planning Network** — fee-only fiduciaries serving Gen X and Gen Y, monthly retainer model. https://www.xyplanningnetwork.com/find-an-advisor
3. **Garrett Planning Network** — hourly / project-based fee-only fiduciaries (good for one-time consults). https://garrettplanningnetwork.com/find-an-advisor
4. **Fee-Only Network** — broader fee-only directory. https://www.feeonlynetwork.com
5. **CFP Board** — verify any planner's CFP credential and disciplinary history. https://www.cfp.net/verify-a-cfp-professional

We will *not* link to: SmartAsset, NerdWallet Advisor Matcher, Zoe Financial, Wealthramp, Indyfin, or any other lead-gen marketplace.

## Page structure

### Hero
**H1:** How to find a fee-only fiduciary advisor

**Sub:** When you actually need a human, here's where to find one — without becoming a sales lead.

### Section 1 — When you might want one
A short list of complex situations where RetireMore's tools alone aren't enough and a human helps:
- Business sale or equity event
- Non-grantor trusts and complex estate plans
- Concentrated stock positions
- Cross-border tax (US + non-US residency)
- Divorce involving qualified plans, Social Security, and pension splits
- Special needs planning
- Significant inheritance with tax-loss harvesting opportunities

### Section 2 — Why "fee-only fiduciary" matters
Define the three terms (fee-only, fiduciary, fee-based vs fee-only) in plain English. Two paragraphs max. Cite the CFP Board on the fiduciary standard.

### Section 3 — Five directories to use (and one warning)
Bulleted list with the five directories above. One sentence per directory describing its niche (NAPFA = strictest, XYPN = monthly retainer, Garrett = hourly).

Then a callout box:

> **Not on this page:** SmartAsset, NerdWallet Advisor Matcher, Zoe Financial, Wealthramp, and similar services. Those services sell your contact info to RIAs at $50–$150 per lead. They are not directories — they are lead-gen marketplaces. RetireMore does not link to them and does not operate one.

### Section 4 — Questions to ask any advisor before hiring
A short bulleted checklist:
- Are you a fiduciary 100% of the time, in writing?
- How are you compensated? (Hourly, flat fee, AUM, retainer, commission?)
- What are your conflicts of interest?
- How will we work together — frequency, format, deliverables?
- What's your succession plan if you can't continue?
- Can I see a sample financial plan from a client like me?

### Section 5 — How RetireMore fits
Two-paragraph honest framing:

> RetireMore is a planning tool. It runs the math, models the scenarios, and gives you a Smart Action Plan. For most people, that's enough. For some situations, a fiduciary is the right call. Either way, we're not the one selling you anything except this software.
>
> If you do hire an advisor, bring our outputs to the meeting. Most advisors will be happy you came in with the work already done.

### Footer CTA
Soft, optional: "Try the planning tools first" → links to /demo. No urgency, no countdown.

## Schema

JSON-LD: `Article` + `FAQPage` (with the questions-to-ask checklist as FAQ entries).

## Where this links from

- Footer of every page (in "Resources")
- Smart Action Plan (Premium) — when an action is flagged as "complex; consider a fiduciary CFP," it links here
- Blog posts on complex topics (Roth + IRMAA stacking, business sale planning, expat tax, etc.)
- About page

## Where this does NOT link from

- The pricing page (irrelevant to the upgrade decision)
- Tool result screens (don't undermine the tool)
- Onboarding (premature)

## Build notes for engineering

This is a static marketing page in Retire-Portal at `apps/portal/app/find-a-fiduciary/page.tsx` (or `/page.mdx`). No auth required. Indexable. Add to sitemap. Add to robots.txt allow-list.

## Compliance

- No revenue from links — confirmed.
- No tracking of individual users to the directory clicks beyond aggregate PostHog `$click` events for measuring page effectiveness.
- No SEC solicitor disclosure required because no compensation is received.
- Disclaimer footer: *"This page lists external resources. RetireMore is not affiliated with NAPFA, XY Planning Network, Garrett Planning Network, Fee-Only Network, or the CFP Board, and receives no compensation for these links. This is informational, not personalized financial advice."*
