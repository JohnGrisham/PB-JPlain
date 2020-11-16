import * as React from 'react'
import * as Styled from './styles'
import { BenefitOptions, Description } from '../../interfaces'
import { Benefit } from '../benefit'
import { CallToAction } from '../call-to-action'
import { ConvertContext } from '../../contexts'
import { ConvertModal } from '../convert-modal'
import { FirebaseContext } from '../../services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SourcesDrag } from '../sources-drag'

export interface LandingProps {
	callToAction?: string
	heading?: string
	subHeading?: string
	description?: Description
	benefits?: BenefitOptions[]
}

const Landing: React.FC<LandingProps> = ({ benefits, callToAction, description, heading, subHeading }) => {
	const { firebase } = React.useContext(FirebaseContext)
	const { isOpen, setHasBeenDismissed, setIsOpen } = React.useContext(ConvertContext)

	React.useEffect(() => {
		if (firebase) {
			firebase.analytics().logEvent('We have landed!')
		}
	}, [firebase])

	const stepColumns = React.useMemo(() => {
		if (!description?.steps) {
			return null
		}

		return description.steps.length < 3 ? description.steps.length : 6
	}, [description])

	const onCloseConvertModal = React.useCallback(() => {
		setIsOpen(false)
		setHasBeenDismissed(true)
	}, [setHasBeenDismissed, setIsOpen])

	return (
		<Styled.Landing>
			<Styled.LandingImageWrapper>
				{heading && <Styled.Heading>{heading}</Styled.Heading>}
				{subHeading && <Styled.SubHeading>{subHeading}</Styled.SubHeading>}
				{callToAction && (
					<Styled.CallToAction type="button" variant="contained" color="primary" href="#CTA">
						<h4>{callToAction}</h4>
					</Styled.CallToAction>
				)}
				<Styled.LandingImage />
			</Styled.LandingImageWrapper>
			{description && (
				<Styled.Description>
					{description.heading && <h2>{description.heading}</h2>}
					{description.subHeading && <h3>{description.subHeading}</h3>}
					{description.steps && (
						<Styled.StepGrid style={{ gridTemplateColumns: `repeat(${stepColumns}, 1fr)` }}>
							{description.steps.map(({ description, heading, icon }, i) => (
								<Styled.Step key={`description-step-${i}`}>
									<Styled.StepIcon>{icon && <FontAwesomeIcon icon={icon} />}</Styled.StepIcon>
									{heading && <Styled.StepHeading>{heading}</Styled.StepHeading>}
									{description && <span>{description}</span>}
								</Styled.Step>
							))}
						</Styled.StepGrid>
					)}
				</Styled.Description>
			)}
			{benefits && (
				<Styled.Benefits>
					{benefits.map((benefit, i) => (
						<Styled.Intersection key={`benefit-${i}`}>
							<Benefit benefit={benefit} />
						</Styled.Intersection>
					))}
				</Styled.Benefits>
			)}
			<SourcesDrag />
			<CallToAction />
			<ConvertModal open={isOpen} onClose={onCloseConvertModal} />
		</Styled.Landing>
	)
}

export default Landing
