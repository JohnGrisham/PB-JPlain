import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const Description = styled.div`
	align-items: center;
	background-color: white;
	color: #10152d;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
	padding-top: 150px;
	position: relative;

	h2 {
		margin-bottom: 0.5rem;
	}
`

export const StepHeading = styled.h2`
	font-size: 1.5em;
	margin-bottom: 1rem;
`

export const StepIcon = styled(Paper)`
	align-items: center;
	background-color: #10152d;
	border-radius: 50%;
	color: white;
	display: flex;
	height: 50px;
	justify-content: center;
	margin-bottom: 1rem;
	width: 50px;
`

export const DripBottom = styled.div.attrs({
	className: `drip dripBottom`
})`
	background: white;
`
