---
name: new-blog-post
description: Use this skill when the user wants to draft a new blog post for retiremore.com from a topic, keyword, or rough idea. Takes the topic from keyword to publishable draft via brief → SERP analysis → outline → full draft, all in brand voice.
---

# /new-blog-post

End-to-end pipeline that takes a topic and produces a publish-ready blog draft in `content/blog/drafts/<slug>.md`.

## Inputs

Topic, keyword, or rough idea — e.g., "social security spousal benefits" or "irmaa cliffs roth conversions" or "best states for retirees with low taxes."

## Steps

1. **Read the brand context.** [CLAUDE.md](../../../CLAUDE.md), [brand/voice.md](../../../brand/voice.md), [brand/audience-personas.md](../../../brand/audience-personas.md), [brand/product-tools.md](../../../brand/product-tools.md).

2. **Run a quick SERP scan** with WebSearch on the primary keyword. Note who's ranking, the dominant content angle, and any white space we can credibly own. Save findings as a SERP section in the brief.

3. **Write the brief** at `content/blog/briefs/<slug>.md` using the template in [.claude/agents/seo-strategist.md](../../agents/seo-strategist.md). Include:
   - Primary + secondary keywords
   - Persona + primary tool from `brand/product-tools.md`
   - SERP differentiation strategy
   - Outline (H1, H2s, H3s)
   - Internal links to include
   - Sources to cite
   - Schema (Article + FAQPage if applicable)

4. **Confirm the brief with the user** before drafting. Show the brief and ask: "Does this angle work? Want me to adjust the outline before I draft the full post?" Wait for confirmation.

5. **Draft the full post** via the `content-writer` subagent. Output to `content/blog/drafts/<slug>.md` with proper frontmatter.

6. **Propose internal links.** Suggest which existing tools and (if applicable) existing blog posts to link to. Update [seo/internal-linking-map.md](../../../seo/internal-linking-map.md) with the new edges.

7. **Generate the schema** as a separate code block in the draft (JSON-LD) using a template from [seo/schema-templates/](../../../seo/schema-templates/).

8. **Report back** with the draft path and a 1-paragraph summary of the angle and source citations, so the user can review.

## Rules

- Do not skip the brief step. The brief is what makes the draft good.
- Cite sources. No invented stats.
- Voice rules in [brand/voice.md](../../../brand/voice.md) are non-negotiable.
- Link to the relevant tool exactly once.
- Add the disclaimer footer if the post gives specific numerical guidance.
