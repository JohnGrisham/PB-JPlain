import { IntersectionObserver } from '../../../intersection-observer'
import styled from 'styled-components'

export const Benefits = styled.div`
	background-color: ${({ theme }) => theme.colors.peanutButter};
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 7em 0px 7em 0px;
`

export const Intersection = styled(IntersectionObserver).attrs(() => ({
	options: { threshold: 0.5 }
}))`
	display: flex;
	flex: 1;
`
