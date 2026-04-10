---
name: affiliate-pitch
description: Use this skill when the user wants a recruitment pitch and creative kit for an affiliate or channel partner. Outputs a channel profile, a 3-touch recruitment sequence, and a copy/asset kit.
---

# /affiliate-pitch

Recruit a channel partner into the RetireMore affiliate program.

## Inputs

A specific channel partner or category — e.g., "Hayes & Tanner expat YouTube channel," "fee-only CFP newsletters," "small estate attorney firms in Florida."

## Steps

1. **Read** [CLAUDE.md](../../../CLAUDE.md), [brand/voice.md](../../../brand/voice.md), [brand/value-props.md](../../../brand/value-props.md), [affiliate/AFFILIATE_PROGRAM.md](../../../affiliate/AFFILIATE_PROGRAM.md), [affiliate/tracking-spec.md](../../../affiliate/tracking-spec.md).

2. **Research the partner** with WebSearch — recent content, audience size estimate, monetization model, persona match, and any conflicts.

3. **Run via the `affiliate-recruiter` subagent.** Produce:

   **a. Channel profile** at `affiliate/channels/<channel-slug>.md`:
   - Type, audience size, persona match, why we're a fit, monetization, risks, recommended commission tier, owner contact

   **b. Recruitment sequence** at `affiliate/recruitment/<channel-slug>.md`:
   - Touch 1: Email (≤150 words, leads with mutual fit, discloses commission rate up front, single ask)
   - Touch 2: LinkedIn DM (≤500 chars)
   - Touch 3: Personal offer (custom commission or exclusive content collaboration)

   **c. Creative kit folder** at `affiliate/kits/<channel-slug>/`:
   - `README.md` — how to use the kit
   - `copy/` — channel-native post variants (X, LinkedIn, blog blurbs, video script intros)
   - `links.md` — UTM-tagged trackable links

4. **Compliance check.** If the channel is a fee-only CFP/RIA, do NOT use a per-signup commission — use a referral relationship or educational license instead. Flag this in the profile.

5. **Report back** with:
   - The three file paths
   - The recommended commission tier
   - The single most important fit reason

## Rules

- Lead with mutual fit, not flattery.
- Disclose the commission rate in the first email.
- Provide the creative kit — don't make the partner write the copy.
- FTC disclosure is mandatory; mention it in the recruitment email.
- No commissions to fee-only fiduciaries that would conflict with their fiduciary duty.
- Real contact info goes in the channel profile but the file is gitignored if it contains personal email addresses.
