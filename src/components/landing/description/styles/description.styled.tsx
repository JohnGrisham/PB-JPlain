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

export const StepHeading = styled.h3.attrs(() => ({
	className: description.stepHeading
}))``

export const StepIcon = styled(Paper).attrs(() => ({
	className: description.stepIcon
}))``

export const SubHeading = styled.h2.attrs(() => ({
	className: description.subHeading
}))``
