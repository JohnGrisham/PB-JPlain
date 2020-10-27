import * as React from 'react'
import * as Styled from './styles'
import { Button, MenuItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useWindowSize } from '../../utils'

export interface HeaderProps {
	siteTitle: string
	logo?: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle, logo }) => {
	const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<Element | null>(null)
	const [isMobileMenuOpen, setIsMobilMenuOpen] = React.useState(false)
	const { width } = useWindowSize()

	const menu = (
		<>
			<Styled.SiteLink to="/about">About</Styled.SiteLink>
			<Styled.SiteLink to="/pricing">Pricing</Styled.SiteLink>
			<Styled.SiteLink to="/blog">Blog</Styled.SiteLink>
			<Styled.LoginButton type="button" variant="contained" color="primary">
				Login
			</Styled.LoginButton>
		</>
	)

	const mobileMenu = (
		<Styled.MobileMenu open={isMobileMenuOpen} anchorEl={mobileMenuAnchor}>
			<MenuItem>
				<Styled.SiteLink to="/about">About</Styled.SiteLink>
			</MenuItem>
			<MenuItem>
				<Styled.SiteLink to="/pricing">Pricing</Styled.SiteLink>
			</MenuItem>
			<MenuItem>
				<Styled.SiteLink to="/blog">Blog</Styled.SiteLink>
			</MenuItem>
			<MenuItem>
				<Styled.LoginButton type="button" variant="contained" color="primary">
					Login
				</Styled.LoginButton>
			</MenuItem>
		</Styled.MobileMenu>
	)

	return (
		<Styled.SiteHeader ref={(ref) => setMobileMenuAnchor(ref)}>
			<Styled.SiteContext>
				{logo && <Styled.SiteLogo src={logo} type="fixed" />}
				<Styled.SiteLink style={{ fontSize: '1.5rem' }} to="/">
					{siteTitle}
				</Styled.SiteLink>
			</Styled.SiteContext>
			{width && width <= 700 ? (
				<>
					<Button onClick={() => setIsMobilMenuOpen(!isMobileMenuOpen)}>
						<FontAwesomeIcon color="white" icon={faBars} />
						{mobileMenu}
					</Button>
				</>
			) : (
				menu
			)}
		</Styled.SiteHeader>
	)
}

export default Header
