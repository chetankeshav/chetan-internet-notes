---
title: "Hello, world"
description: "The first post on this blog, and a quick reference for writing new ones."
pubDate: 2026-11-04T21:35:06Z
tags: ["meta", "writing"]
---

This is the first post. Every post is a Markdown file in `src/content/blog/`.

## Images

Put images in `src/content/blog/images/` and reference them with a relative path. Astro
optimizes them at build time (resizing, WebP, lazy loading).

![A placeholder landscape](./images/hello-world.svg)

## Tags

Add tags in the frontmatter as a list: `tags: ["meta", "writing"]`. Each tag gets its own page
under `/tags/`.

## Search

The search page is built by Pagefind after `astro build`, so it indexes every published post
automatically. Try searching for "placeholder".
