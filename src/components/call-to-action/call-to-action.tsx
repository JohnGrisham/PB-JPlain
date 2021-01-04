import * as React from 'react'
import * as Styled from './styles'
import CallToActionForm from './call-to-action-form'

const CallToAction: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
	<Styled.CallToAction {...props}>
		<Styled.CallToActionImage />
		<CallToActionForm />
	</Styled.CallToAction>
)

export default CallToAction
