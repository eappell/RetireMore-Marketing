import 'dotenv/config';
import { z } from 'zod';

const EnvSchema = z.object({
  LOOPS_API_KEY: z.string().optional(),
  POSTHOG_API_KEY: z.string().optional(),
  POSTHOG_PROJECT_ID: z.string().optional(),
  POSTHOG_HOST: z.string().default('https://app.posthog.com'),
  RESEND_API_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  RETIRE_PORTAL_PATH: z.string().default('../Retire-Portal'),
  SITE_URL: z.string().default('https://retiremore.com'),
});

export const env = EnvSchema.parse(process.env);

/** Throw a helpful error if a required key is missing for the script's use case. */
export function requireEnv<K extends keyof typeof env>(...keys: K[]): void {
  const missing = keys.filter((k) => !env[k]);
  if (missing.length > 0) {
    console.error(
      `\n❌ Missing required environment variables:\n  ${missing.join('\n  ')}\n\n` +
        `Add them to .env (see .env.example) and try again.\n`,
    );
    process.exit(1);
  }
}
