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
// I got my inspiration from Wes Bos. Check it out here: https://mastergatsby.com/
export const WaveBottom = styled.div.attrs({
	className: `${testimonials.wave} ${testimonials.waveBottom}`
})``

export const WaveTop = styled.div.attrs({
	className: `${testimonials.wave} ${testimonials.waveTop}`
})``
