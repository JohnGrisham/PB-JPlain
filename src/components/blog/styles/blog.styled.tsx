import { Card } from '@material-ui/core'
import { Image } from '../../image'
import { Link } from 'gatsby'
import blog from './modules'
import styled from 'styled-components'

export const Blog = styled.div.attrs({
	className: blog.blogWrapper
})``

export const FeaturedImage = styled(Image).attrs(() => ({
	aspectRatio: 21 / 11,
	className: blog.featuredImage,
	type: 'fluid'
}))``

export const PostItem = styled(Card).attrs({
	className: blog.postItem,
	raised: true
})``

export const PostContent = styled.span.attrs({
	className: blog.postContent
})``

export const PostContentUpper = styled.div.attrs({
	className: blog.postContentUpper
})``

export const PostLink = styled(Link).attrs({
	className: blog.postLink
})``
