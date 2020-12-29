import { Card } from '@material-ui/core'
import { motion } from 'framer-motion'
import plan from './modules'
import styled from 'styled-components'

export const Plan = styled(Card).attrs({
	className: plan.planWrapper,
	raised: true
})``

export const PlanMotion = styled(motion.div).attrs({
	className: plan.planMotion
})``
