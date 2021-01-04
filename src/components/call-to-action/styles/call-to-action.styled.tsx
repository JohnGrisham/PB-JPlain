import { Image } from '../../image'
import callToAction from './modules'
import styled from 'styled-components'

export const CallToAction = styled.div.attrs({
	className: `${callToAction.callToActionWrapper} largeItem`
})``

export const CallToActionError = styled.p.attrs({
	className: callToAction.callToActionError
})``

export const CallToActionSuccess = styled.p.attrs({
	className: callToAction.callToActionSuccess
})``

export const CallToActionForm = styled.form.attrs({
	autoComplete: 'off',
	className: callToAction.callToActionForm
})``

export const CallToActionImage = styled(Image).attrs({
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

	p {
		bottom: -25px;
		font-size: 0.75em;
		font-family: Roboto, Helvetica, Arial, sans-serif;
		margin: 0;
		position: absolute;
	}
`
