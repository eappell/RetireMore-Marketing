---
name: social-week
description: Use this skill when the user wants a week (or month) of social media posts drafted across selected channels — X, LinkedIn, YouTube, TikTok, Reddit. Outputs channel-native posts plus a calendar update.
---

# /social-week

Draft a week's worth of channel-native social posts based on a theme.

## Inputs

- Theme (e.g., "Social Security claiming," "Retiring abroad: Portugal," "Roth conversion gap years")
- Channels (subset of: x, linkedin, youtube, tiktok, reddit) — default to all five if not specified
- Source content (optional — e.g., "based on the new SS claiming blog post we just published")

## Steps

1. **Read** [CLAUDE.md](../../../CLAUDE.md), [brand/voice.md](../../../brand/voice.md) (especially the "Tone by channel" table), [brand/audience-personas.md](../../../brand/audience-personas.md), [social/content-calendar.md](../../../social/content-calendar.md).

2. **If a source post is named,** read it from `content/blog/drafts/` or `content/blog/published/` and extract the 3–5 best stand-alone insights (specific numbers, contrasts, surprising facts).

3. **Run via the `social-media-manager` subagent.** For each requested channel, draft posts for the week:
   - **X:** 3–5 single posts + 1 thread (5–8 tweets)
   - **LinkedIn:** 2–3 posts (≤300 words each), optionally 1 long-form article
   - **YouTube:** 1 short script (<60s) and/or 1 long-form script (5–15 min)
   - **TikTok:** 2–3 short scripts with hooks and captions
   - **Reddit:** 1 value-only contribution (no link unless rules allow), with the subreddit name and rules check

4. **Save each post to its channel folder** using the templates in [.claude/agents/social-media-manager.md](../../agents/social-media-manager.md):
   - `social/x/<YYYY-MM-DD>-<slug>.md`
   - `social/linkedin/<YYYY-MM-DD>-<slug>.md`
   - `social/youtube/<YYYY-MM-DD>-<slug>.md`
   - `social/tiktok/<YYYY-MM-DD>-<slug>.md`
   - `social/reddit/<YYYY-MM-DD>-<slug>.md`

5. **Update the content calendar** at [social/content-calendar.md](../../../social/content-calendar.md) with the new entries for the week.

6. **Report back** with:
   - A week-grid summary (channel × day → post slug)
   - The single best post (your pick) the user should ship first
   - A reminder that posting is **manual** in v1 — these are drafts.

## Rules

- One specific number per post.
- Channel-native voice (X is punchy, LinkedIn is professional, TikTok is fast).
- No clickbait, no emojis in long-form.
- Reddit is value-only — no link drops in subreddits with self-promo rules.
- Repurpose, don't duplicate. Same insight, channel-native form.
