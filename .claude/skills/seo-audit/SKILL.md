---
name: seo-audit
description: Use this skill when the user wants an SEO audit of a specific URL — a RetireMore page, a blog post, or a competitor. Outputs a markdown audit with prioritized fixes.
---

# /seo-audit

Audit a single URL for technical, on-page, and content SEO. Output to `seo/audits/YYYY-MM-DD-<slug>.md`.

## Inputs

A URL (e.g., `https://retiremore.com/`, `https://retiremore.com/upgrade`, or a blog post URL).

## Steps

1. **Fetch the URL** with WebFetch. Extract:
   - `<title>`
   - Meta description
   - H1, H2 hierarchy
   - Canonical
   - Robots meta
   - OG and Twitter card tags
   - JSON-LD schema blocks
   - Word count
   - Number of internal links
   - Number of external links
   - Image alt text presence

2. **Check the technical foundations:**
   - Status code 200
   - Title length 50–60 chars
   - Description length 150–160 chars
   - Single H1
   - Logical H2/H3 hierarchy
   - Canonical present and correct
   - Schema present (Article / Product / Organization / FAQPage as appropriate)
   - OG and Twitter tags present

3. **Check the content:**
   - Primary keyword in title, H1, first 100 words, and naturally throughout
   - Word count appropriate for intent (1,200–2,000 for SEO posts)
   - Internal links to relevant tools and other content
   - External citations to authoritative sources
   - Brand voice match (read [brand/voice.md](../../../brand/voice.md) and assess)
   - CTA present and appropriate

4. **Score each finding** on:
   - Severity: critical / high / medium / low
   - Effort: low / medium / high

5. **Write the audit** to `seo/audits/YYYY-MM-DD-<slug>.md`:

   ```markdown
   # SEO Audit — <URL>
   **Date:** YYYY-MM-DD

   ## Snapshot
   - Title: "<title>" (<N> chars — ✅ / ⚠️ / ❌)
   - Description: "<desc>" (<N> chars — ✅ / ⚠️ / ❌)
   - H1: "<h1>"
   - Word count: <N>
   - Internal links: <N>
   - Schema present: <list>

   ## Critical issues
   - <issue>

   ## High-priority fixes
   - <issue> — <recommended fix>

   ## Medium-priority fixes
   - <issue>

   ## Low / nice-to-have
   - <item>

   ## Voice / brand assessment
   <2–3 sentences>

   ## Recommended next actions (ranked)
   1. <action>
   2. <action>
   3. <action>
   ```

6. **Report back** with the audit path and the top 3 fixes.

## Rules

- Audit one URL at a time. Don't batch.
- Don't pretend to have data you can't fetch (e.g., backlinks, traffic).
- Be honest about competitor SERPs — if we're outgunned, say so.
