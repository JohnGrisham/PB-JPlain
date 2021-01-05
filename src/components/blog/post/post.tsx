import * as React from 'react'
import * as Styled from './styles'
import { MarkdownRemark, MarkdownRemarkFrontmatter } from '../../../interfaces'
import { CardProps } from '@material-ui/core'
import { format } from 'date-fns'

interface Post extends MarkdownRemarkFrontmatter, Omit<CardProps, 'title'> {
	excerpt: MarkdownRemark['excerpt']
}

const Post: React.FC<Post> = ({ className, date, excerpt, featuredImage, slug, title }) => {
	return (
		<Styled.PostItem className={className}>
			<Styled.PostLink to={`/blog/${slug}`}>
				{featuredImage && <Styled.FeaturedImage src={featuredImage} />}
				<Styled.PostContent>
					<Styled.PostContentUpper>
						<h3>{title}</h3>
						{date && <h5>{format(new Date(date), 'MMM do yyyy')}</h5>}
					</Styled.PostContentUpper>
					<p>{excerpt}</p>
				</Styled.PostContent>
			</Styled.PostLink>
		</Styled.PostItem>
	)
}

export default Post
