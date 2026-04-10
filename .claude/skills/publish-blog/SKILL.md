---
name: publish-blog
description: Use this skill when the user wants to publish a finalized blog draft to retiremore.com. Writes the MDX file into the Retire-Portal repo and prints (does not run) the gh pr create command. Never pushes automatically.
---

# /publish-blog

Push a finalized draft from `content/blog/drafts/<slug>.md` into the Retire-Portal repo as MDX, ready for review and merge.

## Inputs

A draft slug — e.g., `social-security-spousal-benefits`. The draft must already exist at `content/blog/drafts/<slug>.md`.

## Steps

1. **Read the draft.** Confirm it has frontmatter (title, slug, status, persona, primary_tool, primary_keyword, created date) and a body.

2. **Lint check the draft against the brand voice.** If it fails any of these, stop and ask the user:
   - Has exclamation points in body
   - Has fear-mongering language ("shocking," "terrifying," "you'll regret")
   - Cites a stat without a footer reference
   - Doesn't link to at least one tool
   - Missing the disclaimer footer when it gives specific numerical guidance

3. **Run** `npm run publish-blog -- <slug>` which:
   - Reads the draft
   - Generates an MDX file with proper frontmatter for the Next.js blog route
   - Generates JSON-LD schema (Article + FAQPage if applicable)
   - Writes the file to `../Retire-Portal/apps/portal/app/blog/<slug>/page.mdx`
   - Moves the draft to `content/blog/published/<slug>.md` and updates its frontmatter (`status: published`, `published_url`, `published_at`)
   - Prints (does not run) the `gh pr create` command for the user to review

4. **Report back** with:
   - The MDX file path
   - The slug-tracker entry now in `content/blog/published/`
   - The exact `gh pr create` command, ready to copy-paste
   - A note that the script did NOT push, did NOT create the PR, and did NOT modify any branch

## Rules

- Never push to remote.
- Never create the PR automatically — print the command and let the user run it.
- Never modify the draft's content during publish; only frontmatter.
- If the lint check fails, stop and ask for confirmation before continuing.
- The Retire-Portal repo is on `main` — print a `gh pr create --base main` command.
