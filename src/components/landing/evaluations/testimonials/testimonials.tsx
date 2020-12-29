import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Grid } from '../../../grid'
import { Query } from '../../../../interfaces'
import { Testimony } from './testimony'

const Testimonials: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ style }) => {
	const {
		allTestimonialsJson: { edges }
	} = useStaticQuery<{
		allTestimonialsJson: Query['allTestimonialsJson']
	}>(
		graphql`
			query {
				allTestimonialsJson {
					edges {
						node {
							heading
							subHeading
							testimonials {
								attributedUser {
									avatar
									title
									company
									name
								}
								quote
							}
						}
					}
				}
			}
		`
	)

	const testimonial = React.useMemo(() => {
		if (!edges || edges.length <= 0) {
			return null
		}

		const [{ node: testimonial }] = { ...edges }

		return testimonial
	}, [edges])

	const testimonies = React.useMemo(() => {
		if (!testimonial) {
			return []
		}

		return testimonial.testimonials.map((testimony, i) => (
			<Styled.Intersection key={`testimony-${i}`}>
				<Testimony {...testimony} />
			</Styled.Intersection>
		))
	}, [testimonial])

	if (!testimonial) {
		return null
	}

	return (
		<Styled.Testimonials style={style}>
			{testimonial.heading && <h2>{testimonial.heading}</h2>}
			{testimonial.subHeading && <h3>{testimonial.subHeading}</h3>}
			<Grid items={testimonies} />
		</Styled.Testimonials>
	)
}

export default Testimonials
