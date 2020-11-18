import { Image } from '../../image'
import styled from 'styled-components'

export const Confirmation = styled.div`
	display: flex;
	height: calc(100vh - 78px);
	justify-content: flex-end;
	position: relative;

	span {
		color: white;
		max-width: 50%;
		position: absolute;
		top: 5%;
		z-index: 1;

		h2,
		h5 {
			margin-bottom: 1em;
		}

		a {
			color: #4e2378;
		}

		h2 {
			font-size: 3.5vw;
		}

		h5 {
			font-size: 3vw;
		}
	}
`

export const ConfirmationImage = styled(Image).attrs({ src: 'signup-confirmation.png', type: 'fluid' })`
	height: 100%;
	position: absolute !important;
	width: 100vw;
`
