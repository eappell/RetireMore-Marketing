---
name: weekly-report
description: Use this skill when the user wants the weekly metrics report. Runs the PostHog and Stripe scripts, parses the raw JSON, and writes a one-page narrative report to analytics/reports/.
---

# /weekly-report

Generate the weekly metrics report.

## Inputs

None (or optionally a date range — defaults to "last 7 days").

## Steps

1. **Verify env is set.** Check `.env` exists with `POSTHOG_API_KEY`, `POSTHOG_PROJECT_ID`, `STRIPE_SECRET_KEY`. If missing, tell the user which keys to add and stop.

2. **Run the data pulls** in parallel:
   - `npm run posthog:weekly` → writes `data/reports/posthog-<date>.json`
   - `npm run posthog:funnel` → writes `data/reports/funnel-<date>.json`
   - `npm run stripe:revenue` → writes `data/reports/stripe-<date>.json`

3. **Read the JSON outputs.** If any script failed, surface the error and stop — don't make up numbers.

4. **Run via the `analytics-reporter` subagent.** Write the report to `analytics/reports/<YYYY-MM-DD>-weekly.md` using the template in [.claude/agents/analytics-reporter.md](../../agents/analytics-reporter.md).

5. **Report back** with:
   - The headline number
   - The single biggest week-over-week change
   - The recommended next move
   - The file path

## Rules

- Never invent numbers. If a script fails, say so.
- Always compare to the previous period.
- One headline number, one recommendation, one paragraph each section.
- Markdown only — no images.
