import * as React from 'react'
import * as Styled from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { TestimonialOptions } from '../../../interfaces'

const Testimonials: React.FC = () => {
	const {
		allTestimonialsJson: {
			edges: [{ node: testimonial }]
		}
	} = useStaticQuery<{ allTestimonialsJson: { edges: Array<{ node: TestimonialOptions }> } }>(
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

	return (
		<Styled.Testimonials>
			{testimonial.heading && <h2>{testimonial.heading}</h2>}
			{testimonial.subHeading && <h3>{testimonial.subHeading}</h3>}
		</Styled.Testimonials>
	)
}

export default Testimonials
