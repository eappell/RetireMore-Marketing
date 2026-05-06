# /affiliates Landing Page Spec

**Updated:** 2026-05-06
**Purpose:** Public landing page at retiremore.com/affiliates that recruits creators into the affiliate program. Replaces the "apply to learn the rate" pattern of Boldin and most comps.

## Page goals

1. Convert qualified creators to affiliate signup in one visit.
2. Make our rate visible (Boldin and Empower both hide theirs; that's the wedge).
3. Pre-qualify out coupon-site arbitrage and SEO scrapers.
4. Communicate brand-voice expectations early (no "guaranteed" claims, FTC disclosure required).

## Page structure

```
[ Hero ]
[ The rate, plain and big ]
[ Why creators promote RetireMore ]
[ Who this is for ]
[ Tier escalators ]
[ The fine print, openly ]
[ Apply (Rewardful-hosted form embed) ]
[ FAQ ]
[ Brand kit + creator resources ]
```

## Copy

### Hero

**Headline:** The most transparent affiliate program in retirement planning software.

**Subhead:** 30% recurring, for the lifetime of the customer. No 12-month cap, no asset gate, no "apply to learn the rate." Here it is.

**CTA:** Become an affiliate

### The rate, plain and big

**Headline:** What you earn

> **30% recurring commission** for as long as the customer pays.
>
> **Plus a $20 bonus** on your very first conversion.
>
> No cap on earnings. No clawback after 30 days. No fine-print "first 12 months only."

| Plan they buy | What you earn (annual) | Year 1 | Year 3 | Year 5 |
|---|---|---|---|---|
| Premium ($149/yr) | 30% × $149 = **$44.70/yr** | $44.70 | $134.10 | $223.50 |
| Planner ($229/yr) | 30% × $229 = **$68.70/yr** | $68.70 | $206.10 | $343.50 |

(Plus the $20 first-conversion bonus the first time anyone you refer subscribes.)

### Why creators promote RetireMore

Three reasons we hear back:

1. **It actually helps your audience.** RetireMore is 12 retirement planning tools (income, taxes, healthcare, Social Security, location, purpose, legacy) for $19/mo. Most of your audience is asking exactly these questions. Recommending a tool that solves them makes you look smart.

2. **No financial product sale at the end.** We don't sell insurance, AUM, or annuities. We never refer your audience to advisors who pay us per lead. You can recommend RetireMore without worrying about what we do to your audience after they sign up.

3. **The economics are sustainable for both of us.** 30% lifetime is more than ProjectionLab (20%, possibly capped) and well above what Boldin pays. We're betting that if creators earn enough to take the program seriously, the program grows.

### Who this is for

You're a fit if you create content for people 45 and older planning the next phase of life:

- Retirement, FIRE, financial independence, "what should I do with my 60s"
- Social Security and Medicare timing
- Tax-aware withdrawal strategies, Roth conversions, IRMAA
- Where to retire (US states or abroad)
- Healthcare costs and longevity planning
- Estate, legacy, gifting

YouTube, podcast, newsletter, blog, and TikTok creators are all welcome. We do not work with coupon sites, cashback aggregators, or paid-search bidders on our brand terms.

### Tier escalators

| Tier | Active referred subs | Recurring rate |
|---|---|---|
| Standard | 0 to 24 | 30% |
| Pro | 25 to 99 | 35% |
| Premier | 100+ | 40% |

Tier increases apply to your **whole book**, not just new conversions. Hit Pro and your existing recurring book bumps to 35% the next billing cycle. Tier downgrades only after 60 days below threshold (so a slow month doesn't whiplash your earnings).

### The fine print, openly

We believe affiliates deserve to know the rules before they apply.

- **Cookie window:** 90 days.
- **Attribution:** Last-paid-touch. If your referred user signs up free and upgrades 5 months later, you still get credit.
- **Refund clawback:** If a referred customer refunds within 30 days, the commission reverses. After 30 days it's banked.
- **Payout:** Net-30 monthly cycle, $50 minimum, paid via Wise (international) or PayPal (US).
- **No self-referrals.**
- **FTC disclosure required** in every post that links to us. We provide canned language.
- **No paid search on RetireMore brand terms.** Don't bid against us on Google for "RetireMore" or variants.
- **No coupon-site listings without approval.** We're happy to give you a custom code; we're not happy if your code lands on Honey or RetailMeNot.

### Apply

[Rewardful signup widget embedded here, OR link out to Rewardful-hosted signup at retiremore.getrewardful.com]

We review applications within 5 business days. Verified creators with 1k+ followers in the personal-finance niche get instant approval. New affiliates are reviewed manually.

### FAQ

**Do I need a minimum audience size?** No floor. Verified creators with 1k+ followers in the niche skip the manual review.

**Can I create multiple affiliate accounts?** No. One account per person, brand, or business entity.

**Can I run paid ads to promote RetireMore?** Yes for paid social and YouTube pre-roll. Not on Google search bidding on our brand terms.

**Can I offer a custom discount code?** Yes for affiliates above the Pro tier. Reach out to partners@retiremore.com.

**What support do you provide?** Brand kit (logos, screenshots, headline copy), monthly performance scorecard, quarterly co-marketing slot for top 5 partners by quarter, and direct access to the founder.

**Can fee-only CFPs/RIAs join?** Not as paid affiliates. Compensating an investment adviser per signup creates a fiduciary conflict (SEC Rule 206(4)-3). CFPs who want to recommend RetireMore to their clients use our free educational license: get in touch.

### Brand kit + creator resources

- [Logos and screenshots](/affiliates/brand-kit)
- [Talking points: what to say, what not to say](/affiliates/talking-points)
- [FTC disclosure template](/affiliates/ftc-disclosure)

---

## Implementation notes

- **Page lives at:** `apps/portal/app/affiliates/page.tsx`
- **Style:** Match `apps/portal/app/founding-advisors/page.tsx` for visual consistency. Reuse the gold accent (`#c8973a`) on the dark background (`#0d1b2a`) from `apps/portal/app/upgrade/page.tsx`.
- **Header:** Use the standard portal header (DashboardVariantTwo controls nav per memory; just render the standard layout).
- **Brand kit assets:** Serve from VPS static folder (no Vercel per project memory). Path: `apps/portal/public/affiliate-kit/` with logos, screenshots, video clips.
- **Rewardful embed:** `<script src="https://r.wdfl.co/rw.js"></script>` plus the signup widget (configurable in Rewardful dashboard). For privacy and tracking compliance, gate behind the existing cookie consent.
- **Internal nav:** Add link in portal footer plus advisor dashboard. Don't put it in the consumer dashboard top nav (clutters the planning experience).
- **SEO:** Index this page. Title: "RetireMore Affiliate Program | 30% Recurring, Lifetime". Meta description: matches the subhead.
- **Analytics events:** PostHog `affiliate_landing_view`, `affiliate_apply_clicked`, `affiliate_apply_submitted`.

## Decisions needed before ship

1. Do we publish a public leaderboard of top affiliates? (Recommend not yet; will feel sparse at launch.)
2. Do we add testimonials? (None yet; skip in v1.)
3. Confirm partners@retiremore.com email is set up and routed to the right person.
4. Confirm /r/{handle} custom landing page route is built before we ship the Pro-tier offer.
