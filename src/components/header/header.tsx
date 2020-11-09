import * as React from 'react'
import * as Styled from './styles'

export interface HeaderProps {
	siteTitle: string
	logo?: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle, logo }) => (
	<Styled.SiteHeader>
		<Styled.SiteContext>
			{logo && <Styled.SiteLogo src={logo} />}
			<Styled.SiteLink style={{ fontSize: '1.5rem' }} to="/">
				{siteTitle}
			</Styled.SiteLink>
		</Styled.SiteContext>
	</Styled.SiteHeader>
)

export default Header
