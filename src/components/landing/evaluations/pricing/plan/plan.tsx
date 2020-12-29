import * as React from 'react'
import * as Styled from './styles'
import { Feature, Plan as PlanType } from '../../../../../interfaces'
import { IntersectionContext } from '../../../../intersection-observer'

interface PlanProps extends PlanType {
	sharedFeatures?: Feature[]
}

const planVariants = {
	flip: {
		rotateY: 0
	},
	hide: {
		rotateY: 90
	}
}

const Plan: React.FC<PlanProps> = ({ action, features, price, sharedFeatures, type }) => {
	const { inThreshold } = React.useContext(IntersectionContext)

	const motionProps = React.useMemo(
		() => ({
			animate: inThreshold ? 'flip' : 'hide',
			exit: 'hide',
			initial: 'hide',
			transition: {
				duration: 1,
				ease: 'easeInOut'
			}
		}),
		[inThreshold]
	)

	return (
		<Styled.PlanMotion {...motionProps} variants={planVariants}>
			<Styled.Plan>
				<h2>{type}</h2>
			</Styled.Plan>
		</Styled.PlanMotion>
	)
}

export default Plan
