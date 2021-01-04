import * as React from 'react'
import * as Styled from './styles'
import { MarkdownRemark, MarkdownRemarkFrontmatter } from '../../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '../grid'
import { Post } from './post'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
interface BlogProps {
	posts: MarkdownRemark[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
	const blogItems = React.useMemo(() => {
		const postsWithFrontMatter = posts.filter(({ frontmatter }) => frontmatter)

		if (postsWithFrontMatter.length <= 0) {
			return null
		}

		return postsWithFrontMatter.map(({ frontmatter, excerpt, id }) => (
			<Post key={id} {...(frontmatter as MarkdownRemarkFrontmatter)} excerpt={excerpt} />
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
