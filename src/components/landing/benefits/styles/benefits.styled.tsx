import { IntersectionObserver } from '../../../intersection-observer'
import styled from 'styled-components'

export const Benefits = styled.div`
	background-color: #fff0cc;
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 1em 0px 1em 0px;
`

export const Intersection = styled(IntersectionObserver).attrs(() => ({
	options: { threshold: 0.5 }
}))`
	display: flex;
	flex: 1;
`
