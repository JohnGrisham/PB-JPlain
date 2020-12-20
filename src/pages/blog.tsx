import * as React from 'react'
import { Blog, Layout, SEO } from '../components'
import { Query } from '../interfaces'
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

const BlogPage: React.FC<{ data: { allMarkdownRemark: Query['allMarkdownRemark'] } }> = ({
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
