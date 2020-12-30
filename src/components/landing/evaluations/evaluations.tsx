import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Pricing } from './pricing'
import { Query } from '../../../interfaces'
import { Testimonials } from './testimonials'

const Evaluations: React.FC = () => {
	const {
		allTestimonialsJson: { edges: testimonialEdges },
		allPricingJson: { edges: pricingEdges }
	} = useStaticQuery<{
		allTestimonialsJson: Query['allTestimonialsJson']
		allPricingJson: Query['allPricingJson']
	}>(
		graphql`
			query {
				allTestimonialsJson {
					edges {
						node {
							id
						}
					}
				}
				allPricingJson {
					edges {
						node {
							id
						}
					}
				}
			}
		`
	)

	const evaluations = React.useMemo(() => {
		if ((!testimonialEdges && !pricingEdges) || (testimonialEdges.length <= 0 && pricingEdges.length <= 0)) {
			return null
		}

		const [{ node: pricing } = { node: null }] = pricingEdges
		const [{ node: testimonials } = { node: null }] = testimonialEdges

		return { pricing, testimonials }
	}, [testimonialEdges, pricingEdges])

	if (!evaluations) {
		return null
	}

	return (
		<Styled.Evaluations>
			<Styled.DripTop />
			<Testimonials
				style={evaluations.pricing ? { borderBottom: '2px solid white', paddingBottom: '3em' } : undefined}
			/>
			<Pricing style={evaluations.testimonials ? { paddingTop: '3em' } : undefined} />
			<Styled.DripBottom />
		</Styled.Evaluations>
	)
}

export default Evaluations
