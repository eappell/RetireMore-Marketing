# Loops Email Retention Setup — RetireMore

**Purpose:** Automated drip email sequences to retain users and guide them through the platform.
**Service:** [Loops](https://loops.so)
**Status:** Not yet configured

---

## Step 1: Create Loops Account

1. Go to https://loops.so and sign up (free tier covers 1K contacts)
2. Choose the "SaaS" use case during onboarding

---

## Step 2: Verify Your Domain

In Loops dashboard → Settings → Sending:

1. Add `mail.retiremore.com` as your sending domain (subdomain isolates marketing reputation from transactional)
2. Loops will give you DNS records to add in Cloudflare:

### SPF Record
- Create a new SPF TXT record for `mail` subdomain
- Example: `v=spf1 include:_spf.loops.so ~all`
- This is separate from Resend's SPF on the root domain — no merging needed

### DKIM Record
- Add the CNAME or TXT record Loops provides (e.g., `loops._domainkey.mail.retiremore.com`)
- This won't conflict with Resend's DKIM — they use different selectors

### Verify in Loops
- After adding DNS records, click "Verify" in Loops dashboard
- DNS propagation may take a few minutes (Cloudflare is usually fast)

---

## Step 3: Configure Sending Address

Set up a dedicated marketing sender to keep it separate from transactional (Resend):

| Service | From Address | Purpose |
|---------|-------------|---------|
| Resend | `noreply@retiremore.com` | Transactional (password reset, confirmations) |
| Loops | `updates@mail.retiremore.com` | Marketing/drip sequences |

This separation protects transactional deliverability from marketing spam reports.

---

## Step 4: Get API Key

1. Loops dashboard → Settings → API
2. Copy the API key
3. Add to portal environment:
   - `.env.local`: `LOOPS_API_KEY=your_api_key_here`
   - VPS production env: same variable

---

## Step 5: Portal Integration

### Install the SDK

```bash
cd apps/portal
npm install loops
```

### Create the API helper

Create `apps/portal/lib/loops.ts`:

```typescript
import LoopsClient from 'loops';

const loops = new LoopsClient(process.env.LOOPS_API_KEY!);

export async function createOrUpdateContact(email: string, properties: Record<string, any>) {
  return loops.updateContact(email, properties);
}

export async function sendEvent(email: string, eventName: string, eventProperties?: Record<string, any>) {
  return loops.sendEvent({ email, eventName, eventProperties });
}

export async function addToMailingList(email: string, listId: string) {
  return loops.updateContact(email, { mailingLists: { [listId]: true } });
}
```

### Fire events from the portal

Add event calls at key moments in the user journey:

```typescript
// When user signs up (in auth flow)
await sendEvent(user.email, 'user_signed_up', {
  name: user.displayName,
});

// When user completes a tool (in IFrameWrapper or ToolDataContext on save)
await sendEvent(user.email, 'tool_completed', {
  toolId: 'ss-optimizer',
  toolName: 'Social Security Optimizer',
  toolsCompleted: 3,  // total count
  toolsRemaining: 9,
});

// When AI generates a readiness score (in Orchestrator)
await sendEvent(user.email, 'readiness_score_generated', {
  score: 72,
});

// When user goes inactive (run via cron or Loops' built-in inactivity trigger)
// Loops can detect this automatically based on last event timestamp
```

### Server-side API route (recommended)

Create `apps/portal/app/api/loops/event/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { sendEvent } from '@/lib/loops';
import { verifyAuth } from '@/lib/auth-server'; // your existing auth check

export async function POST(req: NextRequest) {
  const auth = await verifyAuth(req);
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { eventName, eventProperties } = await req.json();
  if (!auth.email) return NextResponse.json({ error: 'No email' }, { status: 400 });

  await sendEvent(auth.email, eventName, eventProperties);
  return NextResponse.json({ ok: true });
}
```

---

## Step 6: Build Email Sequences in Loops

### Sequence 1: Onboarding (trigger: `user_signed_up`)

| Day | Subject | Content |
|-----|---------|---------|
| 0 | Welcome to RetireMore | Quick overview, link to dashboard, "Start with the Income Planner" CTA |
| 2 | Your Social Security could be worth $X more | Link to SS Optimizer, explain why timing matters |
| 5 | You've completed {toolsCompleted} tools — here's what we found | Personalized summary, link to AI Orchestrator if 2+ tools done |
| 10 | The retirement expense most people miss | Link to Healthcare Costs tool, mention IRMAA |
| 14 | Your retirement readiness checklist | Summary of completed vs remaining tools with direct links |

### Sequence 2: Tool Nudges (trigger: `tool_completed`)

After each tool completion, wait 2 days then suggest the next logical tool:

| Completed Tool | Next Suggestion |
|---------------|----------------|
| Income Planner | Tax Impact Analyzer ("See how taxes affect your plan") |
| SS Optimizer | Income Planner ("Now plug your optimal SS into your full plan") |
| Tax Analyzer | Healthcare Costs ("Medicare premiums depend on your income") |
| Healthcare Costs | State Relocation ("Some states could save you $X/year") |
| Any 4+ tools | AI Orchestrator ("You have enough data for a full analysis") |

### Sequence 3: Re-engagement (trigger: Loops inactivity, 14+ days)

| Email | Subject | Content |
|-------|---------|---------|
| 1 | Your retirement plan may need updating | "It's been a while — here's what may have changed" |
| 2 (7 days later) | One number that could change your retirement | Interesting stat + link back to dashboard |
| 3 (14 days later) | We miss you (final) | Simple, human note from Eddie/Lara |

### Sequence 4: Monthly Digest (recurring, all active users)

- Readiness score update (if changed)
- New features or tools added
- One actionable tip (rotate: tax, SS, healthcare, etc.)
- "Reply to this email with questions" (builds relationship)

---

## Step 7: Contact Properties to Track

Set these up as custom properties in Loops so you can segment:

| Property | Type | Source |
|----------|------|--------|
| `name` | string | Firebase Auth displayName |
| `tier` | string | Firestore user doc (free/paid/planner/admin) |
| `toolsCompleted` | number | Count from ToolDataContext |
| `readinessScore` | number | From Orchestrator |
| `signupDate` | date | Firebase Auth createdAt |
| `lastActiveDate` | date | Last tool save timestamp |
| `hasPartner` | boolean | Plan type === COUPLE |
| `retirementAge` | number | From profile |
| `currentAge` | number | From profile |

---

## Step 8: Sync Existing Users

When you first set up Loops, bulk-import existing users:

1. Export from Firebase Auth (email, displayName, createdAt)
2. Enrich with Firestore data (tier, profile fields)
3. Import via Loops CSV upload or API batch

---

## Email Tone Guidelines

- **Audience is Gen X (50-65)** — respect their time, no clickbait
- **Every email must have one clear action** — link to a specific tool or insight
- **Subject lines should be specific**, not generic ("Your Roth window closes in 3 years" > "Check out RetireMore!")
- **Keep it short** — 3-5 sentences max in the body
- **Sign from a real person** — "Eddie & Lara, RetireMore" not "The RetireMore Team"
- **Include unsubscribe** — Loops handles this automatically, but make it prominent
- **No more than 2 emails/week** during onboarding, then weekly or biweekly

---

## Cost Estimate

| Contacts | Loops Plan | Monthly Cost |
|----------|-----------|-------------|
| 0–1,000 | Free | $0 |
| 1,000–5,000 | Starter | $49/mo |
| 5,000–10,000 | Growth | $99/mo |

You'll be on the free tier for a while. Revisit when you hit 1K contacts.

---

## Checklist

- [x] Create Loops account
- [x] Verify `mail.retiremore.com` subdomain (SPF + DKIM in Cloudflare)
- [x] Set sending address: `updates@mail.retiremore.com`
- [x] Save API key to `.env.local` and VPS env
- [x] Install `loops` npm package in portal
- [x] Create `lib/loops.ts` helper
- [x] Create `/api/loops/event` API route
- [x] Wire up event hooks (signup, tool completion, readiness score)
- [ ] Build Sequence 1: Onboarding (5 emails) — templates in `LOOPS_EMAIL_TEMPLATES.md`
- [ ] Build Sequence 2: Tool nudges (5 emails)
- [ ] Build Sequence 3: Re-engagement (3 emails)
- [ ] Build Sequence 4: Monthly digest
- [ ] Build Sequence 5: Subscription renewal reminders (3 emails)
- [ ] Build Sequence 6: Birthday / retirement countdown (2 templates)
- [x] Set up contact properties (15 custom properties via `setup-loops-properties.ts`)
- [x] Sync contact properties on every event (via `/api/loops/event` route)
- [x] Sync Stripe fields (tier, renewalDate, renewalAmount) via webhook
- [x] Monthly cron for computed fields (`loops-monthly-sync.ts` — 1st of month, 6 AM UTC)
- [ ] Test with your own email
- [ ] Import existing beta users
- [ ] Launch

---

*Last updated: April 2026*
