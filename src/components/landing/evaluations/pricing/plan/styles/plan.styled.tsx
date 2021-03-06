import { Button, Card } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const FeatureList = styled.ul`
	display: flex;
	flex-direction: column;

	li {
		border-bottom: 1px solid ${({ theme }) => theme.colors.black};
		text-align: left;
		padding: 0.5em;
		white-space: nowrap;
	}
`

export const FeatureIcon = styled(FontAwesomeIcon).attrs(({ theme }) => ({
	color: theme.colors.jelly
}))`
	margin-right: 0.5em;
`

export const Plan = styled(Card).attrs({
	raised: true
})`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 1em;

	h2 {
		margin-bottom: 0px;
	}
`

export const PlanAction = styled(Button).attrs({
	color: 'primary',
	type: 'button',
	variant: 'contained'
})`
	border-radius: 20px;
	font-size: 1em;
`

export const PlanMotion = styled(motion.div)`
	display: flex;
	perspective: 1000px;
	transform-style: preserve-3d;
`
