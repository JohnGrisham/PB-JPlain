import { Image } from '../../image'
import styled from 'styled-components'

export const CallToAction = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const CallToActionError = styled.p`
	color: red;
`

export const CallToActionSuccess = styled.p`
	color: green;
`

export const CallToActionForm = styled.form`
	align-items: center;
	display: flex;
	flex: 1;
	justify-content: center;
	margin-bottom: 50px;
	margin-top: 15px;
	padding: 0 10px 0 10px;
	width: 100%;
`

export const CallToActionImage = styled(Image).attrs({
	src: 'cta.svg'
})``

export const CallToActionInput = styled.div`
	background-color: white;
	display: flex;
	position: relative;

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
