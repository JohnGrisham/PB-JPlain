import * as React from 'react'
import * as Styled from './styles'
import { Benefits } from './benefits'
import { CallToAction } from '../call-to-action'
import { Description } from './description'
import { FirebaseContext } from '../../services'
import { SourcesDrag } from '../sources-drag'

export interface LandingProps {
	callToAction?: string
	heading?: string
	subHeading?: string
}

const Landing: React.FC<LandingProps> = ({ callToAction, heading, subHeading }) => {
	const { firebase } = React.useContext(FirebaseContext)

	React.useEffect(() => {
		if (firebase) {
			firebase.analytics().logEvent('We have landed!')
		}
	}, [firebase])

	return (
		<Styled.Landing>
			<Styled.LandingImageWrapper>
				{heading && <Styled.Heading>{heading}</Styled.Heading>}
				{subHeading && <Styled.SubHeading>{subHeading}</Styled.SubHeading>}
				{callToAction && (
					<Styled.CallToAction type="button" variant="contained" color="primary">
						<h4>{callToAction}</h4>
					</Styled.CallToAction>
				)}
				<Styled.LandingImage />
			</Styled.LandingImageWrapper>
			<Description />
			<Benefits />
			<SourcesDrag />
			<CallToAction />
		</Styled.Landing>
	)
}

export default Landing
