---
name: new-email-sequence
description: Use this skill when the user wants to design a new Loops email sequence (onboarding, drip, re-engagement, milestone, etc.). Outputs a full sequence spec with trigger, segments, emails, and A/B test plan.
---

# /new-email-sequence

Design a complete Loops sequence end-to-end.

## Inputs

A sequence name or purpose — e.g., "abandoned-onboarding," "post-first-scenario nurture," "irmaa-cliff-detected-warning," "expat-curious 5-day mini-course."

## Steps

1. **Read** [CLAUDE.md](../../../CLAUDE.md), [brand/voice.md](../../../brand/voice.md), [brand/audience-personas.md](../../../brand/audience-personas.md), [email/LOOPS_EMAIL_SETUP.md](../../../email/LOOPS_EMAIL_SETUP.md), [analytics/posthog/events.md](../../../analytics/posthog/events.md).

2. **Decide via the `email-marketer` subagent:**
   - Trigger (event from `events.md`, segment, or signup)
   - Audience persona
   - Single primary goal (one conversion outcome — e.g., "first scenario saved within 7 days")
   - Exit conditions
   - Cadence (Day 0, Day 2, Day 5, Day 9, Day 14)
   - 4–6 emails (most sequences are this length)
   - A/B test plan (subject line variant, send-time variant, CTA variant)

3. **Write the spec** to `email/sequences/<sequence-name>.md` using the template in [.claude/agents/email-marketer.md](../../agents/email-marketer.md).

4. **Draft each email** in plain text (not HTML). One CTA per email. First line is the hook, not a greeting. UTM each link with the canonical scheme from [paid/utm-scheme.md](../../../paid/utm-scheme.md).

5. **Add the disclaimer footer** to any email that names dollar amounts, ages, or specific strategies.

6. **Report back** with:
   - The sequence file path
   - Trigger and goal in one sentence
   - The proposed A/B test
   - A reminder that the sequence is **draft only** — pushing to Loops requires `npm run loops:send-campaign` and explicit user confirmation.

## Rules

- One CTA per email.
- Honor unsubscribes.
- No false urgency, no fake scarcity.
- Behavior triggers > time-based triggers when both are available.
- The sequence file in this repo is the source of truth. Loops mirrors it, not the other way around.
