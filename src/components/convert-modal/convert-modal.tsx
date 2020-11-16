import * as React from 'react'
import * as Styled from './styles'
import { CallToActionForm } from '../call-to-action'
import { DialogProps } from '@material-ui/core'

const ConvertModal: React.FC<DialogProps> = (props) => {
	return (
		<Styled.ConvertModal {...props}>
			<h2>Don&apos;t miss your chance!</h2>
			<h5>Sign up today to start breaking your media echo chamber</h5>
			<CallToActionForm />
		</Styled.ConvertModal>
	)
}

export default ConvertModal
