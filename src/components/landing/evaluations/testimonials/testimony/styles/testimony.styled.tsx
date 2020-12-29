import { Avatar, Card } from '@material-ui/core'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import testimony from './modules'

export const AttributedUserAvatar = styled(Avatar).attrs({
	className: testimony.attributedUserAvatar
})``

export const AttributedUser = styled.div.attrs({
	className: testimony.attributedUser
})`
	${AttributedUserAvatar} {
		height: 65px;
		width: 65px;
	}
`

export const AttributedUserInformation = styled.div.attrs({
	className: testimony.attributedUserInformation
})``

export const Testimony = styled(Card).attrs({
	className: testimony.testimonyWrapper,
	raised: true
})``

export const TestimonyMotion = styled(motion.div).attrs({
	className: testimony.testimonyMotion
})``

export const Quote = styled.span.attrs({
	className: testimony.quote
})``
