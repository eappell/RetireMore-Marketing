---
name: keyword-research
description: Use this skill when the user wants to research keywords for a topic cluster, find search opportunities, or map keywords to RetireMore tools and personas. Outputs a markdown analysis and an optional CSV.
---

# /keyword-research

Take a topic cluster and produce a markdown keyword research doc plus a CSV draft, both saved to `seo/keyword-research/`.

## Inputs

A cluster topic (e.g., "Roth conversions," "expat retirement," "Medicare IRMAA," "retirement identity").

## Steps

1. **Read** [brand/product-tools.md](../../../brand/product-tools.md) and [brand/audience-personas.md](../../../brand/audience-personas.md). Identify the primary tool and primary persona this cluster maps to.

2. **Expand the cluster** via the `seo-strategist` subagent. Use WebSearch to surface:
   - Head terms (high volume, broad intent)
   - Mid-tail (more specific, commercial intent)
   - Long-tail (specific question phrasing)
   - "People Also Ask" patterns
   - Related-searches patterns

3. **Score each keyword** on:
   - Estimated volume (low / medium / high — we don't have Ahrefs in this repo, so estimate)
   - Intent (informational, commercial, transactional)
   - Difficulty (low / medium / high based on SERP scan)
   - Persona match
   - Tool fit
   - Cluster role (pillar / supporting / FAQ)

4. **Output** as `seo/keyword-research/<cluster-slug>.md` with this structure:

   ```markdown
   # Keyword Cluster: <Topic>

   **Primary tool:** <tool>
   **Primary persona:** <persona>
   **Cluster strategy:** <1-paragraph framing — what we'll write, in what order, why we can win>

   ## Pillar keyword
   `<keyword>` — <one-line rationale>

   ## Supporting keywords
   | Keyword | Volume | Intent | Difficulty | Notes |
   |---|---|---|---|---|
   | <kw> | M | Info | M | <note> |

   ## Long-tail / FAQ
   - <question>
   - <question>

   ## SERP white space
   <2–3 bullets on what's missing in current results that we can credibly fill>

   ## Suggested post sequence
   1. <pillar post slug>
   2. <supporting post slug>
   3. <supporting post slug>

   ## Internal linking notes
   <how the posts in this cluster will link to each other and to the primary tool>
   ```

5. **Optionally write a CSV** at `seo/keyword-research/<cluster-slug>.csv` with the same data in spreadsheet form.

6. **Report back** with the file path and the 3 keywords you'd write next.

## Rules

- Don't invent search volume numbers. Use "low / medium / high" if you don't have a verified source.
- Every cluster must map to a primary tool. We don't write about what we don't have.
- Long-tail beats head term. Volume is vanity; intent is conversion.
