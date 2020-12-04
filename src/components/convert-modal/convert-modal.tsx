import * as React from 'react'
import * as Styled from './styles'
import { CallToActionForm } from '../call-to-action'
import { DialogProps } from '@material-ui/core'

const ConvertModal: React.FC<DialogProps> = (props) => {
	return (
		<Styled.ConvertModal {...props}>
			<h2>Get Early Access!</h2>
			<h5>Sign up today to start breaking your social media echo chamber</h5>
			<CallToActionForm />
		</Styled.ConvertModal>
	)
}

export default ConvertModal
