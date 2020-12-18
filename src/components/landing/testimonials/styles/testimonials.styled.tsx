import { IntersectionObserver } from '../../../intersection-observer'
import styled from 'styled-components'
import testimonials from './modules'

export const Intersection = styled(IntersectionObserver).attrs(() => ({
	className: testimonials.intersection,
	options: { threshold: 0.5 }
}))``

export const Testimonials = styled.div.attrs({
	className: testimonials.testimonialsWrapper
})``
