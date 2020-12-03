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
})`
	h3 {
		margin-bottom: 0px;
	}

	h5 {
		margin-top: 0px;
	}

	span {
		padding: 2em;
	}
`

export const PostLink = styled(Link).attrs({
	className: blog.postLink
})``
