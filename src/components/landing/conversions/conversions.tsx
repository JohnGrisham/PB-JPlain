import * as React from 'react'
import * as Styled from './styles'
import { CallToAction } from '../../call-to-action'

const Conversions: React.FC = () => {
	return (
		<Styled.Conversions>
			<Styled.CallToActionWrapper>
				<CallToAction />
			</Styled.CallToActionWrapper>
		</Styled.Conversions>
	)
}

export default Conversions
