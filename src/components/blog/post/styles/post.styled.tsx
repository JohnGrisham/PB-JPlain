import { Card } from '@material-ui/core'
import { Image } from '../../../image'
import { Link } from 'gatsby'
import post from './modules'
import styled from 'styled-components'

export const FeaturedImage = styled(Image).attrs(() => ({
	aspectRatio: 21 / 11,
	className: post.featuredImage,
	type: 'fluid'
}))``

export const PostItem = styled(Card).attrs({
	className: post.postItem,
	raised: true
})``

export const PostContent = styled.span.attrs({
	className: post.postContent
})``

export const PostContentUpper = styled.div.attrs({
	className: post.postContentUpper
})``

export const PostLink = styled(Link).attrs({
	className: post.postLink
})``
