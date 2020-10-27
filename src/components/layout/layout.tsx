import 'minireset.css'
import 'normalize.css'
// Uncomment next line and remove Styled instances to stop using styled components for global styles and use pure css
// import './styles/modules/global.module.css'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { FirebaseProvider } from '../../services'
import Header from '../header/header'
import React from 'react'

export interface LayoutProps {
	title?: string
	logo?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title, logo }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					logo
				}
			}
		}
	`)

	return (
		<FirebaseProvider>
			<Styled.GlobalStyle />
			<Header siteTitle={data.site.siteMetadata?.title || title} logo={data.site.siteMetadata?.logo || logo} />
			<Styled.Layout>
				<Styled.Content>{children}</Styled.Content>
				<footer
					style={{
						marginTop: `2rem`
					}}>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>
				</footer>
			</Styled.Layout>
		</FirebaseProvider>
	)
}

export default Layout
