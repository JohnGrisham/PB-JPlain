import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Benefit } from '../../benefit'
import { Query } from '../../../interfaces'

const Benefits: React.FC = () => {
	const {
		allBenefitsJson: { edges: benefits }
	} = useStaticQuery<{ allBenefitsJson: Query['allBenefitsJson'] }>(
		graphql`
			query {
				allBenefitsJson(sort: { fields: order }) {
					edges {
						node {
							id
							heading
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

	if (benefits.length <= 0) {
		return null
	}

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
