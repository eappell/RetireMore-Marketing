# Pricing Tiers

Source of truth: [`../../Retire-Portal/apps/portal/app/upgrade/page.tsx`](../../Retire-Portal/apps/portal/app/upgrade/page.tsx). When that file changes, update this doc.

## At a glance

| Tier | Monthly | Annual | Effective monthly | Annual savings |
|---|---|---|---|---|
| **Free** | $0 | $0 | — | — |
| **Premium** | $19 | $149/yr | $12.42/mo | ~35% off monthly |
| **Planner** | $29 | $229/yr | $19.08/mo | ~34% off monthly |

Code-side tier strings: `'free' | 'paid' | 'planner' | 'admin' | null`. **Premium = `'paid'`**. **Never use `'pro'`** — it is not a valid tier (planner replaced the old "pro" naming).

## Free

**Promise:** The most useful free retirement planning tool on the internet.

**Includes:**
- All 12 tools (no tools are tier-locked)
- 3 saved scenarios per tool
- AI Coach: 5 questions per day
- Standard onboarding and dashboard
- Email support

**Excludes:**
- Unlimited scenarios
- PDF export of any tool
- Retirement Readiness Score
- Smart Action Plan
- Cross-tool insights
- Couples planning mode
- "Future You" simulation

**Best for:** First-time visitors, quick scenario checks, sharing the platform with friends and family.

## Premium — $19/mo or $149/yr

**Promise:** Everything in Free, plus the readiness score and the action plan that tells you what to fix first.

**Includes everything in Free, plus:**
- Unlimited saved scenarios across all 12 tools
- PDF report export from every tool
- AI Coach: 10 queries per month
- Retirement Readiness Score (with cohort percentile)
- Smart Action Plan (prioritized list of next steps)
- Premium support

**Best for:** People who have completed the free pass and want the readiness score, the action plan, and the ability to save real scenarios.

**Stripe price IDs:** Configured via `STRIPE_PREMIUM_MONTHLY_PRICE_ID` and `STRIPE_PREMIUM_ANNUAL_PRICE_ID` in the portal env.

## Planner — $29/mo or $229/yr

**Promise:** Plan as a household, simulate every what-if, and get the AI coaching to think through trade-offs.

**Includes everything in Premium, plus:**
- AI Coach: unlimited queries
- Cross-tool insights — the platform notices when one tool's output affects another (e.g., a Roth conversion that pushes you into an IRMAA bracket)
- Scenario simulator — test what-ifs across the entire platform
- Risk detector — automated planning gap detection
- Couples planning mode — model two people as one household
- "Future You" simulation — see your own life 10/20/30 years out

**Best for:** Couples planning together; people running active what-if analyses; users who treat retirement planning as an ongoing process, not a one-time task.

**Stripe price IDs:** Configured via `STRIPE_PLANNER_MONTHLY_PRICE_ID` and `STRIPE_PLANNER_ANNUAL_PRICE_ID` in the portal env.

## Pricing voice rules

1. **Lead with annual pricing** when space allows — it's the better headline ($12/mo equivalent for Premium reads better than $19/mo).
2. **Never use scarcity or urgency.** No "limited time," no countdowns, no "X people just upgraded."
3. **Always show the monthly equivalent** alongside the annual price ("$149/yr — that's $12/mo").
4. **Never say "Pro."** The upper tier is "Planner."
5. **The free tier is real.** Don't position Free as a "trial" or "starter" — it's permanent and useful.

## FAQ snippets to reuse

- *"What's the difference between Premium and Planner?"* — Premium gives you all 12 tools, unlimited scenarios, PDF reports, and 10 AI Coach queries per month. Planner adds unlimited AI Coach, cross-tool insights, scenario simulator, and couples planning mode.
- *"Can I cancel anytime?"* — Yes. One click in your account. Your data stays — you just drop back to the Free tier.
- *"Do you sell my data?"* — No. We don't sell, share, or rent user data. We don't run an ad network. Our only revenue is subscriptions.
- *"Is RetireMore a financial advisor?"* — No. We are a planning tool. We do not give personalized financial advice and we don't sell financial products.

## Refunds

30-day refund window on the first paid month/year, no questions. Configure via Stripe customer portal.
