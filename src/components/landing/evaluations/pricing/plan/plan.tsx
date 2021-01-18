import * as React from 'react'
import * as Styled from './styles'
import { Feature, Plan as PlanType } from '../../../../../interfaces'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Image } from '../../../../image'
import { IntersectionContext } from '../../../../intersection-observer'

interface PlanProps extends PlanType {
	onAction?: () => void
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

const Plan: React.FC<PlanProps> = ({ action, features, image, onAction, price, sharedFeatures = [], type }) => {
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
						<li key={`level-${feature.planLevel}-${i}`} style={!feature.included ? { opacity: 0.6 } : undefined}>
							<Styled.FeatureIcon icon={feature.included ? faPlus : faTimes} />
							{feature.description}
						</li>
					))}
				</Styled.FeatureList>
				{action && <Styled.PlanAction href={action.href && !onAction ? action.href : undefined} onClick={onAction}>{action.actionContent}</Styled.PlanAction>}
			</Styled.Plan>
		</Styled.PlanMotion>
	)
}

export default Plan
