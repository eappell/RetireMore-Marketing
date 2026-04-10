/**
 * Pull the canonical signup → first scenario → upgrade funnel from PostHog.
 * Writes raw JSON to data/reports/funnel-<date>.json for the analytics-reporter agent.
 *
 * Funnel definition lives in analytics/posthog/funnels.md
 *
 * Usage:
 *   npm run posthog:funnel
 */
import { env, requireEnv } from '../lib/env.js';
import { writeReport, isoDate } from '../lib/markdown.js';

requireEnv('POSTHOG_API_KEY', 'POSTHOG_PROJECT_ID');

const HOST = env.POSTHOG_HOST;
const PROJECT = env.POSTHOG_PROJECT_ID;

async function main() {
  const date = isoDate();
  const monthAgo = isoDate(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));

  // Canonical funnel (mirrors analytics/posthog/funnels.md → "Acquisition")
  const query = {
    insight: 'FUNNELS',
    events: [
      { id: 'User Signed Up', order: 0 },
      { id: 'Tool Opened', order: 1 },
      { id: 'Tool Calculation Run', order: 2 },
      { id: 'Tool Data Saved', order: 3 },
      { id: 'Subscription Created', order: 4 },
    ],
    date_from: monthAgo,
    date_to: date,
    funnel_window_interval: 30,
    funnel_window_interval_unit: 'day',
  };

  console.log(`Pulling acquisition funnel for ${monthAgo} → ${date}…`);

  const res = await fetch(`${HOST}/api/projects/${PROJECT}/insights/funnel/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.POSTHOG_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`PostHog funnel failed (${res.status}): ${body}`);
  }

  const result = await res.json();

  const out = {
    pulled_at: new Date().toISOString(),
    range: { from: monthAgo, to: date },
    funnel: result,
  };

  const path = `data/reports/funnel-${date}.json`;
  writeReport(path, JSON.stringify(out, null, 2));
  console.log(`✅ Wrote ${path}`);
}

main().catch((err) => {
  console.error('❌', err);
  process.exit(1);
});
