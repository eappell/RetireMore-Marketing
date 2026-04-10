# RetireMore-Marketing

The all-in-one marketing workspace for [RetireMore](https://retiremore.com) — SEO, email, paid acquisition, direct outreach, social media, affiliate program, and analytics. Claude Code-first; lightweight Node/TS scripts integrate with the APIs already in use by the product (Loops, Resend, PostHog, Stripe).

This is a sibling repo to [`Retire-Portal`](../Retire-Portal). Strategy docs that originated in `Retire-Portal/docs/business/` are mirrored into this repo's `docs/strategy/`, but Retire-Portal remains the source of truth for product code, pricing, and the event taxonomy.

## How to use this project

1. **Open it in Claude Code.** [`CLAUDE.md`](CLAUDE.md) loads automatically and gives every conversation the brand bible — voice, audience, the 12 tools, pricing, and links to source-of-truth files.
2. **Invoke a skill.** Each skill is a slash command that takes you from intent to artifact:

   | Skill | What it does |
   |---|---|
   | [`/new-blog-post`](.claude/skills/new-blog-post/SKILL.md) | Topic → SEO brief → publishable draft in `content/blog/drafts/` |
   | [`/keyword-research`](.claude/skills/keyword-research/SKILL.md) | Cluster → keyword analysis in `seo/keyword-research/` |
   | [`/seo-audit`](.claude/skills/seo-audit/SKILL.md) | URL → audit in `seo/audits/` |
   | [`/new-email-sequence`](.claude/skills/new-email-sequence/SKILL.md) | Sequence name → full Loops spec in `email/sequences/` |
   | [`/ad-campaign`](.claude/skills/ad-campaign/SKILL.md) | Objective → Google or Meta campaign in `paid/` |
   | [`/outreach-list`](.claude/skills/outreach-list/SKILL.md) | Segment → 3-touch cold sequence in `outreach/` |
   | [`/social-week`](.claude/skills/social-week/SKILL.md) | Theme → a week of channel-native posts in `social/` |
   | [`/affiliate-pitch`](.claude/skills/affiliate-pitch/SKILL.md) | Channel → recruitment kit in `affiliate/recruitment/` |
   | [`/weekly-report`](.claude/skills/weekly-report/SKILL.md) | (no input) → metrics report in `analytics/reports/` |
   | [`/publish-blog`](.claude/skills/publish-blog/SKILL.md) | Slug → MDX file in `Retire-Portal/apps/portal/app/blog/<slug>/` |

3. **Or talk to a subagent directly.** Specialized agents live in [`.claude/agents/`](.claude/agents/):
   - `seo-strategist`, `content-writer`, `email-marketer`, `paid-copywriter`, `outreach-specialist`, `social-media-manager`, `affiliate-recruiter`, `analytics-reporter`

## Setup

```bash
cd /Users/eddie/Projects/RetireWise/RetireMore-Marketing
npm install
cp .env.example .env   # then fill in API keys
```

API keys needed for the integration scripts:

- `LOOPS_API_KEY` — marketing email
- `POSTHOG_API_KEY` + `POSTHOG_PROJECT_ID` — analytics
- `RESEND_API_KEY` — transactional email tests
- `STRIPE_SECRET_KEY` — revenue reporting (use a read-only restricted key)

The Claude Code skills work without any of these — they just produce content that's published manually. The scripts are only needed when you want live data pulls or to push to Loops.

## Layout

- [`CLAUDE.md`](CLAUDE.md) — brand bible (always loaded)
- [`brand/`](brand/) — voice, personas, value props, pricing, positioning, the 12 tools
- [`docs/strategy/`](docs/strategy/) — mirrored strategy docs from Retire-Portal
- [`content/blog/`](content/blog/) — drafts, briefs, and published records
- [`seo/`](seo/) — keyword research, sitemap plan, schema templates, audits, internal linking map
- [`email/`](email/) — Loops sequences, templates, segments, A/B tests
- [`paid/`](paid/) — Google Ads, Meta Ads, landing variants, UTM scheme, audiences
- [`outreach/`](outreach/) — advisor / podcast / partnership / journalist outreach
- [`social/`](social/) — X, LinkedIn, YouTube, TikTok, Reddit drafts + content calendar
- [`affiliate/`](affiliate/) — channel partner program (10 segments)
- [`analytics/`](analytics/) — KPIs, PostHog dashboards/funnels/events, weekly reports
- [`scripts/`](scripts/) — TypeScript integrations (Loops, PostHog, Resend, Stripe, SEO)
- [`data/`](data/) — keywords, contact lists (gitignored), raw JSON pulls (gitignored)

## What this project will NOT do (v1)

- Push to git remotes — scripts that touch Retire-Portal write files locally and print the `gh pr create` command. They never push.
- Send Loops campaigns automatically — `loops:send-campaign` requires explicit confirmation flag.
- Post to social media APIs — drafts only, manual posting.
- Touch Stripe in any write mode — `stripe:revenue` is read-only.
- Commit secrets, real contact lists, or personal data — see [`.gitignore`](.gitignore).
