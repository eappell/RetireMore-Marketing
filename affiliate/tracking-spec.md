# Affiliate Tracking Spec

How affiliate attribution works. Authoritative pricing and commission structure live in [AFFILIATE_PROGRAM.md](AFFILIATE_PROGRAM.md). Detailed platform comparison and implementation steps in [platform-eval.md](platform-eval.md).

## Platform: Rewardful

- Stripe-native (two-way sync, zero custom integration on the payment side)
- Tracks last-paid-touch attribution
- Handles partial commissions for refunds
- Provides affiliate dashboard out of the box

Pricing: $49/mo Starter (up to $7.5k tracked rev) → $99/mo Pro → $149/mo Scale.

## How it works

1. Affiliate signs up at `retiremore.com/affiliates` (Rewardful-hosted form embedded on our page).
2. Affiliate gets a unique tracking link: `retiremore.com/?via=<affiliate-id>`.
3. Rewardful drops a **90-day attribution cookie**.
4. When the user converts (Stripe `customer.subscription.created` webhook), Rewardful matches Stripe customer ID → cookie → affiliate.
5. Commission is recorded against the affiliate at the configured rate (30% recurring, with tier escalators).
6. Payout monthly (Wise primary, PayPal/ACH fallback), 30-day clawback period for refunds.

## Commission structure (summary)

Full detail in [AFFILIATE_PROGRAM.md](AFFILIATE_PROGRAM.md):

- **Consumer track (default):** 30% recurring for the lifetime of the subscription.
- **Tier escalators:** 30% (0 to 24 active subs) → 35% (25 to 99) → 40% (100+).
- **First-conversion bonus:** $20 one-time per affiliate, paid the first time their first ever referral converts.
- **Advisor track (separate):** $200 to $350 one-time bounty + 10% recurring lifetime, advisor-to-advisor only.
- **Custom B2B (HR/community):** Negotiated CPA; not run through Rewardful.

## Compliance

- **FTC disclosure required.** All affiliate-promoted content must say "I receive a commission if you sign up." Provide canned disclosure text in every creative kit.
- **No commissions to fee-only fiduciaries** in a way that creates conflict of interest. CFPs/RIAs use a *referral* relationship (no $ to advisor) or *educational license* — never per-signup.
- **No incentivized signups.** Affiliates can't pay end users to sign up (PayPal cashback, etc.).

## UTM mapping

Rewardful sets `?via=<id>` for affiliate attribution. We *also* want UTMs for our own analytics:

```
?via=<affiliate-id>&utm_source=affiliate&utm_medium=<channel-slug>&utm_campaign=<creator-handle>
```

When generating creative kit links, populate both Rewardful's `via` and our UTMs. Rewardful is the source of truth for commissions; PostHog UTMs are for content attribution and creator-level performance reporting.

## Reporting

Monthly affiliate scorecard pulls:
- New paid signups by affiliate
- Lifetime customer value (LTV) by affiliate cohort
- Refund rate by affiliate
- Top 10 affiliates by paid signups

Run: `npm run loops:list-contacts` (TODO — not yet built) + Rewardful API export → analytics-reporter agent → `analytics/reports/<date>-affiliates.md`.

## Out of scope — permanent brand policy

This program will **never** include:

- A paid advisor-matching service (the SmartAsset / NerdWallet Advisor Matcher / Zoe / Wealthramp model) — RetireMore does not sell user leads to RIAs at any price.
- Per-signup commissions paid *to* CFPs or RIAs for referring users to RetireMore in a way that would compromise the advisor's fiduciary duty. Segment #4 (CFPs/RIAs) in the affiliate program operates as a referral relationship or educational license — not a per-signup kickback.
- Sharing or selling user contact info to any financial services firm.

See the full policy in the appendix of [`AFFILIATE_PROGRAM.md`](AFFILIATE_PROGRAM.md) and trust pillar #3 in [`../CLAUDE.md`](../CLAUDE.md).

## Open questions

- Should we offer an *exclusive content kit* for top affiliates (e.g., a custom video script we license for them)?
- Two-tier affiliate (sub-affiliate) — yes or no? Recommend NO for v1; the abuse vector is too easy.
- Affiliate code in the URL vs. the cookie — Rewardful handles cookie; we don't need user-facing codes.
