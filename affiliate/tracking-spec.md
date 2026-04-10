# Affiliate Tracking Spec

How affiliate attribution will work. **Not yet implemented** — this is the spec the dev team will build against once we cross the first 100 paying users (per the deferred-scope decision in the project plan).

## Recommended platform: Rewardful

- Stripe-native (zero custom integration on the payment side)
- Tracks first-click and last-click attribution
- Handles partial commissions for refunds
- Provides affiliate dashboard out of the box

Pricing: starts at $49/mo. Worth it once we have ≥10 active affiliates.

## How it will work

1. Affiliate signs up at `retiremore.com/affiliates` (a Rewardful-hosted page).
2. Affiliate gets a unique tracking link: `retiremore.com/?via=<affiliate-id>`
3. Rewardful drops a 60-day attribution cookie.
4. When the user converts (Stripe `customer.subscription.created` webhook), Rewardful matches `customer.email` → cookie → affiliate.
5. Commission is recorded against the affiliate at the configured rate.
6. Payout monthly (PayPal, Wise, or ACH), 30-day clawback period for refunds.

## Commission structure

(See [AFFILIATE_PROGRAM.md](AFFILIATE_PROGRAM.md) for the full structure migrated from Retire-Portal docs. Summary:)

- **Standard tier:** $20 per Premium signup, $40 per Planner signup
- **Recurring:** 10% of monthly subscription for 12 months (lifetime cap)
- **Custom tier (high-value channels):** negotiated, up to $350 one-time per Planner annual

## Compliance

- **FTC disclosure required.** All affiliate-promoted content must say "I receive a commission if you sign up." Provide canned disclosure text in every creative kit.
- **No commissions to fee-only fiduciaries** in a way that creates conflict of interest. CFPs/RIAs use a *referral* relationship (no $ to advisor) or *educational license* — never per-signup.
- **No incentivized signups.** Affiliates can't pay end users to sign up (PayPal cashback, etc.).

## UTM mapping

Rewardful sets `?via=<id>` for tracking. We *also* want UTMs for our own analytics:

```
?via=<affiliate-id>&utm_source=affiliate&utm_medium=affiliate&utm_campaign=<channel-slug>
```

When generating creative kit links, populate both Rewardful's `via` and our UTMs.

## Reporting

Monthly affiliate scorecard pulls:
- New paid signups by affiliate
- Lifetime customer value (LTV) by affiliate cohort
- Refund rate by affiliate
- Top 10 affiliates by paid signups

Run: `npm run loops:list-contacts` (TODO — not yet built) + Rewardful API export → analytics-reporter agent → `analytics/reports/<date>-affiliates.md`.

## Open questions

- Should we offer an *exclusive content kit* for top affiliates (e.g., a custom video script we license for them)?
- Two-tier affiliate (sub-affiliate) — yes or no? Recommend NO for v1; the abuse vector is too easy.
- Affiliate code in the URL vs. the cookie — Rewardful handles cookie; we don't need user-facing codes.
