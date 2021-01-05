import styled from 'styled-components'

export const GridItem = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	text-align: center;

	@media all and (min-width: 900px) {
		grid-column: span 2;

		/* Dealing with 2 orphan items */
		&:last-child:nth-child(3n - 1) {
			grid-column-end: -2;
		}

		&:nth-last-child(2):nth-child(3n + 1) {
			grid-column-end: 4;
		}

		/* Dealing with single orphan */
		&:last-child:nth-child(3n - 2) {
			grid-column-end: 5;
		}
	}
`

// This component uses a technique which allows for dynamic centering of leftover grid items that normally wouldn't be centered in this grid.
// The source can be found here: https://css-irl.info/controlling-leftover-grid-items/
export const Grid = styled.div`
	background-color: inherit;
	display: grid;
	gap: 2rem;

	@media all and (max-width: 900px) {
		grid-template-columns: 1fr !important;
	}
`
