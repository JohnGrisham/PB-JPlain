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

		h2 {
			font-size: max(18px, 3vw);
		}

		h5 {
			font-size: max(16px, 2.5vw);
		}
	}
`

export const ConfirmationImage = styled(Image).attrs({ src: 'signup-confirmation.png', type: 'fluid' })`
	height: 100%;
	position: absolute !important;
	min-width: 100vw;
`
