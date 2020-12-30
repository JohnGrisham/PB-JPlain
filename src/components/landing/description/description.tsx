import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '../../grid'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Query } from '../../../interfaces'

const Description: React.FC = () => {
	const {
		allDescriptionJson: { edges }
	} = useStaticQuery<{ allDescriptionJson: Query['allDescriptionJson'] }>(
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

	const description = React.useMemo(() => {
		if (!edges || edges.length <= 0) {
			return null
		}

		const [{ node: description }] = edges

		return description
	}, [edges])

	const stepItems = React.useMemo(() => {
		if (!description?.steps || description.steps.length <= 0) {
			return null
		}

		return description.steps.map(({ description, heading, icon }) => (
			<>
				<Styled.StepIcon>{icon && <FontAwesomeIcon icon={icon as IconProp} />}</Styled.StepIcon>
				{heading && <Styled.StepHeading>{heading}</Styled.StepHeading>}
				{description && <span>{description}</span>}
			</>
		))
	}, [description])

	if (!description) {
		return null
	}

	return (
		<Styled.Description>
			{description.heading && <h2>{description.heading}</h2>}
			{description.subHeading && <h3>{description.subHeading}</h3>}
			{stepItems && <Grid items={stepItems} />}
			<Styled.DripBottom />
		</Styled.Description>
	)
}

export default Description
