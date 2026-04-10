/**
 * Send a test transactional email via Resend. DRAFT-MODE BY DEFAULT.
 *
 * Usage (preview only):
 *   npm run resend:send-test -- --to test@example.com --subject "Hello" --body "World"
 *
 * Usage (actually send):
 *   npm run resend:send-test -- --to test@example.com --subject "Hello" --body "World" --confirm
 *
 * Resend API: https://resend.com/docs/api-reference/emails/send-email
 */
import { env, requireEnv } from '../lib/env.js';

requireEnv('RESEND_API_KEY');

const args = process.argv.slice(2);

function flag(name: string): string | undefined {
  const idx = args.findIndex((a) => a === `--${name}`);
  return idx >= 0 ? args[idx + 1] : undefined;
}
function hasFlag(name: string): boolean {
  return args.includes(`--${name}`);
}

const to = flag('to');
const subject = flag('subject') ?? 'RetireMore test email';
const body = flag('body') ?? 'This is a test from the marketing repo.';
const from = flag('from') ?? 'RetireMore <noreply@retiremore.com>';
const confirm = hasFlag('confirm');

if (!to) {
  console.error('Usage: npm run resend:send-test -- --to <email> [--subject ...] [--body ...] [--from ...] [--confirm]');
  process.exit(1);
}

const payload = { from, to, subject, text: body };

if (!confirm) {
  console.log('🟡 DRAFT MODE — would send:');
  console.log(JSON.stringify(payload, null, 2));
  console.log('\nRe-run with --confirm to actually send.');
  process.exit(0);
}

async function main() {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.error(`❌ Resend send failed (${res.status}):`, body);
    process.exit(1);
  }

  console.log('✅ Sent:', body);
}

main().catch((err) => {
  console.error('❌', err);
  process.exit(1);
});
