import benefit from './modules'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Benefit = styled.div.attrs(() => ({
	className: benefit.benefitWrapper
}))``

export const BenefitMotionImage = styled(motion.div).attrs(() => ({
	className: `${benefit.benefitMotion} ${benefit.benefitMotionImage}`
}))``

export const BenefitMotionText = styled(motion.div).attrs(() => ({
	className: `${benefit.benefitMotion} ${benefit.benefitMotionText}`
}))``
