# PostHog Dashboards

These are dashboard *specs*, not dashboards themselves. To create them, log into PostHog and add tiles based on the descriptions below.

## Dashboard 1 — Marketing Weekly

**Audience:** founder, marketing
**Refresh:** automatic, daily

**Tiles:**
1. New signups (line, last 30 days, breakdown by `utm_source`)
2. Free → Paid conversion rate (number, rolling 30-day cohort)
3. Acquisition funnel (funnel insight, last 30 days)
4. Top tools by `Tool Opened` (bar chart, last 7 days)
5. New MRR by week (bar chart from Stripe data — manual entry or webhook event)
6. Onboarding completion (funnel)

## Dashboard 2 — Activation Drilldown

**Audience:** product, marketing
**Refresh:** weekly

**Tiles:**
1. % of new signups completing first scenario in 7 days (number)
2. Tools touched per new signup (histogram)
3. Tool-engagement funnel per tool (small multiples — one funnel per tool_id)
4. Upgrade prompt → conversion funnel
5. AI Coach question volume (line, by tier)
6. Free Limit Hit → Subscription Created funnel

## Dashboard 3 — Content Performance

**Audience:** content / SEO
**Refresh:** weekly

**Tiles:**
1. `$pageview` events on `/blog/*` paths (line, by URL)
2. Blog → tool click rate (% of blog readers who fire `Dashboard Tool Clicked` in same session)
3. Top referring domains for blog reads
4. Search traffic share (sessions where referrer contains google.com)
5. Avg session depth on blog vs landing
6. UTM-tagged blog signups (table grouped by `utm_campaign`)

## Dashboard 4 — Email Performance

**Audience:** lifecycle email
**Refresh:** weekly

**Tiles:** (these come from Loops, not PostHog — use Loops dashboards directly, or pipe Loops events to PostHog)
1. Sequence completion rate (per sequence)
2. Open rate by sequence
3. CTR by sequence
4. Unsubscribe rate (line, last 90 days)
5. Email → product action funnel (Loops click → PostHog product event)
