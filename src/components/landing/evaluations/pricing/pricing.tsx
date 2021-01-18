import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Grid } from '../../../grid'
import { Plan } from './plan'
import { Query } from '../../../../interfaces'

interface PricingProps extends React.HTMLAttributes<HTMLDivElement> {
	planActions?: Array<{ action: () => void, level: number }>
}

const Pricing: React.FC<PricingProps> = ({ planActions, style }) => {
	const {
		allPricingJson: { edges }
	} = useStaticQuery<{
		allPricingJson: Query['allPricingJson']
	}>(
		graphql`
			query {
				allPricingJson {
					edges {
						node {
							heading
							subHeading
							sharedFeatures {
								included
								description
								planLevel
							}
							plans {
								action {
									actionContent
									href
								}
								level
								price
								type
								features {
									included
									planLevel
									description
								}
								image {
									src
									height
									width
								}
							}
						}
					}
				}
			}
		`
	)

	const pricing = React.useMemo(() => {
		if (!edges || edges.length <= 0) {
			return null
		}

		const [{ node: pricing }] = edges

		return pricing
	}, [edges])

	const plans = React.useMemo(() => {
		if (!pricing) {
			return []
		}

		return pricing.plans.map((plan, i) => {
			const sharedFeatures = pricing.sharedFeatures?.filter(({ planLevel }) => plan.level >= planLevel)
			const planAction = planActions ? planActions.find(({ level }) => level === plan.level) : undefined

			return (
				<Styled.Intersection key={`plan-${i}`}>
					<Plan onAction={planAction?.action} sharedFeatures={sharedFeatures} {...plan} />
				</Styled.Intersection>
			)
		})
	}, [pricing])

	if (!pricing) {
		return null
	}

	return (
		<Styled.Pricing id="pricing" style={style}>
			{pricing.heading && <h2>{pricing.heading}</h2>}
			{pricing.subHeading && <h3>{pricing.subHeading}</h3>}
			<Grid items={plans} />
		</Styled.Pricing>
	)
}

export default Pricing
