/**
 * Upsert a Loops contact.
 *
 * Usage:
 *   npm run loops:upsert-contact -- test@example.com [--firstName Linda] [--tier free]
 *
 * Loops API docs: https://loops.so/docs/api-reference/contacts
 */
import { env, requireEnv } from '../lib/env.js';

requireEnv('LOOPS_API_KEY');

const args = process.argv.slice(2);
const email = args[0];

if (!email) {
  console.error('Usage: npm run loops:upsert-contact -- <email> [--firstName Name] [--tier free|paid|planner]');
  process.exit(1);
}

function flag(name: string): string | undefined {
  const idx = args.findIndex((a) => a === `--${name}`);
  return idx >= 0 ? args[idx + 1] : undefined;
}

const payload: Record<string, unknown> = { email };
if (flag('firstName')) payload.firstName = flag('firstName');
if (flag('lastName')) payload.lastName = flag('lastName');
if (flag('tier')) payload.userGroup = flag('tier');

async function main() {
  const res = await fetch('https://app.loops.so/api/v1/contacts/update', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${env.LOOPS_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.error(`❌ Loops upsert failed (${res.status}):`, body);
    process.exit(1);
  }

  console.log('✅ Contact upserted:', body);
}

main().catch((err) => {
  console.error('❌ Unexpected error:', err);
  process.exit(1);
});
