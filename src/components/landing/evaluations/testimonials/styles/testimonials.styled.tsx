import { IntersectionObserver } from '../../../../intersection-observer'
import styled from 'styled-components'

export const Intersection = styled(IntersectionObserver).attrs(() => ({
	options: { threshold: 0.5 }
}))`
	display: flex;
`

export const Testimonials = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 80%;
`
