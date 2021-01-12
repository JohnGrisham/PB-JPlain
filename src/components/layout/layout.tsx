import 'minireset.css'
import 'normalize.css'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Header } from '../header'
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
		<>
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
		</>
	)
}

export default Layout
