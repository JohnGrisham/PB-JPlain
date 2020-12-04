import * as React from 'react'
import { Blog, Layout, SEO } from '../components'
import { BlogData } from '../interfaces'
import { graphql } from 'gatsby'

export const query = graphql`
	query {
		allMarkdownRemark {
			totalCount
			edges {
				node {
					id
					frontmatter {
						slug
						title
						date
						featuredImage
					}
					excerpt
				}
			}
		}
	}
`

const BlogPage: React.FC<BlogData> = ({
	data: {
		allMarkdownRemark: { edges }
	}
}) => {
	return (
		<Layout>
			<SEO title="Blog" />
			<Blog posts={edges.map(({ node }) => node)} />
		</Layout>
	)
}

export default BlogPage
