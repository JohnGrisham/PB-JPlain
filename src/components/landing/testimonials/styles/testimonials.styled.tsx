import { Avatar, Card } from '@material-ui/core'
import styled from 'styled-components'
import testimonials from './modules'

export const AttributedUserAvatar = styled(Avatar).attrs({
	className: testimonials.attributedUserAvatar
})``

export const AttributedUser = styled.div.attrs({
	className: testimonials.attributedUser
})`
	${AttributedUserAvatar} {
		height: 65px;
		width: 65px;
	}
`

export const AttributedUserInformation = styled.div.attrs({
	className: testimonials.attributedUserInformation
})``

export const Testimonials = styled.div.attrs({
	className: testimonials.testimonialsWrapper
})``

export const Testimony = styled(Card).attrs({
	className: testimonials.testimony,
	raised: true
})``

export const Quote = styled.span.attrs({
	className: testimonials.quote
})``
