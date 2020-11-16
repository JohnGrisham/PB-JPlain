import * as React from 'react'
import * as Styled from './styles'
import CallToActionForm from './call-to-action-form'

const CallToAction: React.FC = () => (
	<Styled.CallToAction>
		<Styled.CallToActionImage />
		<CallToActionForm />
	</Styled.CallToAction>
)

export default CallToAction
