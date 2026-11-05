import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().default(''),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Normalized to lowercase so "Astro" and "astro" are the same tag
			tags: z.array(z.string().transform((t) => t.trim().toLowerCase())).default([]),
			// Drafts are visible in `npm run dev` but excluded from the built site
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
