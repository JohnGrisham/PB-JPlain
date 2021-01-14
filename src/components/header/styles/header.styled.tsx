import { Button, Menu } from '@material-ui/core'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Image } from '../../image'
import styled from 'styled-components'

export const SignupButton = styled(Button)`
	width: 100%;
`

export const MobileMenu = styled(Menu)`
	top: 55px !important;
	z-index: 4;

	.MuiMenu-paper,
	.MuiMenu-list {
		background: #4e2378 !important;
		height: 100%;
		max-height: 100%;
		max-width: 100%;
		width: 100%;
	}

	.MuiMenu-paper {
		left: 0 !important;
	}
`

export const SiteContext = styled.div`
	align-items: inherit;
	display: flex;
`

export const SiteHeader = styled.header`
	align-items: center;
	background: #4e2378;
	color: white;
	display: grid;
	grid-template-columns: 5fr 0.5fr 0.5fr 0.6fr 0.5fr 1fr;
	min-width: 420px;
	padding: 1.45rem 1.0875rem;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 3;

	@media all and (max-width: 1350px) {
		grid-template-columns: 5fr 1fr;
	}
`

export const SiteLink = styled(AnchorLink)`
	color: white;
	margin: 0;
	text-decoration: none;
`

export const SiteTitle = styled(SiteLink)`
	font-size: 1.5rem;
`

export const SiteLogo = styled(Image)`
	margin-right: 5px;
`
