# Loops Email Templates — RetireMore

**Sending address:** `updates@mail.retiremore.com`
**Signed by:** Eddie & Lara, RetireMore
**Tone:** Casual, friendly, respectful of time. One clear CTA per email.
**Audience:** Gen X (50–65), pre-retirees and early retirees.

---

## Sequence 1: Onboarding

**Trigger:** `user_signed_up`
**Goal:** Get users to complete their first 4 tools within 14 days.

---

### Email 1.1 — Day 0 (Immediate)

**Subject:** Welcome — here's where to start

Hey {{firstName}},

Welcome to RetireMore. We built this because retirement planning shouldn't require a financial advisor charging 1% of your assets just to tell you the basics.

There are 12 tools on the platform. You don't need to do them all today — but here's the best place to start:

**[Open the Income Planner →](https://retiremore.com)**

It takes about 10 minutes and gives you a clear picture of your retirement income sources and gaps. Everything else builds on it.

Talk soon,
Eddie & Lara, RetireMore

---

### Email 1.2 — Day 2

**Subject:** Your Social Security timing could be worth $100K+

Hey {{firstName}},

Here's something most people don't realize: the age you claim Social Security can swing your lifetime benefits by six figures. Claim at 62 vs. 70? That gap adds up fast.

Our Social Security Optimizer runs the math on your specific situation — when to claim, how spousal benefits factor in, and what the break-even ages look like.

**[Run the Social Security Optimizer →](https://ss-optimizer.retiremore.com)**

Takes about 5 minutes if you have your latest SSA statement handy.

— Eddie & Lara

---

### Email 1.3 — Day 5

**Subject:** You've completed {{toolsCompleted}} tools — here's what to do next

Hey {{firstName}},

{{#if toolsCompleted >= 2}}
Nice progress. With {{toolsCompleted}} tools done, you're building a real picture of your retirement. When you've completed 4 or more, our AI can pull everything together into a personalized retirement analysis.
{{else}}
You've taken the first step — that's more than most people do. Each tool you complete adds another piece to your full retirement picture.
{{/if}}

Here's what we'd suggest next based on where you are:

**[Back to your dashboard →](https://retiremore.com)**

Your dashboard shows what you've completed and what's most useful to tackle next.

— Eddie & Lara

---

### Email 1.4 — Day 10

**Subject:** The retirement expense that blindsides people

Hey {{firstName}},

Healthcare in retirement costs the average couple over $300K out of pocket. And if your income is above certain thresholds, Medicare surcharges (called IRMAA) can add thousands per year on top.

Most people don't plan for this. Our Healthcare Cost tool breaks it down for your situation — premiums, out-of-pocket estimates, and how your income affects what you'll pay.

**[Estimate your healthcare costs →](https://healthcare.retiremore.com)**

Worth 10 minutes of your time, especially if retirement is within 10 years.

— Eddie & Lara

---

### Email 1.5 — Day 14

**Subject:** Your retirement checklist so far

Hey {{firstName}},

It's been two weeks since you signed up. Here's a quick snapshot:

- Tools completed: **{{toolsCompleted}}** of 12
- {{#if readinessScore}}Retirement readiness score: **{{readinessScore}}/100**{{else}}Readiness score: **Complete 4+ tools to unlock**{{/if}}

Each tool you finish makes the overall picture more accurate. Here are the ones that tend to have the biggest impact:

1. Income Planner — your baseline
2. Social Security Optimizer — timing matters
3. Tax Impact Analyzer — keep more of what you have
4. Healthcare Costs — the expense most people miss

**[Pick up where you left off →](https://retiremore.com)**

We'll check in occasionally with tips, but no more than once a week from here on out. And you can always reply to these emails — we actually read them.

— Eddie & Lara, RetireMore

---

## Sequence 2: Tool Nudges

**Trigger:** `tool_completed`
**Delay:** 2 days after trigger
**Goal:** Guide users to the next logical tool based on what they just finished.

---

### Email 2.1 — After Income Planner

**Subject:** Now let's see how taxes affect that plan

Hey {{firstName}},

Nice work finishing the Income Planner. You've got a solid baseline of what's coming in during retirement.

But here's the thing — a dollar of Roth income and a dollar of pension income look the same on paper, but they hit very differently after taxes. The Tax Impact Analyzer shows you the real, after-tax picture.

**[Run the Tax Impact Analyzer →](https://tax.retiremore.com)**

It uses the numbers you already entered, so it's quick.

— Eddie & Lara

---

### Email 2.2 — After Social Security Optimizer

**Subject:** Plug your optimal SS strategy into the full picture

Hey {{firstName}},

Now that you know your best Social Security claiming strategy, the next step is seeing how it fits into your overall retirement income.

The Income Planner lets you map out all your income sources — pensions, 401(k) withdrawals, part-time work — alongside your optimized SS benefit.

**[Open the Income Planner →](https://retiremore.com)**

It's the tool most users say gave them their first real "aha" moment.

— Eddie & Lara

---

### Email 2.3 — After Tax Impact Analyzer

**Subject:** Your Medicare premiums depend on the income you just analyzed

Hey {{firstName}},

Here's a connection most people miss: the income you just modeled in the Tax Analyzer? Medicare uses that same number (with a 2-year lookback) to determine your monthly premiums.

If your income crosses certain thresholds, you'll pay IRMAA surcharges — potentially hundreds of dollars more per month.

**[Check your healthcare cost estimate →](https://healthcare.retiremore.com)**

Knowing this before you retire gives you time to plan around it.

— Eddie & Lara

---

### Email 2.4 — After Healthcare Costs

**Subject:** Some states could save you thousands per year

Hey {{firstName}},

You just saw what healthcare will cost in retirement. Want to know what else varies wildly by where you live? State taxes on retirement income.

Some states tax Social Security. Some don't tax retirement income at all. Some have property tax breaks for retirees. The State Relocation tool compares your current state against alternatives.

**[Compare states →](https://relocate.retiremore.com)**

Even if you're not planning to move, it's eye-opening.

— Eddie & Lara

---

### Email 2.5 — After 4+ Tools Completed

**Subject:** You've unlocked the full picture

Hey {{firstName}},

With {{toolsCompleted}} tools completed, you now have enough data for something most people never get: a comprehensive, AI-powered retirement analysis.

Our AI Orchestrator pulls together everything you've entered — income, Social Security, taxes, healthcare, and more — and gives you a personalized readiness score with specific recommendations.

**[Get your retirement analysis →](https://retiremore.com)**

This is the whole point of the platform. Everything you've done so far feeds into this.

— Eddie & Lara

---

## Sequence 3: Re-engagement

**Trigger:** Loops inactivity detection (14+ days since last event)
**Goal:** Bring inactive users back with low-pressure, value-first nudges.

---

### Email 3.1 — Day 0 (14 days inactive)

**Subject:** Your retirement plan may need a refresh

Hey {{firstName}},

It's been a little while since you were on RetireMore. No pressure — retirement planning isn't a race.

But a couple things may have changed since you last logged in:
- Market conditions shift withdrawal assumptions
- Tax brackets adjust annually
- We've added new features based on user feedback

If you've got 10 minutes, it's worth a quick check-in.

**[Back to your dashboard →](https://retiremore.com)**

— Eddie & Lara

---

### Email 3.2 — Day 7 (21 days inactive)

**Subject:** One number that could change your retirement

Hey {{firstName}},

Did you know that retiring just one year later can increase your lifetime Social Security benefits by about 8%? And that's on top of one more year of savings and one fewer year of withdrawals.

We're not saying you should work longer — just that knowing the math helps you make the decision on your terms.

**[See your numbers →](https://retiremore.com)**

— Eddie & Lara

---

### Email 3.3 — Day 14 (28 days inactive)

**Subject:** Quick note from us

Hey {{firstName}},

This is the last email we'll send for a while. We don't want to be noise in your inbox.

RetireMore is here whenever you're ready. Your data is saved, and you can pick up exactly where you left off.

If something about the platform wasn't working for you, we'd genuinely love to hear about it. Just reply to this email — it goes straight to us, not a support queue.

Hope to see you back,
Eddie & Lara, RetireMore

---

## Sequence 4: Monthly Digest

**Trigger:** Recurring, 1st of each month
**Audience:** All active users (logged in within last 60 days)
**Goal:** Keep users engaged with one actionable insight per month.

---

### Email 4 — Monthly Template

**Subject:** Your {{month}} retirement check-in

Hey {{firstName}},

Here's your monthly snapshot:

{{#if readinessScore}}
- **Readiness score:** {{readinessScore}}/100 {{#if scoreChange}}({{scoreChange}} since last month){{/if}}
- **Tools completed:** {{toolsCompleted}} of 12
{{else}}
- **Tools completed:** {{toolsCompleted}} of 12
- **Readiness score:** Complete 4+ tools to unlock yours
{{/if}}

**This month's tip:** _[Rotate monthly — see tip bank below]_

**[Visit your dashboard →](https://retiremore.com)**

— Eddie & Lara, RetireMore

---

### Monthly Tip Bank (rotate one per month)

1. **Roth conversions** — "If you're in a low-income year before Social Security kicks in, it might be a good window for Roth conversions. Our Tax Analyzer can model this."

2. **Medicare enrollment** — "Turning 65 this year? Medicare enrollment windows are strict and missing them means penalties for life. Our Healthcare tool maps out the timeline."

3. **Social Security at 62** — "Tempted to claim Social Security early? Run the optimizer first — the break-even age might surprise you."

4. **State tax differences** — "Did you know some states don't tax retirement income at all? The State Relocation tool shows the impact for your situation."

5. **Longevity planning** — "Planning to age 85 is optimistic for most people. Our Longevity tool uses actuarial data so you don't outlive your money."

6. **Legacy and gifting** — "If leaving something behind matters to you, our Legacy and Gifting tools help you plan it tax-efficiently."

7. **Healthcare IRMAA** — "High earners pay more for Medicare — it's called IRMAA, and it's based on income from 2 years ago. Check if you're at risk."

8. **Inflation reality** — "Inflation doesn't hit retirees the same as workers. Healthcare and housing inflate faster than the general rate. Our tools account for this."

9. **Part-time work** — "Even modest part-time income in early retirement can dramatically reduce how fast you draw down savings. The Income Planner models this."

10. **Annual review** — "Financial plans aren't one-and-done. Markets move, laws change, and your goals evolve. Your dashboard shows where you stand today."

---

## Sequence 5: Subscription Renewal Reminder

**Trigger:** Scheduled, based on `subscriptionRenewalDate` property
**Emails sent:** 30 days, 7 days, and 1 day before renewal
**Audience:** Paid tier users only
**Goal:** Reduce churn by showing value before the renewal charge hits.

---

### Email 5.1 — 30 Days Before Renewal

**Subject:** Your RetireMore subscription renews in 30 days

Hey {{firstName}},

Quick heads-up — your RetireMore subscription renews on {{renewalDate}}.

Here's what you've accomplished this year:

- **Tools completed:** {{toolsCompleted}} of 12
- {{#if readinessScore}}**Readiness score:** {{readinessScore}}/100{{/if}}
- {{#if toolsCompletedThisYear}}**Tools completed this year:** {{toolsCompletedThisYear}}{{/if}}

We've also added new features since you joined — including updated tax brackets, improved Social Security projections, and better AI recommendations.

No action needed if you'd like to keep going. If you have any questions about your subscription, just reply to this email.

**[Review your dashboard →](https://retiremore.com)**

— Eddie & Lara, RetireMore

---

### Email 5.2 — 7 Days Before Renewal

**Subject:** Your renewal is coming up next week

Hey {{firstName}},

Your RetireMore subscription renews on {{renewalDate}}. You'll be charged {{renewalAmount}} to your card on file.

If you want to make any changes — update your payment method, switch plans, or cancel — you can do that from your account settings.

**[Manage your subscription →](https://retiremore.com)**

And if anything about the platform isn't meeting your expectations, reply here. We'd rather fix it than lose you.

— Eddie & Lara

---

### Email 5.3 — 1 Day Before Renewal

**Subject:** Renewing tomorrow — just a final heads-up

Hey {{firstName}},

Your RetireMore subscription renews tomorrow, {{renewalDate}}. This is just a courtesy reminder — no action needed on your end.

Thanks for sticking with us. We're working on some big updates for the coming year.

— Eddie & Lara

---

## Sequence 6: Birthday / Retirement Countdown

**Trigger:** Scheduled, based on `birthDate` property
**Sent:** On the user's birthday
**Audience:** All users with a birth date on file
**Goal:** Personal touch + motivational nudge tied to their retirement timeline.

---

### Email 6.1 — Birthday (Pre-Retirement)

**Condition:** `currentAge < retirementAge`

**Subject:** Happy birthday, {{firstName}} — {{yearsToRetirement}} years to go

Hey {{firstName}},

Happy birthday! {{currentAge}} looks good on you.

{{#if yearsToRetirement == 1}}
You're just **1 year** away from your target retirement age of {{retirementAge}}. This is the year to make sure everything is dialed in — income sources, tax strategy, healthcare coverage, and Social Security timing.
{{else if yearsToRetirement <= 3}}
With **{{yearsToRetirement}} years** until your target retirement at {{retirementAge}}, this is the window where small moves make the biggest difference. Roth conversions, catch-up contributions, and Social Security timing decisions are all on the table right now.
{{else if yearsToRetirement <= 5}}
**{{yearsToRetirement}} years** until your target retirement age of {{retirementAge}}. You're in the home stretch — the planning you do now has the highest impact per dollar.
{{else}}
**{{yearsToRetirement}} years** until your target retirement at {{retirementAge}}. That might feel far off, but the earlier you plan, the more options you have.
{{/if}}

**[Check your retirement readiness →](https://retiremore.com)**

Enjoy your day.

— Eddie & Lara, RetireMore

---

### Email 6.2 — Birthday (At or Past Retirement Age)

**Condition:** `currentAge >= retirementAge`

**Subject:** Happy birthday, {{firstName}}!

Hey {{firstName}},

Happy birthday! Whether you're already retired or still deciding on timing, we hope {{currentAge}} is off to a great start.

Your financial picture changes every year in retirement — tax brackets shift, Medicare costs adjust, and required minimum distributions kick in at certain ages. It's worth a quick annual check-in.

{{#if currentAge == 65}}
**Turning 65 this year?** Make sure your Medicare enrollment is on track — missing the window means permanent penalties.
{{else if currentAge == 72}}
**Turning 72?** Required minimum distributions (RMDs) start this year. Our Income Planner can help you map out the tax impact.
{{else if currentAge == 73}}
**Turning 73?** If you haven't started RMDs yet, this is the year. The penalties for missing them are steep.
{{/if}}

**[Review your dashboard →](https://retiremore.com)**

Enjoy your day.

— Eddie & Lara, RetireMore

---

## Template Variables Reference

These are Loops contact properties used across templates:

| Variable | Description | Source |
|----------|-------------|--------|
| `{{firstName}}` | User's first name | Firebase Auth displayName |
| `{{toolsCompleted}}` | Number of completed tools | ToolDataContext count |
| `{{readinessScore}}` | AI readiness score (0–100) | Orchestrator |
| `{{scoreChange}}` | Monthly score delta (e.g., "+5") | Computed |
| `{{month}}` | Current month name | Loops date variable |
| `{{renewalDate}}` | Subscription renewal date | Stripe/billing system |
| `{{renewalAmount}}` | Renewal charge (e.g., "$99") | Stripe/billing system |
| `{{toolsCompletedThisYear}}` | Tools completed since last renewal | Computed |
| `{{birthDate}}` | User's date of birth | Profile |
| `{{currentAge}}` | User's current age | Computed from birthDate |
| `{{retirementAge}}` | User's target retirement age | Profile |
| `{{yearsToRetirement}}` | retirementAge - currentAge | Computed |

---

*Last updated: March 2026*
