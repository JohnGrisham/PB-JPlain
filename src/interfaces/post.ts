export interface Post {
	id: string
	frontmatter: { title: string; date: string }
	excerpt: string
	imageSrc?: string
}
