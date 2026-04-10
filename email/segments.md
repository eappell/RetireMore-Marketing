# Loops Segments

Segments are defined in Loops itself; this doc is the source of truth for *what segments exist and what they mean*. When you change a segment in Loops, update this doc.

## Lifecycle stage segments

| Segment | Definition |
|---|---|
| `new_signup_0_7d` | `signupDate` within last 7 days |
| `new_signup_8_30d` | `signupDate` 8–30 days ago |
| `activated` | `toolsCompleted` ≥ 1 |
| `power_free` | `tier = free` AND `toolsCompleted` ≥ 3 |
| `inactive_30d` | `lastActiveDate` > 30 days ago |
| `inactive_60d` | `lastActiveDate` > 60 days ago |
| `at_risk_paid` | `tier IN (paid, planner)` AND `lastActiveDate` > 21 days ago |

## Tier segments

| Segment | Definition |
|---|---|
| `free` | `tier = free` |
| `premium_monthly` | `tier = paid` AND `billingPeriod = monthly` |
| `premium_annual` | `tier = paid` AND `billingPeriod = annual` |
| `planner_monthly` | `tier = planner` AND `billingPeriod = monthly` |
| `planner_annual` | `tier = planner` AND `billingPeriod = annual` |

## Persona segments (inferred — set by app/script when known)

| Segment | Definition |
|---|---|
| `persona_pre_retiree` | `persona = pre-retiree` (Linda) |
| `persona_optimizer` | `persona = optimizer` (Mark) |
| `persona_expat` | `persona = expat` (Janet & David) |
| `persona_identity` | `persona = identity` (Robert) |
| `persona_organizer` | `persona = organizer` (Patricia) |

## Behavioral segments

| Segment | Definition |
|---|---|
| `opened_no_save` | Fired `Tool Opened` but never `Tool Data Saved` |
| `irmaa_risk_detected` | App-set: Tax Analyzer found a Roth conversion that would push into IRMAA |
| `near_first_anniversary` | Annual paid sub renewing in next 14 days |
| `cancelled_30d` | Cancelled paid subscription within last 30 days |
| `couples_planning` | `isCouple = true` |

## Use of segments by sequence

| Sequence | Segment(s) used |
|---|---|
| Onboarding | `new_signup_0_7d` |
| Tool nudge | `opened_no_save` |
| Re-engagement | `inactive_30d` |
| Milestone | (event-triggered, not segment) |
| Monthly digest | All active contacts NOT in `inactive_60d` |
| Subscription lifecycle (renewal) | `near_first_anniversary` |
| Subscription lifecycle (winback) | `cancelled_30d` |
| Couples expansion | `couples_planning` (Premium only — upsell to Planner) |
