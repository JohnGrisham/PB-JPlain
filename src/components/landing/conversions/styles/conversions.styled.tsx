import styled from 'styled-components'

export const CallToActionWrapper = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	width: 100%;
`

export const Conversions = styled.div`
	align-items: center;
	background-color: #fff0cc;
	display: flex;
	flex-direction: column;
`

export const CallToActionDrip = styled.div.attrs({
	className: `drip dripTop`
})`
	background-color: #fff0cc;
`

export const LatestPost = styled.div`
	align-items: center;
	background-color: white;
	display: flex;
	flex-direction: column;
	padding: 150px 1em 150px 1em;
	width: 100%;
`
