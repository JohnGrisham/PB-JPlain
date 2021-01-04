import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { CallToAction } from '../../call-to-action'
import { Post } from '../../blog'
import { Query } from '../../../interfaces'
import moment from 'moment'

const Conversions: React.FC = () => {
	const {
		allMarkdownRemark: { edges: posts }
	} = useStaticQuery<{ allMarkdownRemark: Query['allMarkdownRemark'] }>(
		graphql`
			query {
				allMarkdownRemark {
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
	)

	const latestPost = React.useMemo(() => {
		if (!posts || posts.length <= 0) {
			return null
		}

		const sortedPosts = posts.sort((a, b) => {
			if (!a.node?.frontmatter?.date && !b.node?.frontmatter?.date) {
				return 0
			}

			if (!a.node?.frontmatter?.date) {
				return 1
			}

			if (!b.node?.frontmatter?.date) {
				return -1
			}

			return moment(new Date(b.node.frontmatter.date)).unix() - moment(new Date(a.node.frontmatter.date)).unix()
		})

		const { node } = sortedPosts[0]

		return node
	}, [posts])

	return (
		<Styled.Conversions>
			{latestPost && latestPost.frontmatter && (
				<Styled.LatestPost>
					<h2>Latest Post</h2>
					<Post className="largeItem" excerpt={latestPost.excerpt} {...latestPost.frontmatter} />
				</Styled.LatestPost>
			)}
			<Styled.CallToActionWrapper style={!latestPost?.frontmatter ? { marginTop: '150px' } : undefined}>
				{latestPost && latestPost.frontmatter && <Styled.CallToActionDrip />}
				<CallToAction />
			</Styled.CallToActionWrapper>
		</Styled.Conversions>
	)
}

export default Conversions
