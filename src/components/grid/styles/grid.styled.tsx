import grid from './modules'
import styled from 'styled-components'

export const GridItem = styled.div.attrs(() => ({
	className: grid.gridItem
}))``

// This component uses a technique which allows for dynamic centering of leftover grid items that normally wouldn't be centered in this grid.
// The source can be found here: https://css-irl.info/controlling-leftover-grid-items/
export const Grid = styled.div.attrs(() => ({
	className: grid.gridWrapper
}))``
