// blog/post/post.tsx
import * as React from 'react'
import * as Styled from './styles'
import { MarkdownRemark, MarkdownRemarkFrontmatter } from '../../../interfaces'
import { Avatar } from '../../avatar'
import { CardProps } from '@material-ui/core'
import { GatsbyLinkProps } from 'gatsby'
import { format } from 'date-fns'
interface Post extends MarkdownRemarkFrontmatter, Omit<CardProps, 'title' | 'onClick'> {
  excerpt: MarkdownRemark['excerpt']
  onClick?: GatsbyLinkProps<Record<string, unknown>>['onClick']
}
const Post: React.FC<Post> = ({ author, className, date, excerpt, featuredImage, onClick, slug, title }) => {
return (<Styled.PostItem className={className}>
<Styled.PostLink to={`/blog/${slug}`} onClick={onClick}>  {featuredImage && <Styled.FeaturedImage src={featuredImage} />}   <Styled.PostContent>
   <Styled.PostContentUpper>
   <h3>{title}</h3>
<Styled.Info>{author && (<Styled.AuthorInfo>
           {author.avatar && <Avatar avatar={author.avatar} />}
           <h4>{author.name}</h4>
      </Styled.AuthorInfo>
     )}
    {date && <h5>{format(new Date(date), 'MMM do yyyy')}</h5>}   </Styled.Info>
    </Styled.PostContentUpper><p>{excerpt}</p></Styled.PostContent>       </Styled.PostLink>
</Styled.PostItem>)
}
export default Post