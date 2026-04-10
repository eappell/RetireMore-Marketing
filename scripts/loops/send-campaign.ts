/**
 * Send a Loops transactional campaign by ID. DRAFT-MODE BY DEFAULT.
 *
 * Usage (dry-run / draft):
 *   npm run loops:send-campaign -- <transactionalId> --to test@example.com --data '{"name":"Linda"}'
 *
 * Usage (actually send):
 *   npm run loops:send-campaign -- <transactionalId> --to test@example.com --data '{...}' --confirm
 *
 * The --confirm flag is REQUIRED to actually hit the Loops API. Without it, the script
 * prints what it would send and exits 0.
 *
 * Loops API docs: https://loops.so/docs/api-reference/send-transactional-email
 */
import { env, requireEnv } from '../lib/env.js';

requireEnv('LOOPS_API_KEY');

const args = process.argv.slice(2);
const transactionalId = args[0];

if (!transactionalId) {
  console.error('Usage: npm run loops:send-campaign -- <transactionalId> --to <email> --data <json> [--confirm]');
  process.exit(1);
}

function flag(name: string): string | undefined {
  const idx = args.findIndex((a) => a === `--${name}`);
  return idx >= 0 ? args[idx + 1] : undefined;
}

function hasFlag(name: string): boolean {
  return args.includes(`--${name}`);
}

const to = flag('to');
const dataJson = flag('data') ?? '{}';
const confirm = hasFlag('confirm');

if (!to) {
  console.error('Missing --to <email>');
  process.exit(1);
}

let dataVariables: Record<string, unknown>;
try {
  dataVariables = JSON.parse(dataJson);
} catch {
  console.error('--data must be valid JSON. Got:', dataJson);
  process.exit(1);
}

const payload = {
  transactionalId,
  email: to,
  dataVariables,
};

if (!confirm) {
  console.log('🟡 DRAFT MODE — would send:');
  console.log(JSON.stringify(payload, null, 2));
  console.log('\nRe-run with --confirm to actually send.');
  process.exit(0);
}

async function main() {
  const res = await fetch('https://app.loops.so/api/v1/transactional', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.LOOPS_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.error(`❌ Loops send failed (${res.status}):`, body);
    process.exit(1);
  }

  console.log('✅ Campaign sent:', body);
}

main().catch((err) => {
  console.error('❌ Unexpected error:', err);
  process.exit(1);
});
