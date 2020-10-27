import { Button, Paper } from '@material-ui/core'
import { Image } from '../../image'
import landing from './modules'
import styled from 'styled-components'

export const CallToAction = styled(Button).attrs(() => ({
	className: landing.callToAction
}))``

export const Description = styled.div.attrs(() => ({
	className: landing.description
}))`
	h1 {
		margin-bottom: 0.5rem;
	}
`

export const Heading = styled.h1.attrs(() => ({
	className: landing.heading
}))``

export const Landing = styled.div.attrs(() => ({
	className: landing.landingWrapper
}))``

export const LandingImage = styled(Image).attrs(() => ({
	className: landing.landingImage
}))``

export const LandingImageWrapper = styled.div.attrs(() => ({
	className: landing.landingImageWrapper
}))``

export const Step = styled.div.attrs(() => ({
	className: landing.step
}))``

export const StepDescription = styled.span.attrs(() => ({
	className: landing.stepDescription
}))``
// This component uses a technique which allows for dynamic centering of leftover grid items that normally wouldn't be centered in this grid.
// The source can be found here: https://css-irl.info/controlling-leftover-grid-items/
export const StepGrid = styled.div.attrs(() => ({
	className: landing.stepGrid
}))`
	/* Dealing with 2 orphan items */
	${Step}:last-child:nth-child(3n - 1) {
		grid-column-end: -2;
	}

	${Step}:nth-last-child(2):nth-child(3n + 1) {
		grid-column-end: 4;
	}

	/* Dealing with single orphan */
	${Step}:last-child:nth-child(3n - 2) {
		grid-column-end: 5;
	}
`

export const StepHeading = styled.h3.attrs(() => ({
	className: landing.stepHeading
}))``

export const StepIcon = styled(Paper).attrs(() => ({
	className: landing.stepIcon
}))``

export const SubHeading = styled.h2.attrs(() => ({
	className: landing.subHeading
}))``
