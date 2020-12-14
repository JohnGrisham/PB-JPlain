import styled from 'styled-components'

export const Article = styled.article`
	background-color: white;
	color: #383838;
	display: flex;
	flex-direction: column;
	padding: 2em 10vw 2em 10vw;

	div {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
	}
`

export const PostTitle = styled.div`
	width: 100%;
	margin: 0px auto 2em auto;

	@media all and (min-width: 700px) {
		width: 70%;
	}
`

export const Heading = styled.h1`
	font-size: 2em;
`

export const List = styled.ul`
	list-style-type: disc;
`

export const Paragraph = styled.p`
	font-size: 1.2em;
	line-height: 1.5;
`

export const SubHeading = styled.h2`
	font-size: 1.5em;
`

export const Title = styled.h1`
	font-size: 3em;
	text-align: center;
`