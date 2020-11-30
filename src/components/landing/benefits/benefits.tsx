import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Benefit } from '../../benefit'
import { BenefitOptions } from '../../../interfaces'

const Benefits: React.FC = () => {
	const {
		allBenefitsJson: { edges: benefits }
	} = useStaticQuery<{ allBenefitsJson: { edges: Array<{ node: BenefitOptions }> } }>(
		graphql`
			query {
				allBenefitsJson {
					edges {
						node {
							id
							description
							image {
								height
								src
								width
							}
						}
					}
				}
			}
		`
	)

	return (
		<Styled.Benefits>
			{benefits.map(({ node }) => (
				<Styled.Intersection key={node.id}>
					<Benefit benefit={node} />
				</Styled.Intersection>
			))}
		</Styled.Benefits>
	)
}

export default Benefits
