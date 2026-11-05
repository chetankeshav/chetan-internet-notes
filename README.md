# Personal blog

Astro + Pagefind. Posts are Markdown files; images live next to them. Tags and search are built in.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (once) |
| `npm run dev` | Local dev server at http://localhost:4321 (shows drafts; search not available) |
| `npm run new -- "Post Title" tag1,tag2` | Create a new draft post |
| `npm run build` | Build the site and the search index into `dist/` |
| `npm run preview` | Serve `dist/` locally, including working search |

## Writing a post

Create `src/content/blog/<slug>.md` (or use `npm run new`). The filename becomes the URL: `/blog/<slug>/`.

```markdown
---
title: "My Post"
description: "Optional one-line summary"
pubDate: 2026-11-04
tags: ["notes", "architecture"]
draft: false          # optional; true = hidden from the built site
heroImage: ./images/cover.jpg   # optional
---

Text here.

![Diagram](./images/diagram.png)
```

- **Images:** put them in `src/content/blog/images/` and reference them with `./images/...`. Astro optimizes them at build time.
- **Tags:** lowercase is applied automatically. Each tag gets a page at `/tags/<tag>/`.
- **Frontmatter is validated** (`src/content.config.ts`); a missing `title` or bad date fails the build with a clear error.

## Publishing (GitHub Pages)

1. Push this folder to a GitHub repo with `main` as the default branch.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and search index and deploys it.

The workflow sets the site URL and base path (`/<repo-name>/`) automatically. Locally, both default to `http://localhost:4321/`.

## Customizing

- Site title, description, author: `src/consts.ts`
- Styles: `src/styles/global.css`
- Post page layout: `src/layouts/BlogPost.astro`
