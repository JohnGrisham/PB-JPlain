import { Button } from '@material-ui/core'
import { Image } from '../../image'
import landing from './modules'
import styled from 'styled-components'

export const CallToAction = styled(Button).attrs(() => ({
	className: landing.callToAction,
	href: '#CTA'
}))``

export const Heading = styled.h1.attrs(() => ({
	className: landing.heading
}))``

export const Landing = styled.div.attrs(() => ({
	className: landing.landingWrapper
}))``

export const LandingImage = styled(Image).attrs(() => ({
	aspectRatio: 21 / 11,
	src: 'landing.jpg',
	type: 'fluid'
}))``

export const LandingImageWrapper = styled.div.attrs(() => ({
	className: landing.landingImageWrapper
}))``

export const Sources = styled.div.attrs(() => ({
	className: landing.sources
}))``

export const SubHeading = styled.h2.attrs(() => ({
	className: landing.subHeading
}))``
