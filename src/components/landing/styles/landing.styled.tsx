import { Button, Paper } from '@material-ui/core'
import { Image } from '../../image'
import { IntersectionObserver } from '../../intersection-observer'
import landing from './modules'
import styled from 'styled-components'

export const Benefits = styled.div.attrs(() => ({
	className: landing.benefits
}))``

export const CallToAction = styled(Button).attrs(() => ({
	className: landing.callToAction
}))``

export const Description = styled.div.attrs(() => ({
	className: landing.description
}))`
	h2 {
		margin-bottom: 0.5rem;
	}
`

export const Heading = styled.h1.attrs(() => ({
	className: landing.heading
}))``

export const Intersection = styled(IntersectionObserver).attrs(() => ({
	className: landing.intersection,
	options: { threshold: 0.5 }
}))``

export const Landing = styled.div.attrs(() => ({
	className: landing.landingWrapper
}))``

export const LandingImage = styled(Image).attrs(() => ({
	aspectRatio: 21 / 11,
	className: landing.landingImage,
	src: 'landing.jpg',
	type: 'fluid'
}))``

export const LandingImageWrapper = styled.div.attrs(() => ({
	className: landing.landingImageWrapper
}))``

export const Sources = styled.div.attrs(() => ({
	className: landing.sources
}))``

export const Step = styled.div.attrs(() => ({
	className: landing.step
}))``

// This component uses a technique which allows for dynamic centering of leftover grid items that normally wouldn't be centered in this grid.
// The source can be found here: https://css-irl.info/controlling-leftover-grid-items/
export const StepGrid = styled.div.attrs(() => ({
	className: landing.stepGrid
}))``

export const StepHeading = styled.h3.attrs(() => ({
	className: landing.stepHeading
}))``

export const StepIcon = styled(Paper).attrs(() => ({
	className: landing.stepIcon
}))``

export const SubHeading = styled.h2.attrs(() => ({
	className: landing.subHeading
}))``
