import { Image } from '../../image'
import callToAction from './modules'
import styled from 'styled-components'

export const CallToAction = styled.div.attrs({ className: callToAction.callToActionWrapper })``

export const CallToActionImage = styled(Image).attrs({
	className: callToAction.callToActionImage,
	src: 'cta.jpg',
	type: 'fluid'
})``

export const CallToActionInput = styled.div.attrs({
	className: callToAction.callToActionInput
})`
	.MuiInputBase-root,
	.MuiButton-root {
		border-radius: 0;
	}
`
