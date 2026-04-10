---
name: outreach-list
description: Use this skill when the user wants to build a targeted cold outreach list and the personalized templates to send to it (advisors, podcasts, partners, journalists). Outputs a contact research plan plus a 3-touch sequence.
---

# /outreach-list

Plan and write a cold outreach campaign for a specific segment.

## Inputs

A segment — e.g., "fee-only CFPs in Texas," "personal finance podcasts with >10K downloads," "expat YouTubers covering Portugal," "estate attorneys in Florida small firms."

## Steps

1. **Read** [CLAUDE.md](../../../CLAUDE.md), [brand/voice.md](../../../brand/voice.md), [brand/audience-personas.md](../../../brand/audience-personas.md), [docs/strategy/CUSTOMER_ACQUISITION.md](../../../docs/strategy/CUSTOMER_ACQUISITION.md).

2. **Decide via the `outreach-specialist` subagent:**
   - Which segment folder this lives in (`outreach/advisors/`, `outreach/podcasts/`, `outreach/partnerships/`)
   - The single goal of the campaign
   - The persona of the recipient
   - Where to source the list (NAPFA, Apollo, manual research, podcast directories)
   - The personalization fields you'll need per contact

3. **Write a 3-touch sequence** (Day 0 email → Day 5 follow-up email → Day 12 LinkedIn DM) using the template in [.claude/agents/outreach-specialist.md](../../agents/outreach-specialist.md). Each touch must:
   - Be ≤120 words for email, ≤500 chars for DM
   - Open with a *specific* relevance hook (not "I hope this email finds you well")
   - Have one clear ask
   - Include CAN-SPAM compliant unsubscribe info on email

4. **Write the campaign spec** to `outreach/<segment>/<campaign-slug>.md`.

5. **(Optional) Suggest a contact list structure** as `outreach/contact-lists/<segment>-template.csv` — header row only, no real contacts. Real contact lists go in `outreach/contact-lists/` and are gitignored.

6. **Report back** with:
   - File path
   - The recipient persona in one sentence
   - The single ask
   - The source you recommend for building the actual list

## Rules

- Personalization > volume. Always.
- Lead with relevance, not flattery.
- One ask per email, stated honestly.
- No "[first_name]" without real personalization in the rest of the email.
- CAN-SPAM compliant.
- LinkedIn ToS-compliant — no automation.
- Real contact lists are gitignored. Never commit personal data.
