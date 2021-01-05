import { Avatar, Card } from '@material-ui/core'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const AttributedUserAvatar = styled(Avatar)`
	display: flex;
	margin-right: 0.5em;

	img {
		margin-bottom: 0px;
	}
`

export const AttributedUser = styled.div`
	display: flex;
	flex: 1;
	margin: 0.5em;

	${AttributedUserAvatar} {
		height: 65px;
		width: 65px;
	}
`

export const AttributedUserInformation = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	margin-bottom: 1em;

	h4 {
		margin-bottom: 0.5em;
	}

	span {
		text-align: initial;
	}
`

export const Testimony = styled(Card).attrs({
	raised: true
})`
	display: flex;
	flex-direction: column;
	flex: 1;
	max-width: 75vw;
	min-width: 300px;
	padding: 1em;

	@media all and (min-width: 900px) {
		max-width: 25vw;
	}
`

export const TestimonyMotion = styled(motion.div)`
	display: flex;
	perspective: 1000px;
	transform-style: preserve-3d;
`

export const Quote = styled.span`
	color: #383838;
	display: flex;
	flex: 1;
	margin-bottom: 1em;

	h3 {
		line-height: 1.5em;
		margin: 0 0.5em 0 0.5em;
		overflow: hidden;
	}
`
