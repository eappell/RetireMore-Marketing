/**
 * Pull subscription + revenue snapshot from Stripe (READ-ONLY).
 * Writes raw JSON to data/reports/stripe-<date>.json for the analytics-reporter agent.
 *
 * Recommended: use a Stripe restricted key with READ-ONLY scopes for:
 *   - subscriptions (read)
 *   - charges (read)
 *   - customers (read)
 *
 * Usage:
 *   npm run stripe:revenue
 *
 * Stripe API: https://stripe.com/docs/api
 */
import { env, requireEnv } from '../lib/env.js';
import { writeReport, isoDate } from '../lib/markdown.js';

requireEnv('STRIPE_SECRET_KEY');

const STRIPE = 'https://api.stripe.com/v1';

async function stripe(path: string, params: Record<string, string> = {}): Promise<any> {
  const url = new URL(`${STRIPE}${path}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.append(k, v);

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Stripe ${path} failed (${res.status}): ${body}`);
  }

  return res.json();
}

interface StripeSubscription {
  id: string;
  status: string;
  current_period_end: number;
  items: { data: Array<{ price: { id: string; unit_amount: number; recurring: { interval: string } } }> };
  created: number;
  canceled_at: number | null;
}

async function listAll(path: string, params: Record<string, string>): Promise<StripeSubscription[]> {
  const all: StripeSubscription[] = [];
  let starting_after: string | undefined;
  for (let i = 0; i < 50; i++) {
    const page = await stripe(path, {
      ...params,
      limit: '100',
      ...(starting_after ? { starting_after } : {}),
    });
    all.push(...page.data);
    if (!page.has_more) break;
    starting_after = page.data[page.data.length - 1].id;
  }
  return all;
}

async function main() {
  const date = isoDate();
  console.log('Pulling Stripe subscriptions…');

  const active = await listAll('/subscriptions', { status: 'active' });
  const trialing = await listAll('/subscriptions', { status: 'trialing' });
  const canceled = await listAll('/subscriptions', { status: 'canceled' });

  // MRR calc — sum monthly equivalents of all active subs
  let mrrCents = 0;
  const planCounts: Record<string, number> = {};
  for (const sub of active) {
    for (const item of sub.items.data) {
      const amt = item.price.unit_amount ?? 0;
      const interval = item.price.recurring?.interval;
      const monthly = interval === 'year' ? amt / 12 : amt;
      mrrCents += monthly;
      planCounts[item.price.id] = (planCounts[item.price.id] ?? 0) + 1;
    }
  }

  // New subs in last 7 days
  const sevenDaysAgo = Math.floor(Date.now() / 1000) - 7 * 86400;
  const newSubs = active.filter((s) => s.created >= sevenDaysAgo);
  const churnedLast7 = canceled.filter((s) => (s.canceled_at ?? 0) >= sevenDaysAgo);

  const out = {
    pulled_at: new Date().toISOString(),
    snapshot_date: date,
    counts: {
      active: active.length,
      trialing: trialing.length,
      canceled_total: canceled.length,
    },
    mrr_cents: Math.round(mrrCents),
    arr_cents: Math.round(mrrCents * 12),
    plan_counts: planCounts,
    last_7_days: {
      new_subscriptions: newSubs.length,
      churned: churnedLast7.length,
      net_new: newSubs.length - churnedLast7.length,
    },
  };

  const path = `data/reports/stripe-${date}.json`;
  writeReport(path, JSON.stringify(out, null, 2));
  console.log(`✅ Wrote ${path}`);
  console.log(`   MRR: $${(mrrCents / 100).toFixed(0)} / Active: ${active.length}`);
}

main().catch((err) => {
  console.error('❌', err);
  process.exit(1);
});
