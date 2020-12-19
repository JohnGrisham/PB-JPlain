import * as React from 'react'
import * as Styled from './styles'
import { BenefitsJson } from '../../interfaces'
import { Image } from '../image'
import { IntersectionContext } from '../intersection-observer'

const imageVariants = {
	hide: {
		marginLeft: '25%',
		opacity: 0
	},
	slide: {
		marginLeft: '50%',
		opacity: 1
	}
}

const textVariants = {
	hide: {
		marginRight: '25%',
		opacity: 0
	},
	slide: {
		marginRight: '50%',
		opacity: 1
	}
}

interface BenefitProps {
	benefit: BenefitsJson
}

export const Benefit: React.FC<BenefitProps> = ({ benefit }) => {
	const { inThreshold } = React.useContext(IntersectionContext)

	const motionProps = React.useMemo(
		() => ({
			animate: inThreshold ? 'slide' : 'hide',
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
		<Styled.Benefit>
			{benefit.image && (
				<Styled.BenefitMotionImage {...motionProps} variants={imageVariants}>
					<Image src={benefit.image.src} height={benefit.image.height} width={benefit.image.width} />
				</Styled.BenefitMotionImage>
			)}
			{benefit.description && (
				<Styled.BenefitMotionText {...motionProps} variants={textVariants}>
					<span>{benefit.description}</span>
				</Styled.BenefitMotionText>
			)}
		</Styled.Benefit>
	)
}
