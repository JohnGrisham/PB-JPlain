import * as React from 'react'
import * as Styled from './styles'
import { CallToActionForm } from '../call-to-action'
import { DialogProps } from '@material-ui/core'

const ConvertModal: React.FC<DialogProps> = (props) => {
	return (
		<Styled.ConvertModal {...props} disableScrollLock>
			<h2>Get Early Access!</h2>
			<h4>
				Sign up today to start breaking your echo chamber in an easy to read 5 minute newsletter.
				<br />
				<br />
				We will never spam your inbox.
			</h4>
			<CallToActionForm />
		</Styled.ConvertModal>
	)
}

export default ConvertModal
