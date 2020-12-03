import { Post } from '../post'

export interface BlogData {
	data: {
		allMarkdownRemark: {
			edges: Array<{ node: Post }>
		}
	}
}
