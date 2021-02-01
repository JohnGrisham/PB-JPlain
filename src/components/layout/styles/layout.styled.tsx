import styled, { DefaultTheme, createGlobalStyle } from 'styled-components'
import globalCSS from './modules'
import dripMask from '../../../images/drip.svg'

export const theme: DefaultTheme = {
    colors: {
		black: '#000000',
		blue: '#332379',
		darkBlue: '#10152d',
		jelly: '#4e2378',
		mediumGray: '#383838',
		peanutButter: '#fff0cc',
		primaryBlue: '#077cf9',
		success: '#008000',
		warning: '#ff0000',
		white: '#ffffff'
      }
  }

export const GlobalStyle = createGlobalStyle`
	${globalCSS}

	.fluid {
		width: 100%;
	}

	.MuiButton-root.MuiButton-containedPrimary {
		background-color: ${({ theme }) => theme.colors.primaryBlue};
	}

	.MuiMenu-list {
		background-color: ${({ theme }) => theme.colors.jelly};
	}

	.MuiButton-label > * {
		margin: 0;
	}

	.Mui-disabled {
		opacity: 0.5;
	}
	/* I got my inspiration from Wes Bos. Check it out here: https://mastergatsby.com/ */
	.drip {
		display: block;
		left: 0;
		width: 100%;
		height: 180px;
		mask: url(${dripMask});
		mask-size: 250px auto;
		mask-repeat: repeat-x;
		position: absolute;
		background: inherit;
		background-position: 0 100%;
		z-index: 1;
	}

	.dripTop {
		bottom: 100%;
		bottom: calc(100% - 1px);
		transform: rotateX(180deg);
	}

	.dripBottom {
		top: calc(100% - 1px);
	}

	.largeItem {
		width: 50%;
	}

	@media all and (max-width: 700px) {
		.largeItem {
			width: 100%;
		}
	}

	@media all and (min-width: 700px) and (max-width: 950px) {
		.largeItem {
			width: 80%;
		}
	}

	@media all and (min-width: 950px) and (max-width: 1200px) {
		.largeItem {
			width: 65%;
		}
	}

	@media only screen and (max-width: 480px) {
		html {
			font-size: 100%;
		}
	}
`

export const Content = styled.main`
	display: flex;
	flex-direction: column;
`

export const Layout = styled.div`
	background-color: ${({ theme }) => theme.colors.jelly};
	padding-bottom: 1.45rem;
	padding-top: 70px;
	position: relative;

	footer {
		color: ${({ theme }) => theme.colors.white};

		a {
			color: ${({ theme }) => theme.colors.white};
		}
	}
`
