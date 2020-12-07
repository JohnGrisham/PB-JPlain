export interface Post {
	id: string
	frontmatter: { title: string; slug: string; date?: Date; featuredImage?: string }
	excerpt: string
}
