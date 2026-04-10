/**
 * Pull last-7-days events + active users + tool engagement from PostHog.
 * Writes raw JSON to data/reports/posthog-weekly-<date>.json for the analytics-reporter agent.
 *
 * Usage:
 *   npm run posthog:weekly
 *
 * PostHog API docs: https://posthog.com/docs/api
 */
import { env, requireEnv } from '../lib/env.js';
import { writeReport, isoDate } from '../lib/markdown.js';

requireEnv('POSTHOG_API_KEY', 'POSTHOG_PROJECT_ID');

const HOST = env.POSTHOG_HOST;
const PROJECT = env.POSTHOG_PROJECT_ID;

async function ph(path: string, init: RequestInit = {}): Promise<unknown> {
  const res = await fetch(`${HOST}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.POSTHOG_API_KEY}`,
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`PostHog ${path} failed (${res.status}): ${body}`);
  }
  return res.json();
}

async function main() {
  const date = isoDate();
  const weekAgo = isoDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));

  // PostHog HogQL query — last 7 days of events grouped by event name
  const query = {
    query: {
      kind: 'HogQLQuery',
      query: `
        SELECT event, count() AS cnt
        FROM events
        WHERE timestamp >= toDateTime('${weekAgo} 00:00:00')
          AND timestamp <  toDateTime('${date} 23:59:59')
        GROUP BY event
        ORDER BY cnt DESC
      `,
    },
  };

  console.log(`Pulling PostHog events for ${weekAgo} → ${date}…`);

  const result = await ph(`/api/projects/${PROJECT}/query/`, {
    method: 'POST',
    body: JSON.stringify(query),
  });

  const out = {
    pulled_at: new Date().toISOString(),
    range: { from: weekAgo, to: date },
    result,
  };

  const path = `data/reports/posthog-weekly-${date}.json`;
  writeReport(path, JSON.stringify(out, null, 2));
  console.log(`✅ Wrote ${path}`);
}

main().catch((err) => {
  console.error('❌', err);
  process.exit(1);
});
