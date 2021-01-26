import * as React from 'react'
import * as Styled from './styles'
import { Benefits } from './benefits'
import { Conversions } from './conversions'
import { Description } from './description'
import { Evaluations } from './evaluations'
import { useWindowSize } from '../../utils'

export interface LandingProps {
	callToAction?: string
	includeLandingForground?: boolean
	onClickCTA?: () => void
	heading?: string
	subHeading?: string
}

const Landing: React.FC<LandingProps> = ({ callToAction, includeLandingForground = true, onClickCTA, heading, subHeading }) => {
	const { width } = useWindowSize()

	const landingForgroundSize = React.useMemo(() => {
		if(!includeLandingForground) {
			return { height: undefined, width: undefined }
		}

		if(!width) {
			return { height: 0, width: 0 }
		}

		if(width > 1200) {
			return { height: 700, width: 1000 }
		}

		if(width > 950) {
			return { height: 500, width: 600 }
		}

		if(width > 700) {
			return { height: 400, width: 500 }
		}

		return { height: 200, width: 300 }
	}, [width])

	return (
		<Styled.Landing id="top">
			<Styled.LandingImageWrapper>
				{heading && <Styled.Heading>{heading}</Styled.Heading>}
				{subHeading && <Styled.SubHeading>{subHeading}</Styled.SubHeading>}
				{callToAction && (
					<Styled.CallToAction href={!onClickCTA ? "#CTA" : undefined} onClick={onClickCTA} style={includeLandingForground ? { bottom: '40%' } : undefined}>
						<h4>{callToAction}</h4>
					</Styled.CallToAction>
				)}
				<Styled.LandingBackground />
					<Styled.LandingForgroundWrapper>
						{includeLandingForground && <Styled.LandingForgroundImage {...landingForgroundSize} />}
					</Styled.LandingForgroundWrapper>
				<Styled.GradientDrip />
			</Styled.LandingImageWrapper>
			<Description />
			<Benefits />
			<Evaluations />
			<Conversions />
		</Styled.Landing>
	)
}

export default Landing
