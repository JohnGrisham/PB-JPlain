import * as React from 'react'
import * as Styled from './styles'
import { Benefits } from './benefits'
import { CallToAction } from '../call-to-action'
import { ConvertContext } from '../../contexts'
import { ConvertModal } from '../convert-modal'
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
	const { isOpen, setHasBeenDismissed, setIsOpen } = React.useContext(ConvertContext)

	React.useEffect(() => {
		if (firebase) {
			firebase.analytics().logEvent('We have landed!')
		}
	}, [firebase])

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
			<ConvertModal open={isOpen} onClose={onCloseConvertModal} />
		</Styled.Landing>
	)
}

export default Landing
