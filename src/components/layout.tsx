import './layout.css'
import { graphql, useStaticQuery } from 'gatsby'
import { FirebaseProvider } from '../services'
import Header from './header'
import React from 'react'

const Layout: React.FC = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<FirebaseProvider>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0 1.0875rem 1.45rem`
				}}>
				<main>{children}</main>
				<footer
					style={{
						marginTop: `2rem`
					}}>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>
				</footer>
			</div>
		</FirebaseProvider>
	)
}

export default Layout
