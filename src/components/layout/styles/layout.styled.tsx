// Delete this file if you don't want to use styled components for global styles.
import layoutCSS, { layout } from './modules'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle(layoutCSS)

export const Content = styled.main.attrs(() => ({
	className: layout.content
}))``

export const Layout = styled.div.attrs(() => ({
	className: layout.layoutWrapper
}))`
	footer {
		color: white;

		a {
			color: white;
		}
	}
`
