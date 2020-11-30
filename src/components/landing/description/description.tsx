import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { DescriptionOptions } from '../../../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Description: React.FC = () => {
	const {
		allDescriptionJson: {
			edges: [{ node: description }]
		}
	} = useStaticQuery<{ allDescriptionJson: { edges: Array<{ node: DescriptionOptions }> } }>(
		graphql`
			query {
				allDescriptionJson {
					edges {
						node {
							heading
							subHeading
							steps {
								description
								heading
								icon
							}
						}
					}
				}
			}
		`
	)

	const stepColumns = React.useMemo(() => {
		if (!description?.steps) {
			return null
		}

		return description.steps.length < 3 ? description.steps.length : 6
	}, [description])

	return (
		<Styled.Description>
			{description.heading && <h2>{description.heading}</h2>}
			{description.subHeading && <h3>{description.subHeading}</h3>}
			{description.steps && (
				<Styled.StepGrid style={{ gridTemplateColumns: `repeat(${stepColumns}, 1fr)` }}>
					{description.steps.map(({ description, heading, icon }, i) => (
						<Styled.Step key={`step-${i}`}>
							<Styled.StepIcon>{icon && <FontAwesomeIcon icon={icon} />}</Styled.StepIcon>
							{heading && <Styled.StepHeading>{heading}</Styled.StepHeading>}
							{description && <span>{description}</span>}
						</Styled.Step>
					))}
				</Styled.StepGrid>
			)}
		</Styled.Description>
	)
}

export default Description
