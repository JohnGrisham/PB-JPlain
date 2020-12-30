import { Button, Card } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import plan from './modules'
import styled from 'styled-components'

export const FeatureList = styled.ul.attrs({
	className: plan.featureList
})``

export const FeatureIcon = styled(FontAwesomeIcon).attrs({
	className: plan.featureIcon,
	color: '#4e2378',
	icon: faPlus
})``

export const Plan = styled(Card).attrs({
	className: plan.planWrapper,
	raised: true
})``

export const PlanAction = styled(Button).attrs({
	className: plan.planAction,
	color: 'primary',
	type: 'button',
	variant: 'contained'
})``

export const PlanMotion = styled(motion.div).attrs({
	className: plan.planMotion
})``
