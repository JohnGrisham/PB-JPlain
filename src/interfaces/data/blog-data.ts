import { MarkdownRemark } from './graphqlGenerated'

export interface BlogData {
	data: {
		allMarkdownRemark: {
			edges: Array<{ node: MarkdownRemark }>
		}
	}
}
