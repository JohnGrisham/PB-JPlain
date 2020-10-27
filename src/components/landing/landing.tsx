import * as React from 'react'
import * as Styled from './styles'
import { Description } from '../../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface LandingProps {
	callToAction?: string
	heading?: string
	subHeading?: string
	description?: Description
}

const Landing: React.FC<LandingProps> = ({ callToAction, description, heading, subHeading }) => {
	const stepColumns = React.useMemo(() => {
		if (!description?.steps) {
			return null
		}

		return description.steps.length < 3 ? description.steps.length : 6
	}, [description])

	return (
		<Styled.Landing>
			<Styled.LandingImageWrapper>
				{heading && <Styled.Heading>{heading}</Styled.Heading>}
				{subHeading && <Styled.SubHeading>{subHeading}</Styled.SubHeading>}
				{callToAction && (
					<Styled.CallToAction type="button" variant="contained" color="primary" style={{ position: 'absolute' }}>
						{callToAction}
					</Styled.CallToAction>
				)}
				<Styled.LandingImage src="landing.jpg" aspectRatio={21 / 10} type="fluid" />
			</Styled.LandingImageWrapper>
			{description && (
				<Styled.Description>
					{description.heading && <h1>{description.heading}</h1>}
					{description.subHeading && <h2>{description.subHeading}</h2>}
					{description.steps && (
						<Styled.StepGrid style={{ gridTemplateColumns: `repeat(${stepColumns}, 1fr)` }}>
							{description.steps.map(({ description, heading, icon }, i) => (
								<Styled.Step key={`description-step-${i}`}>
									<Styled.StepIcon>{icon && <FontAwesomeIcon icon={icon} />}</Styled.StepIcon>
									{heading && <Styled.StepHeading>{heading}</Styled.StepHeading>}
									{description && <Styled.StepDescription>{description}</Styled.StepDescription>}
								</Styled.Step>
							))}
						</Styled.StepGrid>
					)}
				</Styled.Description>
			)}
		</Styled.Landing>
	)
}

export default Landing
