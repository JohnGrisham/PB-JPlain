import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { CallToAction } from '../../call-to-action'
import { ConvertContext } from '../../../contexts'
import { Post } from '../../blog'
import { Query } from '../../../interfaces'
import { getUnixTime } from 'date-fns'

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
								author {
									avatar
									name
								}
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

	const { hasBeenDismissed, setIsOpen } = React.useContext(ConvertContext)

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

			return getUnixTime(new Date(b.node.frontmatter.date)) - getUnixTime(new Date(a.node.frontmatter.date))
		})

		const { node } = sortedPosts[0]

		return node
	}, [posts])

	const onClickLatestPost = React.useCallback(
		(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
			if (!hasBeenDismissed) {
				event.preventDefault()
				setIsOpen(true)
			}
		},
		[hasBeenDismissed, setIsOpen]
	)

	return (
		<Styled.Conversions>
			{latestPost && latestPost.frontmatter && (
				<Styled.LatestPost>
					<h2>Latest Post</h2>
					<Post
						className="largeItem"
						excerpt={latestPost.excerpt}
						{...latestPost.frontmatter}
						onClick={onClickLatestPost}
					/>
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
