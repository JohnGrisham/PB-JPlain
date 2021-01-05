import styled, { createGlobalStyle } from 'styled-components'
import globalCSS from './modules'

export const GlobalStyle = createGlobalStyle(globalCSS)

export const Content = styled.main`
	display: flex;
	flex-direction: column;
`

export const Layout = styled.div`
	background-color: #4e2378;
	padding-bottom: 1.45rem;
	padding-top: 70px;
	position: relative;

	footer {
		color: white;

		a {
			color: white;
		}
	}
`
