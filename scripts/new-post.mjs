// Usage: npm run new -- "My Post Title" [tag1,tag2]
// Creates src/content/blog/<slug>.md with frontmatter filled in.
import { existsSync, writeFileSync } from 'node:fs';

const [title, tagArg = ''] = process.argv.slice(2);
if (!title) {
	console.error('Usage: npm run new -- "My Post Title" [tag1,tag2]');
	process.exit(1);
}

const slug = title
	.toLowerCase()
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/^-|-$/g, '');
const file = `src/content/blog/${slug}.md`;
if (existsSync(file)) {
	console.error(`${file} already exists`);
	process.exit(1);
}

const tags = tagArg
	.split(',')
	.map((t) => t.trim())
	.filter(Boolean);
const today = new Date().toISOString().slice(0, 10);

writeFileSync(
	file,
	`---
title: ${JSON.stringify(title)}
description: ""
pubDate: ${today}
tags: ${JSON.stringify(tags)}
draft: true
---

Write here. Put images in src/content/blog/images/ and reference them like:

![Alt text](./images/example.png)
`,
);
console.log(`Created ${file} (draft: true — flip to false to publish)`);
