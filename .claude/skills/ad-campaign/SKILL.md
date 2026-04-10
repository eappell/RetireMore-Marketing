---
name: ad-campaign
description: Use this skill when the user wants to spin up a new Google Ads or Meta Ads campaign — generates audience definition, copy variants (≥10 headlines, ≥4 descriptions for Google), landing page brief, and UTM string.
---

# /ad-campaign

Produce a complete paid campaign spec, ready for the user to set up in Google Ads or Meta Ads Manager.

## Inputs

A campaign objective — e.g., "expat retirement awareness," "social security claiming search," "couples planning conversion."

## Steps

1. **Clarify with the user** if needed:
   - Channel: Google or Meta (or both)
   - Goal: signup / upgrade / demo
   - Persona (if not obvious from the brief)
   - Budget (helps decide if this is a single-campaign or multi-ad-set spec)

2. **Read** [CLAUDE.md](../../../CLAUDE.md), [brand/voice.md](../../../brand/voice.md), [brand/value-props.md](../../../brand/value-props.md), [brand/audience-personas.md](../../../brand/audience-personas.md), [paid/utm-scheme.md](../../../paid/utm-scheme.md), [paid/audiences.md](../../../paid/audiences.md).

3. **Run via the `paid-copywriter` subagent.** For Google Ads, output:
   - 15 headline variants (≤30 chars each)
   - 4 description variants (≤90 chars each)
   - Initial keyword set (exact, phrase, broad)
   - Negative keyword starter list
   - Sitelink, callout, and structured snippet extensions
   - Landing page recommendation with UTM
   - Bid strategy recommendation

4. **For Meta**, output:
   - Audience definition (age, locations, interests, behaviors, custom audiences, lookalikes)
   - 4–6 primary text variants
   - 4–6 headlines
   - 2–3 descriptions
   - 3–5 creative direction concepts (image/video, framing, on-screen text)
   - Placement recommendation
   - Landing page recommendation with UTM

5. **Generate the UTM string** following [paid/utm-scheme.md](../../../paid/utm-scheme.md):
   `?utm_source=<google|meta>&utm_medium=cpc&utm_campaign=<slug>&utm_content={creative}&utm_term={keyword}` (use templated parameters where the platform supports them).

6. **Write the campaign file** to `paid/google-ads/<slug>.md` or `paid/meta-ads/<slug>.md` using the templates in [.claude/agents/paid-copywriter.md](../../agents/paid-copywriter.md).

7. **If a new landing page is needed,** also write a copy block to `paid/landing-variants/<slug>.md` describing each section (hero, sub-hero, three-pillar, social proof, FAQ, footer CTA).

8. **Report back** with:
   - File paths
   - The single best headline (your pick) for the user to feature
   - The recommended landing page URL with UTM string

## Rules

- No exclamation points in any ad copy.
- No "guaranteed," no "secret," no "shocking," no fake urgency.
- One persona per campaign.
- One landing page per campaign.
- All links UTM-tagged per the canonical scheme.
- Compliance: no claims of endorsement, no specific securities recommendations.
