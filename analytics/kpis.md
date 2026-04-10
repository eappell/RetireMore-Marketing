# KPIs — Canonical Definitions

If two reports disagree on a number, this file wins. Update here first, then update the reports.

## North-star metric

**Activated paid signups per week** = number of users who, in the past 7 days, both (a) created a Premium or Planner subscription and (b) saved at least one scenario in any tool prior to subscribing. Captures real product engagement, not curiosity buys.

## Acquisition

| Metric | Definition | Source |
|---|---|---|
| **New signups (any tier)** | Distinct users who fired `User Signed Up` in the period | PostHog |
| **New paid signups** | Distinct users who fired `Subscription Created` with `plan` ∈ {paid, planner} in the period | PostHog (mirror in Stripe) |
| **Free-to-paid conversion** | New paid signups ÷ new signups (rolling 30-day cohort) | Derived |
| **Cost per signup (paid)** | Paid ad spend ÷ signups attributed via UTM | Manual + paid platform |
| **Channel mix** | New signups by `utm_source` | PostHog |

## Activation

| Metric | Definition | Source |
|---|---|---|
| **First scenario in 7 days** | % of new signups who fire `Tool Data Saved` within 7 days of `User Signed Up` | PostHog funnel |
| **Onboarding completion** | % of new signups who fire `Onboarding Welcome Completed` | PostHog |
| **Tools touched** | Avg distinct `tool_id` values fired in `Tool Opened` per new signup in 7 days | PostHog |

## Engagement

| Metric | Definition | Source |
|---|---|---|
| **DAU / WAU / MAU** | Distinct users with any product event in the day / week / month | PostHog |
| **Stickiness** | DAU ÷ MAU | Derived |
| **AI Coach usage** | `AI Coach Question Asked` events per active user per week | PostHog |
| **Most-used tool** | `tool_id` with the most `Tool Opened` events in the period | PostHog |
| **Readiness Score completion** | % of paid users who have a non-null readiness score | App / Firestore |

## Revenue

| Metric | Definition | Source |
|---|---|---|
| **MRR** | Sum of monthly equivalents of all active subscriptions (annual / 12 + monthly) | Stripe |
| **ARR** | MRR × 12 | Derived |
| **New MRR** | MRR added by new subscriptions in the period | Stripe |
| **Churned MRR** | MRR lost to cancellations in the period | Stripe |
| **Net new MRR** | New MRR − Churned MRR | Derived |
| **Net revenue retention (NRR)** | (Starting MRR + expansion − contraction − churn) ÷ Starting MRR | Stripe |
| **ARPU** | MRR ÷ active paying customers | Derived |
| **Annual share** | % of active subs on annual billing | Stripe |

## Retention

| Metric | Definition | Source |
|---|---|---|
| **Monthly logo churn** | Cancellations ÷ active subs at start of month | Stripe |
| **D7 / D30 retention** | % of new signups with any product event 7 / 30 days after signup | PostHog cohort |
| **Cohort revenue retention** | Cohort MRR at month N ÷ cohort MRR at month 0 | Stripe |

## Email

| Metric | Definition | Source |
|---|---|---|
| **Open rate** | Opens ÷ delivered (per campaign / sequence step) | Loops |
| **CTR** | Clicks ÷ delivered | Loops |
| **CTOR** | Clicks ÷ opens | Loops |
| **Sequence completion** | % of contacts who reached the final email in a sequence | Loops |
| **Unsubscribe rate** | Unsubscribes ÷ delivered | Loops |

## Content / SEO

| Metric | Definition | Source |
|---|---|---|
| **Organic sessions** | PostHog `$pageview` events with `referrer` containing google.com (and similar) | PostHog |
| **Indexed pages** | Pages in Google's index for site:retiremore.com | GSC (manual) |
| **Average position** | (Manual; pull from GSC monthly) | GSC |
| **Blog → tool conversion** | % of blog readers who fire `Dashboard Tool Clicked` or `Tool Opened` in the same session | PostHog |

## What we explicitly do NOT measure (and why)

- **Total registered users** — vanity. Trial-quality matters more.
- **Page views per visit** — SEO holdover; we care about whether they used a tool.
- **Time on site** — noisy and incentive-misaligned. A user who finishes their plan in 8 minutes is better than one who lingers.
- **Email list size** — quality > quantity. Active engaged contacts > raw count.
