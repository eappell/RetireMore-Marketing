# Affiliate Platform Evaluation: Rewardful vs FirstPromoter

**Updated:** 2026-05-06
**Recommendation:** **Rewardful** for v1. Switch to FirstPromoter only if we hit a feature wall (custom commission events beyond what Rewardful supports). Migration cost between them is low, so picking the simpler tool first is correct.

## Side-by-side

| Feature | Rewardful | FirstPromoter |
|---|---|---|
| **Stripe integration** | Two-way sync | Unidirectional |
| **Other processors** | Stripe, Paddle | Stripe, Paddle, Chargebee, Braintree, Recurly + ThriveCart, Kajabi, etc. |
| **Recurring commissions** | Yes, native lifetime | Yes, configurable |
| **Tier escalators (30%/35%/40%)** | Manual via tier groups | Native, more flexible |
| **First-conversion bonus** | Manual via campaign codes | Native bonus events |
| **Custom landing pages per affiliate** | Built-in templates | Built-in templates |
| **Cookie window** | Configurable | Configurable |
| **Last-paid-touch attribution** | Yes | Yes |
| **Refund clawback** | Native (auto from Stripe sync) | Configurable |
| **Affiliate dashboard** | Clean, simple | More data-dense |
| **API for our own scripts** | Yes | Yes (more endpoints) |
| **Pricing — Starter** | $49/mo (up to $7.5k tracked rev) | $49/mo (up to $1.5k tracked rev) |
| **Pricing — Pro** | $99/mo (up to $15k) | $99/mo (up to $5k) |
| **Pricing — Scale** | $149/mo (up to $40k) | $149/mo (up to $20k) |
| **Used by** | Generic SaaS | ProjectionLab (our direct comp) |
| **Setup time** | < 1 day for Stripe-only | 1 to 3 days |

## Why Rewardful wins for v1

1. **Two-way Stripe sync.** Our finance side is Stripe-only. Rewardful's two-way sync means commission totals always match Stripe revenue exports. Less reconciliation work, lower drift risk on partial refunds and prorations.
2. **Cheaper at our volume.** Rewardful's revenue tiers are higher per dollar; the $49/mo Starter covers $7.5k tracked rev vs FirstPromoter's $1.5k. We'd outgrow FirstPromoter Starter immediately.
3. **Faster to launch.** "I want a Stripe-native affiliate program" is exactly what Rewardful was built for. FirstPromoter is more flexible in ways we don't currently need.

## Why FirstPromoter is the long-term option

1. ProjectionLab uses it. If we eventually want feature parity with the category leader, this is the path.
2. More flexible bonus events (e.g., "pay $50 if affiliate brings 5 conversions in a month" is one-click).
3. More billing-platform flexibility if we ever add Paddle, Chargebee, etc.

## Implementation steps (Rewardful, Stripe-only)

### Phase 1: Setup (Day 1)

1. Create Rewardful account at rewardful.com.
2. Connect Stripe account via OAuth (Settings → Integrations → Stripe).
3. Authorize Rewardful to read subscription events.
4. Configure default commission: 30% recurring, lifetime.
5. Configure 30-day refund clawback window.
6. Configure 90-day attribution cookie.
7. Set tier escalators: Pro at 25 active subs (35%), Premier at 100 active subs (40%).

### Phase 2: Wiring (Day 2 to 3)

1. Add Rewardful tracking script to portal layout (`apps/portal/app/layout.tsx`):
   ```tsx
   <Script
     src="https://r.wdfl.co/rw.js"
     data-rewardful={process.env.NEXT_PUBLIC_REWARDFUL_API_KEY}
     strategy="afterInteractive"
   />
   ```
2. In Stripe checkout creation (`apps/portal/app/api/stripe/checkout/route.ts`), pass the Rewardful referral ID:
   ```ts
   const referralId = req.body.rewardfulReferralId; // sent from browser
   await stripe.checkout.sessions.create({
     // existing config
     client_reference_id: referralId,
   });
   ```
3. On the client (checkout component), read `window.Rewardful?.referral` and include it in the checkout request body.
4. Test end-to-end: create test affiliate → click their link → sign up → upgrade → verify commission appears in Rewardful dashboard.

### Phase 3: Public landing page (Day 4 to 5)

1. Build /affiliates page (copy in [landing-page.md](landing-page.md)).
2. Embed Rewardful's signup widget OR link to Rewardful-hosted signup at `retiremore.getrewardful.com`.
3. Add affiliate FAQ + rate card.
4. Add legal: affiliate agreement, FTC disclosure template (link from `/affiliates/terms`).

### Phase 4: First payouts (Month 2)

1. Configure payout method: Wise (international support) primary, PayPal fallback for US-only partners.
2. Set $50 minimum threshold.
3. Test payout to a personal Wise account before paying real partners.

### Phase 5: Operational cadence

- **Weekly:** review new affiliate signups, approve or decline.
- **Monthly:** pay out, send affiliate scorecard via Loops, review top and bottom performers.
- **Quarterly:** review tier thresholds, commission structure, top-creator co-marketing slots.

## When to migrate to FirstPromoter

Migrate when any of:
- Need bonus events Rewardful can't model (e.g., "pay $X for retention milestone at month 12").
- Want to attribute multiple commission types per conversion (e.g., partner gets recurring AND a bonus to a sub-affiliate).
- Tier escalator logic outgrows Rewardful's tier groups.

Migration is straightforward: existing affiliates keep their links via a URL forwarder, data exports cleanly, Stripe attribution survives because the tracking is server-side via subscription events.

## Out of scope

- **Impact, CJ Affiliate, ShareASale:** enterprise networks, $500 to $2k/mo plus integration tax. Not appropriate for a $50/mo budget at our scale.
- **PartnerStack:** SaaS-friendly but priced for $500+/mo and aimed at multi-tier reseller programs we don't run.
- **Tolt, Affonso, refgrow:** viable but smaller and younger. Comparable feature set to Rewardful at similar pricing. Worth a look only if Rewardful pricing changes.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Rewardful sync drift on prorated upgrades | Monthly reconciliation script: pull Stripe MRR, pull Rewardful commissioned MRR, alert if delta > 1%. |
| Affiliate tracking script blocked by ad-blockers | Server-side fallback via `client_reference_id` in Stripe checkout (already wired). |
| API key leaks via NEXT_PUBLIC_ envvar | The Rewardful public key IS public-safe by design. Keep the secret API key server-only. |
| Payout to wrong affiliate due to email collision | Rewardful matches by Stripe customer ID, not email. Email is for display only. Verified at first integration test. |
