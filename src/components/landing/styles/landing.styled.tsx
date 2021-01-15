import { Button } from '@material-ui/core'
import { Image } from '../../image'
import styled from 'styled-components'

export const CallToAction = styled(Button).attrs(() => ({
	color: 'primary',
	type: 'button',
	variant: 'contained'
}))`
	bottom: 25%;
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

export const LandingBackground = styled(Image).attrs(() => ({
	aspectRatio: 21 / 11,
	src: 'landing-background.png',
	type: 'fluid'
}))`
`

export const LandingForgroundImage = styled(Image).attrs(() => ({
	src: 'landing-forground.svg',
	type: 'fixed'
}))``

export const LandingForgroundWrapper = styled.div`
	position: absolute;
	bottom: 0;
	right: 10px;
`

export const LandingImageWrapper = styled.div`
	color: ${({ theme }) => theme.colors.white};
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
	background: linear-gradient(to right, #840F86, #780E85 12%, #600D82 25%, #410E6A 40%, #310D5D 50%, #170C3D 75%, #0F0A33) !important;
`
