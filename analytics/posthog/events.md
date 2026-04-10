# PostHog Event Taxonomy

Mirror of [`../../../Retire-Portal/apps/portal/lib/analytics/events.ts`](../../../Retire-Portal/apps/portal/lib/analytics/events.ts). The TypeScript file is the source of truth — when it changes, update this doc.

Events follow the **"Noun Verbed"** convention (PostHog best practice).

## Auth

| Event | Properties |
|---|---|
| `User Signed In` | `method` (email \| google \| anonymous) |
| `User Signed Up` | `method` (email \| google) |
| `User Signed Out` | — |
| `Sign In Failed` | `method`, `error_code?` |
| `Guest Session Started` | — |
| `Password Reset Requested` | — |
| `Email Verification Sent` | — |

## Onboarding

| Event | Properties |
|---|---|
| `Onboarding Welcome Shown` | — |
| `Onboarding Welcome Completed` | — |
| `Onboarding Welcome Skipped` | — |
| `Onboarding Profile Saved` | `fields_completed[]`, `completeness_pct` |
| `Onboarding Checklist Dismissed` | `completed_steps`, `total_steps` |
| `Disclaimer Accepted` | — |

## Tool usage

| Event | Properties |
|---|---|
| `Tool Opened` | `tool_id`, `had_prior_data`, `user_tier` |
| `Tool Calculation Run` | `tool_id`, `run_count_session`, `result_has_gap?` |
| `Tool Data Saved` | `tool_id`, `time_to_save_ms?` |
| `Tool Data Cleared` | `tool_id` |
| `Tool PDF Exported` | `tool_id` |
| `Tool Upgrade Prompt Shown` | `tool_id`, `feature_blocked` |
| `Tool Scenario Created` | `tool_id` |
| `Tool Scenario Deleted` | `tool_id` |

## Dashboard

| Event | Properties |
|---|---|
| `Dashboard Tool Clicked` | `tool_id` |
| `Dashboard Report Generated` | — |
| `Dashboard Insights Viewed` | — |
| `Dashboard Insight Actioned` | `insight_id`, `insight_type`, `action` (open_tool \| dismiss \| learn_more) |

## AI Coach

| Event | Properties |
|---|---|
| `AI Coach Opened` | — |
| `AI Coach Question Asked` | `question_category?`, `session_question_count`, `user_tier` |
| `AI Coach Free Limit Hit` | — |
| `AI Coach Insight Shared` | — |

## Subscription

| Event | Properties |
|---|---|
| `Upgrade CTA Clicked` | `source`, `target_tier`, `current_tier` |
| `Subscription Plan Selected` | — |
| `Checkout Started` | — |
| `Subscription Created` | `plan`, `billing_period` (monthly \| annual) |
| `Subscription Cancelled` | — |

## Retirement Readiness Score (Phase 2)

| Event | Properties |
|---|---|
| `RRS Score Viewed` | `score`, `income_score`, `healthcare_score`, `tax_score`, `estate_score`, `lifestyle_score`, `cohort_percentile?` |
| `RRS Score Improved` | — |
| `RRS Dimension Drilled` | — |

## Common properties on every event (auto-set)

- `distinct_id` — user id (or anonymous id)
- `user_tier` — free / paid / planner / admin
- `$current_url`, `$referrer`, `$device_type` — PostHog defaults
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` — captured at first session
