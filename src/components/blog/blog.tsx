import * as React from 'react'
import * as Styled from './styles'
import { Link } from 'gatsby'
import { Post } from '../../interfaces'

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
			{posts.map(({ frontmatter: { date, featuredImage, slug, title }, excerpt, id }) => (
				<Styled.PostItem
					key={id}
					style={postColumns === 2 ? { gridColumn: 'span 1', gridColumnEnd: 'auto' } : undefined}>
					<Styled.PostLink to={slug}>
						<Styled.FeaturedImage src={featuredImage} />
						<span>
							<h3>{title}</h3>
							<h5>{date}</h5>
							<p>{excerpt}</p>
						</span>
					</Styled.PostLink>
				</Styled.PostItem>
			))}
		</Styled.Blog>
	)
}

export default Blog
