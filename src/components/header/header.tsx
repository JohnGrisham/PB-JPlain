import * as React from 'react'
import * as Styled from './styles'
import { Button, MenuItem } from '@material-ui/core'
import { ConvertContext } from '../../contexts'
import { FirebaseContext } from '../../services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useWindowSize } from '../../utils'

export interface HeaderProps {
	siteTitle: string
	logo?: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle, logo }) => {
	const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<Element | null>(null)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
	const { width } = useWindowSize()

	const { setIsOpen } = React.useContext(ConvertContext)
	const { authToken } = React.useContext(FirebaseContext)

	const menu = (
		<>
			<Styled.SiteLink to="/#description">About</Styled.SiteLink>
			<Styled.SiteLink to="/#benefits">Benefits</Styled.SiteLink>
			<Styled.SiteLink to="/#sources">Sources</Styled.SiteLink>
			<Styled.SiteLink to="/#pricing">Pricing</Styled.SiteLink>
			<Styled.SignupButton
				disabled={!!authToken}
				type="button"
				variant="contained"
				color="primary"
				onClick={() => setIsOpen(true)}>
				<h4>Signup</h4>
			</Styled.SignupButton>
		</>
	)

	const mobileMenu = (
		<Styled.MobileMenu open={isMobileMenuOpen} anchorEl={mobileMenuAnchor}>
			<MenuItem>
				<Styled.SiteLink to="/#description">About</Styled.SiteLink>
			</MenuItem>
			<MenuItem>
				<Styled.SiteLink to="/#benefits">Benefits</Styled.SiteLink>
			</MenuItem>
			<MenuItem>
				<Styled.SiteLink to="/#sources">Sources</Styled.SiteLink>
			</MenuItem>
			<MenuItem>
				<Styled.SiteLink to="/#pricing">Pricing</Styled.SiteLink>
			</MenuItem>
			<MenuItem disabled={!!authToken}>
				<Styled.SignupButton type="button" variant="contained" color="primary" onClick={() => setIsOpen(true)}>
					<h4>Signup</h4>
				</Styled.SignupButton>
			</MenuItem>
		</Styled.MobileMenu>
	)

	return (
		<Styled.SiteHeader ref={(ref) => setMobileMenuAnchor(ref)}>
			<Styled.SiteContext>
				{logo && <Styled.SiteLogo src={logo} />}
				<Styled.SiteTitle to="/#top">{siteTitle}</Styled.SiteTitle>
			</Styled.SiteContext>
			{!width ? null : width <= 1350 ? (
				<>
					<Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
