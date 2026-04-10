/**
 * Publish a finalized draft from content/blog/drafts/<slug>.md to the Retire-Portal repo.
 *
 * What this script does:
 *   1. Reads content/blog/drafts/<slug>.md
 *   2. Validates frontmatter
 *   3. Generates an MDX file with proper frontmatter for the Next.js blog route
 *   4. Writes the file to <RETIRE_PORTAL_PATH>/apps/portal/app/blog/<slug>/page.mdx
 *   5. Moves the draft to content/blog/published/<slug>.md
 *      and updates frontmatter (status: published, published_at, published_url)
 *   6. Prints (does NOT run) the gh pr create command
 *
 * What this script does NOT do:
 *   - Push to git
 *   - Create the PR
 *   - Modify any branch
 *   - Touch existing files in Retire-Portal other than the new MDX route
 *
 * Usage:
 *   npm run publish-blog -- <slug>
 */
import { readFileSync, mkdirSync, writeFileSync, renameSync, existsSync } from 'node:fs';
import { dirname } from 'node:path';
import matter from 'gray-matter';
import { env } from '../lib/env.js';
import { isoDate } from '../lib/markdown.js';

const slug = process.argv[2];

if (!slug) {
  console.error('Usage: npm run publish-blog -- <slug>');
  process.exit(1);
}

const draftPath = `content/blog/drafts/${slug}.md`;

if (!existsSync(draftPath)) {
  console.error(`❌ Draft not found: ${draftPath}`);
  process.exit(1);
}

const raw = readFileSync(draftPath, 'utf8');
const parsed = matter(raw);
const fm = parsed.data as Record<string, unknown>;

// Validate frontmatter
const required = ['title', 'slug', 'persona', 'primary_tool', 'primary_keyword'];
const missing = required.filter((k) => !fm[k]);
if (missing.length > 0) {
  console.error(`❌ Draft missing required frontmatter: ${missing.join(', ')}`);
  process.exit(1);
}

if (fm.slug !== slug) {
  console.error(`❌ Frontmatter slug "${fm.slug}" does not match filename "${slug}"`);
  process.exit(1);
}

const today = isoDate();
const portalBlogDir = `${env.RETIRE_PORTAL_PATH}/apps/portal/app/blog/${slug}`;
const mdxPath = `${portalBlogDir}/page.mdx`;
const publishedUrl = `${env.SITE_URL}/blog/${slug}`;

const mdxFrontmatter = {
  title: fm.title,
  description: fm.description ?? '',
  date: today,
  persona: fm.persona,
  primary_tool: fm.primary_tool,
  primary_keyword: fm.primary_keyword,
};

const mdxBody = parsed.content;

const mdxContent =
  '---\n' +
  Object.entries(mdxFrontmatter)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n') +
  '\n---\n\n' +
  mdxBody;

mkdirSync(dirname(mdxPath), { recursive: true });
writeFileSync(mdxPath, mdxContent, 'utf8');
console.log(`✅ Wrote ${mdxPath}`);

// Move draft → published with updated frontmatter
const publishedFm = {
  ...fm,
  status: 'published',
  published_at: today,
  published_url: publishedUrl,
};
const publishedContent =
  '---\n' +
  Object.entries(publishedFm)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n') +
  '\n---\n\n' +
  parsed.content;

const publishedPath = `content/blog/published/${slug}.md`;
mkdirSync('content/blog/published', { recursive: true });
writeFileSync(publishedPath, publishedContent, 'utf8');

// Remove the draft (rename to /dev/null is unsafe; we writeFileSync to published and then unlink the draft)
import('node:fs').then(({ unlinkSync }) => {
  unlinkSync(draftPath);
  console.log(`✅ Moved draft → ${publishedPath}`);

  console.log('\n📋 To open the PR (run this manually from Retire-Portal):');
  console.log(`\n  cd ${env.RETIRE_PORTAL_PATH}`);
  console.log(`  git checkout -b blog/${slug}`);
  console.log(`  git add apps/portal/app/blog/${slug}/page.mdx`);
  console.log(`  git commit -m "blog: ${fm.title}"`);
  console.log(`  gh pr create --base main --title "blog: ${fm.title}" --body "Publishes ${slug}. See: ${publishedUrl}"`);
  console.log('\n⚠️  This script did NOT push, branch, or create the PR. Run the commands above when ready.');
});
