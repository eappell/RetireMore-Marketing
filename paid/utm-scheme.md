# UTM Scheme

The single canonical UTM convention for RetireMore. Every link from any marketing channel — paid, email, social, outreach, affiliate — uses this scheme. PostHog parses these into properties; analytics relies on them being consistent.

## Format

```
?utm_source=<source>&utm_medium=<medium>&utm_campaign=<campaign>&utm_content=<creative>&utm_term=<keyword>
```

## Parameter rules

| Param | Required | Use | Example |
|---|---|---|---|
| `utm_source` | yes | Where the click originated | `google`, `meta`, `linkedin`, `x`, `youtube`, `tiktok`, `reddit`, `loops`, `resend`, `affiliate`, `partner` |
| `utm_medium` | yes | Type of traffic | `cpc`, `display`, `email`, `social`, `referral`, `affiliate`, `organic` |
| `utm_campaign` | yes | Slug-cased campaign name | `expat-awareness-2026q2`, `ss-claiming-search`, `onboarding-day0` |
| `utm_content` | optional | Specific creative or version | `headline-a`, `image-1`, `email-3`, `video-30s` |
| `utm_term` | optional | Keyword or audience segment | for paid search: `{keyword}` template; for social: `pre-retiree` |

## Examples

**Google Search ad:**
```
https://retiremore.com/upgrade?utm_source=google&utm_medium=cpc&utm_campaign=ss-claiming-search&utm_content=rsa-a&utm_term={keyword}
```

**Meta lead campaign:**
```
https://retiremore.com/?utm_source=meta&utm_medium=cpc&utm_campaign=expat-awareness-2026q2&utm_content=video-30s-a&utm_term=expat-curious
```

**Loops onboarding email:**
```
https://retiremore.com/dashboard?utm_source=loops&utm_medium=email&utm_campaign=onboarding-day3&utm_content=tool-cta
```

**LinkedIn organic post:**
```
https://retiremore.com/blog/social-security-spousal-benefits?utm_source=linkedin&utm_medium=social&utm_campaign=ss-spousal-launch&utm_content=post-1
```

**Affiliate (single creator):**
```
https://retiremore.com/?utm_source=affiliate&utm_medium=affiliate&utm_campaign=hayes-tanner&utm_content=youtube-description
```

## Conventions

- **Lowercase only.** No camelCase, no spaces, no special chars except hyphens.
- **Slug-cased campaigns.** `ss-claiming-search`, not `SS_Claiming_Search`.
- **Version creatives.** `headline-a` / `headline-b` for A/B; `email-3` for the 3rd email in a sequence.
- **Don't reuse campaign names** across channels — prefix with the channel if necessary (`google-ss-claiming` vs `meta-ss-claiming`) when the same campaign runs in two places.
- **One source = one channel.** Don't put `email` in `utm_source` — that's `utm_medium`. Source is the *sender* (loops, resend), medium is the *channel type*.

## Builder snippet

When in doubt, use this builder:

```js
function utm({ source, medium, campaign, content, term }) {
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
    ...(content && { utm_content: content }),
    ...(term && { utm_term: term }),
  });
  return params.toString();
}
```

## What PostHog does with these

PostHog auto-captures all five UTM params on first session and stores them as person properties (`initial_utm_source`, etc.). Subsequent sessions overwrite the session-level UTM but the *initial* attribution sticks to the user. This is what we use for "channel mix of new signups" reporting.
