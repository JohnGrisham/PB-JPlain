import { IntersectionObserver } from '../../../intersection-observer'
import benefits from './modules'
import styled from 'styled-components'

export const Benefits = styled.div.attrs(() => ({
	className: benefits.benefitsWrapper
}))``

export const Intersection = styled(IntersectionObserver).attrs(() => ({
	className: benefits.intersection,
	options: { threshold: 0.5 }
}))``
