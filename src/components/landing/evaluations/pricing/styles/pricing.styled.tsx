import { IntersectionObserver } from '../../../../intersection-observer'
import pricing from './modules'
import styled from 'styled-components'

export const Pricing = styled.div.attrs({
	className: pricing.pricingWrapper
})``

export const Intersection = styled(IntersectionObserver).attrs({
	className: pricing.intersection,
	options: { threshold: 0.5 }
})``
