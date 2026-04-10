/**
 * Print the canonical Loops contact-property schema we use across the marketing system.
 *
 * This script does NOT hit the Loops API. Loops doesn't expose a "create custom property"
 * endpoint — properties are created the first time a contact is upserted with that key,
 * or via the Loops UI. This script is a single source of truth for *what properties exist*
 * so the email-marketer agent and the upsert-contact script stay in sync.
 *
 * Usage:
 *   npm run loops:sync-properties
 */

interface LoopsProperty {
  key: string;
  type: 'string' | 'number' | 'boolean' | 'date';
  description: string;
  source: string;
}

const PROPERTIES: LoopsProperty[] = [
  // Identity
  { key: 'firstName', type: 'string', description: 'Given name', source: 'signup form' },
  { key: 'lastName', type: 'string', description: 'Family name', source: 'signup form' },
  { key: 'email', type: 'string', description: 'Email (canonical id)', source: 'signup form' },

  // Subscription
  { key: 'userGroup', type: 'string', description: 'free | paid | planner | admin', source: 'Stripe webhook' },
  { key: 'tier', type: 'string', description: 'Mirror of userGroup for clarity', source: 'Stripe webhook' },
  { key: 'billingPeriod', type: 'string', description: 'monthly | annual', source: 'Stripe' },
  { key: 'subscriptionStartedAt', type: 'date', description: 'First paid subscription date', source: 'Stripe webhook' },
  { key: 'subscriptionRenewsAt', type: 'date', description: 'Next renewal date', source: 'Stripe webhook' },

  // Engagement
  { key: 'signupDate', type: 'date', description: 'Account creation date', source: 'Firebase Auth' },
  { key: 'lastActiveDate', type: 'date', description: 'Last app session', source: 'PostHog' },
  { key: 'toolsCompleted', type: 'number', description: 'Count of tools with at least one saved scenario', source: 'PostHog' },
  { key: 'firstToolUsed', type: 'string', description: 'Tool ID of first tool opened', source: 'PostHog' },
  { key: 'readinessScore', type: 'number', description: '0–100 retirement readiness score', source: 'app' },

  // Persona / segment hints
  { key: 'persona', type: 'string', description: 'pre-retiree | optimizer | expat | identity | organizer', source: 'inferred' },
  { key: 'state', type: 'string', description: 'US state code (if known)', source: 'app' },
  { key: 'isCouple', type: 'boolean', description: 'Couples planning mode enabled', source: 'app' },
];

console.log('# Loops contact properties (canonical)\n');
console.log('| Key | Type | Description | Source |');
console.log('|---|---|---|---|');
for (const p of PROPERTIES) {
  console.log(`| ${p.key} | ${p.type} | ${p.description} | ${p.source} |`);
}
console.log(
  '\nThese properties are created automatically when a contact is first upserted with the key.\n' +
    'If you change this list, also update email/segments.md and the Stripe webhook in Retire-Portal.\n',
);
