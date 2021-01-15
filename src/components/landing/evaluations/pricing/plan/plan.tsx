import * as React from 'react'
import * as Styled from './styles'
import { Feature, Plan as PlanType } from '../../../../../interfaces'
import { Image } from '../../../../image'
import { IntersectionContext } from '../../../../intersection-observer'

interface PlanProps extends PlanType {
	sharedFeatures?: Feature[]
	planAction?: () => void
}

const planVariants = {
	flip: {
		rotateY: 0
	},
	hide: {
		rotateY: 90
	}
}

const Plan: React.FC<PlanProps> = ({ action, features, image, planAction, price, sharedFeatures = [], type }) => {
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
				{image && <Image src={image.src} height={image.height} width={image.width} />}
				<h1>{price}</h1>
				<Styled.FeatureList>
					{[...sharedFeatures, ...(features || [])].map((feature, i) => (
						<li key={`level-${feature.planLevel}-${i}`}>
							<Styled.FeatureIcon />
							{feature.description}
						</li>
					))}
				</Styled.FeatureList>
				{action && <Styled.PlanAction href={action.href && !planAction ? action.href : undefined}>{action.actionContent}</Styled.PlanAction>}
			</Styled.Plan>
		</Styled.PlanMotion>
	)
}

export default Plan
