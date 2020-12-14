import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { DescriptionOptions } from '../../../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '../../grid'

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

	const stepItems = React.useMemo(() => {
		if (!description?.steps || description.steps.length <= 0) {
			return null
		}

		return description.steps.map(({ description, heading, icon }, i) => (
			<>
				<Styled.StepIcon>{icon && <FontAwesomeIcon icon={icon} />}</Styled.StepIcon>
				{heading && <Styled.StepHeading>{heading}</Styled.StepHeading>}
				{description && <span>{description}</span>}
			</>
		))
	}, [description])

	return (
		<Styled.Description>
			{description.heading && <h2>{description.heading}</h2>}
			{description.subHeading && <h3>{description.subHeading}</h3>}
			{stepItems && <Grid items={stepItems} />}
		</Styled.Description>
	)
}

export default Description
