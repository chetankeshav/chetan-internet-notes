// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Chetan's internet notes";
export const SITE_DESCRIPTION = 'Notes and writing.';
export const AUTHOR = 'Your name here';

// Cards on the home page. `tag` links to /tags/<tag>/; omit it to link to all posts.
export const HOME_CARDS: { title: string; description: string; tag?: string }[] = [
	{ title: 'Book Recommendations', description: 'Books worth reading', tag: 'book-recommendation' },
	{ title: 'Recipes', description: 'Things worth cooking', tag: 'recipe' },
	{ title: 'All', description: 'Every post, newest first' },
];
