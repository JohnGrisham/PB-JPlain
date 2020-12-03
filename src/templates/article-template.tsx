import * as React from 'react'
import { BlogData } from '../interfaces'
import { graphql } from 'gatsby'

export const query = graphql`
	query($slug: String!) {
		allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
			edges {
				node {
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					excerpt
				}
			}
		}
	}
`

const articleTemplate: React.FC<BlogData> = ({
	data: {
		allMarkdownRemark: {
			edges: [
				{
					node: {
						frontmatter: { title }
					}
				}
			]
		}
	}
}) => {
	return <div>{title}</div>
}

export default articleTemplate
