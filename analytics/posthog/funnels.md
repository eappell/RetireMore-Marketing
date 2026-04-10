# PostHog Funnels

## Acquisition (the canonical one)

| Step | Event | Notes |
|---|---|---|
| 1 | `User Signed Up` | Anchor event |
| 2 | `Tool Opened` | Within 30-day window |
| 3 | `Tool Calculation Run` | Within 30-day window |
| 4 | `Tool Data Saved` | Activation event |
| 5 | `Subscription Created` | Conversion |

Window: 30 days
Pulled by: `npm run posthog:funnel`

## Onboarding completion

| Step | Event |
|---|---|
| 1 | `User Signed Up` |
| 2 | `Onboarding Welcome Shown` |
| 3 | `Onboarding Profile Saved` |
| 4 | `Onboarding Welcome Completed` |

Window: 24 hours

## Tool engagement (per tool)

| Step | Event |
|---|---|
| 1 | `Dashboard Tool Clicked` (with `tool_id` filter) |
| 2 | `Tool Opened` |
| 3 | `Tool Calculation Run` |
| 4 | `Tool Data Saved` |

Window: same session (no break)

## Upgrade-prompt → conversion

| Step | Event |
|---|---|
| 1 | `Tool Upgrade Prompt Shown` |
| 2 | `Upgrade CTA Clicked` |
| 3 | `Checkout Started` |
| 4 | `Subscription Created` |

Window: 14 days

Useful for: identifying which tools drive the most upgrade pressure (and which prompts aren't converting).

## AI Coach engagement

| Step | Event |
|---|---|
| 1 | `AI Coach Opened` |
| 2 | `AI Coach Question Asked` |
| 3 | `AI Coach Free Limit Hit` |
| 4 | `Subscription Created` |

Useful for: validating the AI Coach as an upgrade lever (since unlimited Coach is the headline Planner benefit).
