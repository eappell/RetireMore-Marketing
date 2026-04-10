/**
 * Generate sitemap.xml from published blog posts + canonical site routes.
 *
 * Reads:
 *   - content/blog/published/*.md (frontmatter must contain slug + published_at)
 *   - hardcoded canonical routes (home, /upgrade, /demo, /blog)
 *
 * Writes:
 *   - data/reports/sitemap-<date>.xml (preview)
 *
 * To deploy: copy the generated sitemap to Retire-Portal/apps/portal/public/sitemap.xml
 * Manually — this script does NOT touch Retire-Portal.
 *
 * Usage:
 *   npm run seo:sitemap
 */
import { readdirSync, readFileSync } from 'node:fs';
import matter from 'gray-matter';
import { env } from '../lib/env.js';
import { writeReport, isoDate } from '../lib/markdown.js';

const SITE = env.SITE_URL.replace(/\/$/, '');

interface Url {
  loc: string;
  lastmod?: string;
  changefreq?: 'daily' | 'weekly' | 'monthly';
  priority?: number;
}

const STATIC_URLS: Url[] = [
  { loc: `${SITE}/`, changefreq: 'weekly', priority: 1.0 },
  { loc: `${SITE}/upgrade`, changefreq: 'monthly', priority: 0.9 },
  { loc: `${SITE}/demo`, changefreq: 'monthly', priority: 0.8 },
  { loc: `${SITE}/blog`, changefreq: 'weekly', priority: 0.8 },
];

function readPublished(): Url[] {
  const dir = 'content/blog/published';
  let files: string[];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }

  return files.map((f) => {
    const raw = readFileSync(`${dir}/${f}`, 'utf8');
    const fm = matter(raw).data as { slug?: string; published_at?: string };
    const slug = fm.slug ?? f.replace(/\.md$/, '');
    return {
      loc: `${SITE}/blog/${slug}`,
      lastmod: fm.published_at?.slice(0, 10) ?? undefined,
      changefreq: 'monthly' as const,
      priority: 0.7,
    };
  });
}

function toXml(urls: Url[]): string {
  const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
  for (const u of urls) {
    lines.push('  <url>');
    lines.push(`    <loc>${u.loc}</loc>`);
    if (u.lastmod) lines.push(`    <lastmod>${u.lastmod}</lastmod>`);
    if (u.changefreq) lines.push(`    <changefreq>${u.changefreq}</changefreq>`);
    if (u.priority !== undefined) lines.push(`    <priority>${u.priority.toFixed(1)}</priority>`);
    lines.push('  </url>');
  }
  lines.push('</urlset>');
  return lines.join('\n');
}

function main() {
  const urls = [...STATIC_URLS, ...readPublished()];
  const xml = toXml(urls);
  const path = `data/reports/sitemap-${isoDate()}.xml`;
  writeReport(path, xml);
  console.log(`✅ Wrote ${path} with ${urls.length} URLs`);
  console.log(`   To deploy: cp ${path} ${env.RETIRE_PORTAL_PATH}/apps/portal/public/sitemap.xml`);
}

main();
