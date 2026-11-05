import { getCollection } from 'astro:content';

// Prefix a site-relative path with the configured base (e.g. "/my-repo" on GitHub Pages).
export function url(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}

// Published posts, newest first. Drafts are only included in dev.
export async function getPosts() {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Map of tag -> number of posts, sorted alphabetically.
export async function getTags() {
	const counts = new Map<string, number>();
	for (const post of await getPosts()) {
		for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
	}
	return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b));
}
