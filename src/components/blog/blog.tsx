import * as React from 'react'
import * as Styled from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '../grid'
import { Post } from '../../interfaces'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

interface BlogProps {
	posts: Post[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
	const blogItems = React.useMemo(() => {
		if (posts.length <= 0) {
			return null
		}

		return posts.map(({ frontmatter: { date, featuredImage, slug, title }, excerpt, id }) => (
			<Styled.PostItem key={id}>
				<Styled.PostLink to={slug}>
					{featuredImage && <Styled.FeaturedImage src={featuredImage} />}
					<span>
						<h3>{title}</h3>
						{date && <h5>{moment(date).format('MMM Do YYYY')}</h5>}
						<p>{excerpt}</p>
					</span>
				</Styled.PostLink>
			</Styled.PostItem>
		))
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
