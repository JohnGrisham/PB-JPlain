import * as React from 'react'
import * as Styled from './styles'
import { MarkdownRemark, MarkdownRemarkFrontmatter } from '../../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '../grid'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

interface BlogProps {
	posts: MarkdownRemark[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
	const blogItems = React.useMemo(() => {
		const postsWithFrontMatter = posts.filter(({ frontmatter }) => frontmatter)

		if (postsWithFrontMatter.length <= 0) {
			return null
		}

		return postsWithFrontMatter.map(({ frontmatter, excerpt, id }) => {
			const { date, featuredImage, slug, title } = { ...(frontmatter as MarkdownRemarkFrontmatter) }

			return (
				<Styled.PostItem key={id}>
					<Styled.PostLink to={slug}>
						{featuredImage && <Styled.FeaturedImage src={featuredImage} />}
						<Styled.PostContent>
							<Styled.PostContentUpper>
								<h3>{title}</h3>
								{date && <h5>{moment(new Date(date)).format('MMM Do YYYY')}</h5>}
							</Styled.PostContentUpper>
							<p>{excerpt}</p>
						</Styled.PostContent>
					</Styled.PostLink>
				</Styled.PostItem>
			)
		})
	}, [posts])

	return (
		<Styled.Blog>
			{blogItems ? (
				<Grid items={blogItems} style={{ width: '90%' }} />
			) : (
				<h2>
					No blog posts yet but check back soon!&nbsp;
					<FontAwesomeIcon icon={faBlog} />
				</h2>
			)}
		</Styled.Blog>
	)
}

export default Blog
