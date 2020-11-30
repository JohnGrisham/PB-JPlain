import { Paper } from '@material-ui/core'
import description from './modules'
import styled from 'styled-components'

export const Description = styled.div.attrs(() => ({
	className: description.descriptionWrapper
}))`
	h2 {
		margin-bottom: 0.5rem;
	}
`

export const Step = styled.div.attrs(() => ({
	className: description.step
}))``

// This component uses a technique which allows for dynamic centering of leftover grid items that normally wouldn't be centered in this grid.
// The source can be found here: https://css-irl.info/controlling-leftover-grid-items/
export const StepGrid = styled.div.attrs(() => ({
	className: description.stepGrid
}))``

export const StepHeading = styled.h3.attrs(() => ({
	className: description.stepHeading
}))``

export const StepIcon = styled(Paper).attrs(() => ({
	className: description.stepIcon
}))``

export const SubHeading = styled.h2.attrs(() => ({
	className: description.subHeading
}))``
