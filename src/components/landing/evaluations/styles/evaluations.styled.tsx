import styled from 'styled-components'

export const DripBottom = styled.div.attrs({
	className: `drip dripBottom`
})``

export const DripTop = styled.div.attrs({
	className: `drip dripTop`
})``

export const Evaluations = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	overflow: visible;
	padding: 2rem 1rem 2rem 1rem;
	position: relative;
`
