import { Button, Menu } from '@material-ui/core'
import { Image } from '../../image'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const SignupButton = styled(Button)`
	width: 100%;
`

export const MobileMenu = styled(Menu)`
	top: 50px;

	.MuiMenu-paper,
	.MuiMenu-list {
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
	grid-template-columns: 5fr 0.5fr 1fr;
	padding: 1.45rem 1.0875rem;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1000;
`

export const SiteLink = styled(Link)`
	color: white;
	margin: 0;
	text-decoration: none;
`

export const SiteLogo = styled(Image)`
	margin-right: 5px;
`
