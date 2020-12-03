export interface Post {
	id: string
	frontmatter: { title: string; slug: string; date: string; featuredImage: string }
	excerpt: string
}
