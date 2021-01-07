import { Button } from '@material-ui/core'
import { Image } from '../../image'
import styled from 'styled-components'

export const CallToAction = styled(Button).attrs(() => ({
	color: 'primary',
	href: '#CTA',
	type: 'button',
	variant: 'contained'
}))`
	bottom: 15%;
	position: absolute;
	z-index: 2;

	h4 {
		font-size: max(16px, 1.1vw);
	}
`

export const Heading = styled.h1`
	font-size: max(18px, 5vw);
	position: absolute;
	top: 10%;
	white-space: nowrap;
	z-index: 2;
`

export const Landing = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`

export const LandingImage = styled(Image).attrs(() => ({
	aspectRatio: 21 / 11,
	src: 'landing.jpg',
	type: 'fluid'
}))``

export const LandingImageWrapper = styled.div`
	color: white;
	display: flex;
	justify-content: center;
	position: relative;
	width: 100%;
`

export const SubHeading = styled.h2`
	font-size: max(16px, 3vw);
	position: absolute;
	top: 30%;
	z-index: 2;
`

export const GradientDrip = styled.div.attrs({
	className: `drip dripBottom`
})`
	background: linear-gradient(to right, #882483, #782483 10%, #692381 25%, #372259, #221e46);
`
