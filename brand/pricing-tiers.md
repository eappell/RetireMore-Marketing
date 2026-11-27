# Pricing Tiers

Source of truth: [`../../Retire-Portal/apps/portal/lib/pricing.ts`](../../Retire-Portal/apps/portal/lib/pricing.ts). When that file changes, update this doc.

Decided November 2026 (Jira KAN-114). Goal: reach 100 paid subscribers. RetireMore is priced **below ReadyAimRetire** ($12.95/mo or $115/yr, financial planning only), even though it covers the whole retirement, because early subscriber volume matters more than revenue per user right now.

## At a glance

| Tier | Monthly | Annual | Effective monthly | Annual savings |
|---|---|---|---|---|
| **Free** | $0 | $0 | — | — |
| **Premium** | $9.95 | $89/yr | $7.42/mo | 25% off monthly |

- **7-day free trial** on Premium (card required, converts automatically, one trial per customer).
- **Price lock:** a subscriber's price never goes up for as long as they stay subscribed. If prices rise later, the rise applies to new subscribers only. This is also in the Terms of Service (section 6.3).
- **Planner tier is not sold.** Its headline features (Couples mode, "Future You", Risk detector, Scenario simulator) don't exist yet. Don't mention Planner in any copy. It comes back when those features ship.

Code-side tier strings: `'free' | 'paid' | 'planner' | 'admin' | null`. **Premium = `'paid'`**. `'planner'` stays valid in code (and gets Premium access) but isn't offered. **Never use `'pro'`.**

## Free

**Promise:** The most useful free retirement planning tool on the internet.

**Includes:**
- All 12 tools (no tool is tier-locked)
- Retirement Readiness Score
- AI Coach: 5 questions per day
- Dashboard and onboarding
- Email support

**Not included (Premium):**
- Smart Action Plan
- Monte Carlo and the other advanced analysis inside the tools
- PDF reports

**Best for:** first-time visitors, quick checks, sharing the platform with friends and family.

## Premium — $9.95/mo or $89/yr

**Promise:** Everything in Free, plus the action plan that tells you what to fix first and the deeper analysis behind it.

**Includes everything in Free, plus:**
- Unlimited AI Coach
- Smart Action Plan (prioritized, time-sequenced next steps from all your tools)
- Monte Carlo projections
- Roth conversion optimizer and the tax flow chart
- Advanced gifting strategies and the Estate Analysis Suite
- AI insights and PDF reports
- Premium support

**Best for:** people who've used the free tools and want the plan, the stress-test, and the reports.

**Stripe:** one product, "RetireMore Premium", with a monthly and an annual price. Price IDs are set in `STRIPE_PREMIUM_MONTHLY_PRICE_ID` and `STRIPE_PREMIUM_ANNUAL_PRICE_ID` in the portal env.

## Pricing voice rules

1. **Lead with annual pricing** when space allows: "$89/yr" with "about $7.42/mo" reads better than "$9.95/mo".
2. **Always show the monthly equivalent** next to the annual price ("$89/yr — about $7.42/mo").
3. **Never use scarcity or urgency.** No "limited time", no countdowns, no "first 100 only", no "X people just upgraded". The price lock is a promise, not a deadline: "Your price never goes up while you stay subscribed."
4. **Comparisons:** "Less than ReadyAimRetire, and it covers far more than the money" is fine when comparing. Don't disparage competitors.
5. **Never say "Pro"**, and don't mention Planner until it's relaunched.
6. **The free tier is real.** Don't call Free a "trial" or "starter". The 7-day trial is a Premium trial; Free never expires.

## FAQ snippets to reuse

- *"How much is Premium?"* — $89 a year (about $7.42 a month), or $9.95 month to month. Try it free for 7 days.
- *"Will my price go up?"* — No. Your price never goes up for as long as you stay subscribed.
- *"Is there a free trial?"* — Premium starts with a 7-day free trial. Cancel before it ends and you won't be charged. The Free plan needs no card and never expires.
- *"Can I cancel anytime?"* — Yes. One click in your account. Your data stays; you just drop back to the Free tier.
- *"Do you sell my data?"* — No. We don't sell, share, or rent user data. We don't run an ad network. Our only revenue is subscriptions.
- *"Is RetireMore a financial advisor?"* — No. We are a planning tool. We do not give personalized financial advice and we don't sell financial products.

## Refunds

30-day refund window on the first paid month/year, no questions. Configure via Stripe customer portal.
