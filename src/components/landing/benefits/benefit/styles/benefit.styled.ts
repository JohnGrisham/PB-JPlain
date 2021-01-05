import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Benefit = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-bottom: 100px;
`

export const BenefitMotionImage = styled(motion.div)`
	display: flex;
	flex: 1;
	margin-right: auto;
	transform: translateX(-50%);
`

export const BenefitMotionText = styled(motion.div)`
	align-items: center;
	color: #383838;
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-left: 50%;
	margin-top: 1em;
	width: 60%;

	h2 {
		font-size: 3em;
		margin-bottom: 1em;
	}

	span {
		font-size: 2em;
		margin-bottom: 1em;

		&:first-letter {
			font-weight: bold;
			font-size: 1.5em;
		}
	}

	@media all and (max-width: 700px) {
		width: 75%;

		h2 {
			font-size: 2em;
		}

		span {
			font-size: 1.5em;
		}
	}
`
