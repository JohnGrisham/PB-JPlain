import { Button, Menu } from '@material-ui/core'
import { Image } from '../../image'
import { Link } from 'gatsby'
import header from './modules'
import styled from 'styled-components'

export const LoginButton = styled(Button).attrs(() => ({
	className: header.loginButton
}))``

export const MobileMenu = styled(Menu).attrs(() => ({
	className: header.mobileMenu
}))`
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

export const SiteContext = styled.div.attrs(() => ({
	className: header.siteContext
}))``

export const SiteHeader = styled.header.attrs(() => ({
	className: header.siteHeader
}))``

export const SiteLink = styled(Link).attrs(() => ({
	className: header.siteLink
}))``

export const SiteLogo = styled(Image).attrs(() => ({
	className: header.siteLogo
}))``
