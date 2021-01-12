import * as React from 'react'
import * as Styled from './styles'
import { Benefits } from './benefits'
import { Conversions } from './conversions'
import { Description } from './description'
import { Evaluations } from './evaluations'

export interface LandingProps {
	callToAction?: string
	heading?: string
	subHeading?: string
}

const Landing: React.FC<LandingProps> = ({ callToAction, heading, subHeading }) => {
	return (
		<Styled.Landing id="top">
			<Styled.LandingImageWrapper>
				{heading && <Styled.Heading>{heading}</Styled.Heading>}
				{subHeading && <Styled.SubHeading>{subHeading}</Styled.SubHeading>}
				{callToAction && (
					<Styled.CallToAction>
						<h4>{callToAction}</h4>
					</Styled.CallToAction>
				)}
				<Styled.LandingImage />
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
