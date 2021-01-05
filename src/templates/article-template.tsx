import * as React from 'react'
import { Article, Heading, List, Paragraph, PostTitle, SubHeading, Title } from './styles'
import { Image, Layout } from '../components'
import { Query } from '../interfaces'
import RehypeReact from 'rehype-react'
import { format } from 'date-fns'
import { graphql } from 'gatsby'

export const query = graphql`
	query($slug: String!) {
		allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
			edges {
				node {
					frontmatter {
						date
						featuredImage
						title
					}
					excerpt
					htmlAst
				}
			}
		}
	}
`

const articleTemplate: React.FC<{ data: { allMarkdownRemark: Query['allMarkdownRemark'] } }> = ({ data }) => {
	if (!data) {
		return null
	}

	const {
		allMarkdownRemark: {
			edges: [
				{
					node: { frontmatter, htmlAst }
				}
			]
		}
	} = { ...data }

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const renderAst = new (RehypeReact as any)({
		components: {
			h1: Heading,
			h2: SubHeading,
			p: Paragraph,
			ul: List
		},
		createElement: React.createElement
	}).Compiler

	return (
		<Layout>
			<Article>
				{frontmatter && (
					<>
						<Title>{frontmatter.title}</Title>
						{(frontmatter.featuredImage || frontmatter.date) && (
							<PostTitle>
								{frontmatter.featuredImage && (
									<Image
										src={frontmatter.featuredImage}
										type="fluid"
										style={frontmatter.date ? { marginBottom: '10px' } : undefined}
									/>
								)}
								{frontmatter.date && (
									<SubHeading style={{ textAlign: 'center' }}>
										{format(new Date(frontmatter.date), 'MMM do yyyy')}
									</SubHeading>
								)}
							</PostTitle>
						)}
					</>
				)}
				{renderAst(htmlAst)}
			</Article>
		</Layout>
	)
}

export default articleTemplate
