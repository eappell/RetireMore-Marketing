# Creator Outreach — The Actual Process

**Updated:** 2026-05-06
**For:** Eddie. The day-to-day mechanics of recruiting the first 20 creators in [launch-creators.md](launch-creators.md).
**Companion to:** [launch-creators.md](launch-creators.md) (templates and target list).

This doc covers what the templates don't: how to find emails, sequence the work across weeks, track replies, and what to do when someone says yes.

---

## Reality check before you start

You have **zero paying users** as of 2026-05-06. That matters for outreach in two ways:

1. **Don't lie about traction.** If a creator asks how many paying users you have, say zero or pre-launch. They'll respect honesty more than puffery, and they'll find out anyway.
2. **The pitch leans on the rate, not the social proof.** "30% recurring lifetime, transparent rate card" is the wedge. "10,000 happy customers" is not yet available.

This isn't a weakness for outreach. Rob Berger and WCI both built their audiences by trying new things first. Your pitch is "this is what you said the category should pay; we're paying it."

---

## Pre-flight checklist (before sending Touch 1)

Do these once, not per creator:

- [ ] `partners@retiremore.com` is set up and you can read it
- [ ] `/affiliates` page is deployed and reachable at retiremore.com/affiliates
- [ ] The application form on `/affiliates` posts successfully (test it yourself once)
- [ ] You have a free Planner code ready to send (admin-tier upgrade or a Stripe trial-extension promo code)
- [ ] You have a creative kit assembled (see "What you send when they say yes" below)
- [ ] Your email signature has your name, title, and the retiremore.com link
- [ ] Your sending email passes SPF/DKIM/DMARC (check at mail-tester.com; aim for 10/10)

If any of these are missing, fix them before sending. A reply with a broken application form turns interested creators into lost ones.

---

## Finding contact info (the part the template doesn't solve)

The template assumes you have an email. Most creators have *some* contact path; finding it takes 10 to 30 minutes per Tier 1 creator. Common patterns by platform:

### YouTube creators

- **About page → "View email address."** Sometimes hidden behind a CAPTCHA. About 60% of monetized channels expose it.
- **Description / pinned comment** of recent videos: many creators include "business inquiries: …"
- **Personal site linked from About:** the email is usually there. Look for /contact, /work-with-me, /sponsor.
- **Manager / agency:** large channels (>500k) often route through a talent agency. Look for "Represented by [agency]" in the bio. Email the agency, not the creator.

### Podcast hosts

- **Show website → Contact.** Almost every podcast has one.
- **Substack:** if they cross-post, the Substack profile has a personal email visible after subscribing (free tier).
- **Sponsor pitch path:** podcastguests.com, podsnack.com, sponsorship.business — many podcasts publish their sponsor rates with the contact email.

### Newsletter / Substack writers

- Substack publishes their email on their author profile (sometimes; not always). If not, a paid subscription exposes a reply-to address.
- Beehiiv newsletters: the website footer has a contact email.
- ConvertKit-hosted newsletters: hit reply on their welcome email; often goes to the founder.

### Backup tools (use sparingly)

- **Hunter.io free tier:** 25 searches per month. Good for guessing common patterns at a domain.
- **Apollo.io free credits:** 100 verified emails free per month. Decent coverage of US creators.
- **RocketReach 5-day trial:** good last resort.

**Verify before sending.** Use a one-pixel email verification tool (NeverBounce free tier; mailtester.com) to avoid sending to dead addresses, which damages your sender reputation.

---

## Pacing the work

Don't blast. Cadence matters because:
- Sender reputation: 50 cold emails in one day to similar domains looks spammy to email providers.
- Reply management: if 10 creators reply yes the same day, you can't respond well to all of them.
- Iteration: the first 3 to 5 sends teach you what's working in the pitch. Iterate before sending the next 5.

**Recommended schedule for the first 20:**

| Week | Sends | Focus |
|---|---|---|
| 1 | 3 Tier 1 (founder direct) | Send to your top 3, let replies come in |
| 2 | 4 Tier 1 + 2 Tier 2 | Iterate based on Week 1 replies; expand |
| 3 | 4 Tier 2 follow-ups (Touch 2) + 3 Tier 3 | Begin follow-up cadence; add scope |
| 4 | 2 Tier 3 + 2 Tier 4 + Touch 2 sweep | Round out the list |
| 5 to 6 | Touch 3 closes for non-responders | Either custom offer (Tier 1) or "here when you reconsider" close |

Total Touch 1 sends across 4 weeks: 20. Total Touch 2 sends (across weeks 2 to 4): up to 18. Total Touch 3: up to 6 (Tier 1 only).

---

## What to do when someone says yes

This is where most affiliate programs lose creators. They reply yes, you send a generic onboarding email, and they ghost. Here's the high-conversion path:

### Within 24 hours

1. **Reply personally.** Acknowledge their show / writing again with one specific reference. Don't paste a canned welcome.
2. **Send the free Planner code.** A real Stripe promotion code, valid for 1 year, applied to their account. Or admin-tier their email manually.
3. **Send the creative kit (link, not attachment).** A Notion or Google Drive folder with:
   - Logos (PNG and SVG, light and dark)
   - Screenshots of the 12 tools (1080p, 16:9 and 9:16)
   - 3 short video clips (15s, 30s, 60s) they can drop into a video
   - Talking points doc (what to say, what NOT to say)
   - FTC disclosure template
   - Their unique tracking link (once Rewardful is live; for now, a UTM link with their handle)
4. **Calendar link.** Offer a 20-minute intro call. Some creators want it, most don't. Always offer.
5. **Set a 30-day follow-up reminder.** Check on them. Most creators need a nudge to actually post.

### Within 7 days

1. **Custom landing page** (if they're Pro tier, 10k+ audience). Live at retiremore.com/r/{their-handle}. Use [`affiliateCreators.ts`](../../Retire-Portal/apps/portal/lib/affiliateCreators.ts) to onboard.
2. **Welcome email via Loops.** Create an "affiliate-onboarding" sequence in Loops that fires on the `affiliateApplicant: true` flag. 3 emails over 14 days: welcome + kit, talking points, first content idea.
3. **Direct WhatsApp / DM channel** for top creators only. Reduces friction for "I'm filming Friday, can you send X by Thursday" requests.

### Within 30 days

1. **First content goes live.** Reply within an hour, share to your channels, send a thank-you note.
2. **Pay them their first commission, even if small.** A $4.70 Wise transfer arrives in their inbox with a "first conversion!" note. The dollar amount is irrelevant; the signal that this is real is everything.
3. **Co-marketing slot evaluation.** Are they in the top 5 by quarter? Email blast to your list, sponsored deep-dive budget allocated.

---

## Tracking template

Notion DB or Google Sheet with these columns. Keep it simple. Update weekly, not daily.

| Column | Values |
|---|---|
| Creator | Name |
| Channel | Show / channel name |
| Tier | 1, 2, 3, 4 |
| URL | Channel URL |
| Email | Found contact |
| Email source | Where you found it (about page, agency, etc.) |
| Status | not contacted, T1 sent, T2 sent, T3 sent, replied yes, replied no, active, declined |
| T1 date | YYYY-MM-DD |
| T2 date | YYYY-MM-DD or empty |
| T3 date | YYYY-MM-DD or empty |
| Last reply | One-line summary |
| Active since | YYYY-MM-DD |
| First conversion | YYYY-MM-DD |
| Notes | Whatever |

Review weekly. Move "T1 sent" rows that are 7+ days old to "T2 needed."

---

## Rules to enforce on yourself

1. **Never badger.** Three touches max per creator. After Touch 3, they go on a 6-month cooldown. Recontact only if there's a meaningful change (new product, new compensation tier, etc.).
2. **Never lie about traction.** Zero paying users is zero paying users. Pre-launch is pre-launch. The rate is the value proposition; don't dilute it with fake numbers.
3. **Never overpromise on co-marketing.** If a creator agrees expecting an email blast and you don't have a list yet, you've burned them. Only commit when the resource exists.
4. **Disclose the brand-policy carve-out up-front for fee-only CFPs.** If a CFP/RIA replies, the response is "we have a fiduciary-conflict carve-out; here's the educational license path." Never let them sign up to the paid affiliate track. You'll thank yourself later when no SEC enforcement letter arrives.
5. **Commit to monthly payouts before sending Touch 1 to anyone.** If you can't pay reliably, don't promise.

---

## What not to do

- **Don't pitch creators just because they're big.** Reach without persona match (e.g., a personal-finance creator whose audience is 25-year-olds) wastes everyone's time. Re-read [`brand/audience-personas.md`](../../brand/audience-personas.md).
- **Don't pitch fee-only CFPs/RIAs as paid affiliates.** Permanent brand-policy carve-out, not a deferral. They use the educational license path or the inbound-referral path. See AFFILIATE_PROGRAM.md appendix.
- **Don't send mass cold emails.** 20 personalized emails over 4 weeks beats 200 templated emails in one day for sender reputation, conversion, and your own ability to reply meaningfully.
- **Don't ship a custom landing page before the creator has agreed to use it.** Unused /r/{handle} pages are dead weight on the codebase.

---

## Tools you actually need

| Tool | Cost | What it does |
|---|---|---|
| Email client (existing) | $0 | Sending, tracking replies |
| Notion or Google Sheet | $0 | Outreach DB |
| Wise | $0 setup, ~1-2% per payout | International creator payouts |
| Loops (already wired) | Existing | Onboarding sequence + affiliate scorecard |
| Resend (already wired) | Existing | Transactional emails to creators |
| Google Drive or Notion | $0 | Creative kit hosting |

Notably **NOT needed for v1:**
- Hunter.io paid plan ($49/mo): the free tier is enough for 20 creators
- HubSpot or Pipedrive ($50+/mo): a Notion table is fine at this scale
- Rewardful ($49/mo): defer until you have first paying users to validate the rate; until then, track manually via UTM and Stripe metadata

---

## When to graduate from manual

You'll know it's time to switch tools when:
- Tracking is taking >2 hours/week (move to a CRM-lite like Attio or Notion CRM template)
- You're paying out to >10 creators/month (move to Rewardful)
- More than 30% of creators ask "can I have a custom landing page?" (build [`affiliateCreators.ts`](../../Retire-Portal/apps/portal/lib/affiliateCreators.ts) into a real CMS-backed model)

Until those triggers hit, the manual process is the right one.

---

## Open questions / decisions needed

1. **Free Planner code mechanics.** Need a Stripe coupon that grants 100% off for 12 months, plus a way to issue per-creator codes you can revoke. Or just admin-tier their email manually for v1. Decide before sending Touch 1.
2. **Creative kit hosting.** Notion (linkable, no auth needed) is recommended over Google Drive (auth friction). Spin up the kit folder before Week 1 sends.
3. **WhatsApp / DM channel for top creators.** Open question: do you want to be reachable that way, or stay email-only? Recommend email-only at v1 to protect your time.
