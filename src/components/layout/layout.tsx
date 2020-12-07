import 'minireset.css'
import 'normalize.css'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { ConvertContext } from '../../contexts'
import { ConvertModal } from '../convert-modal'
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

	const { isOpen, setHasBeenDismissed, setIsOpen } = React.useContext(ConvertContext)

	const onCloseConvertModal = React.useCallback(() => {
		setIsOpen(false)
		setHasBeenDismissed(true)
	}, [setHasBeenDismissed, setIsOpen])

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
				<ConvertModal open={isOpen} onClose={onCloseConvertModal} />
			</Styled.Layout>
		</>
	)
}

export default Layout
