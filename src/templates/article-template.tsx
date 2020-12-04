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
						date
					}
					excerpt
				}
			}
		}
	}
`

const articleTemplate: React.FC<BlogData> = ({ data }) => {
	if (!data) {
		return null
	}

	const {
		allMarkdownRemark: {
			edges: [
				{
					node: { frontmatter }
				}
			]
		}
	} = { ...data }

	return <div>{frontmatter.title}</div>
}

export default articleTemplate
