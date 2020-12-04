import * as React from 'react'
import * as Styled from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Post } from '../../interfaces'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

interface BlogProps {
	posts: Post[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
	const postColumns = React.useMemo(() => {
		if (!posts) {
			return null
		}

		return posts.length < 3 ? posts.length : 6
	}, [posts])

	return (
		<Styled.Blog style={postColumns ? { gridTemplateColumns: `repeat(${postColumns}, 1fr)` } : undefined}>
			{posts.length > 0 ? (
				posts.map(({ frontmatter: { date, featuredImage, slug, title }, excerpt, id }) => (
					<Styled.PostItem
						key={id}
						style={postColumns && postColumns < 3 ? { gridColumn: 'span 1', gridColumnEnd: 'auto' } : undefined}>
						<Styled.PostLink to={slug}>
							<Styled.FeaturedImage src={featuredImage} />
							<span>
								<h3>{title}</h3>
								<h5>{moment(date).format('MM/DD/YYYY')}</h5>
								<p>{excerpt}</p>
							</span>
						</Styled.PostLink>
					</Styled.PostItem>
				))
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
