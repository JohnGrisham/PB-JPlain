import * as React from 'react'
import * as Styled from './styles'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '../../grid'
import { TestimonialOptions } from '../../../interfaces'

const Testimonials: React.FC = () => {
	const query = useStaticQuery<{
		allTestimonialsJson: { edges: Array<{ node: TestimonialOptions }> }
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
		const {
			allTestimonialsJson: { edges = [] }
		} = { ...query }

		if (edges.length <= 0) {
			return null
		}

		const [{ node: testimonial }] = { ...edges }

		return testimonial
	}, [query])

	const testimonies = React.useMemo(() => {
		if (!testimonial) {
			return []
		}

		return testimonial.testimonials.map(({ attributedUser, quote }, i) => (
			<Styled.Testimony key={i}>
				<Styled.Quote>
					<FontAwesomeIcon icon={faQuoteLeft} />
					<h3>{quote}</h3>
					<FontAwesomeIcon icon={faQuoteRight} />
				</Styled.Quote>
				<Styled.AttributedUser>
					{attributedUser.avatar && (
						<Styled.AttributedUserAvatar src={require(`../../../images/${attributedUser.avatar}`)} />
					)}
					<Styled.AttributedUserInformation>
						<h4>{attributedUser.name}</h4>
						{(attributedUser.company || attributedUser.title) && (
							<span>{`${attributedUser.title ? attributedUser.title : ''}${
								attributedUser.company && attributedUser.title ? ', ' : ''
							} ${attributedUser.company ? attributedUser.company : ''}`}</span>
						)}
					</Styled.AttributedUserInformation>
				</Styled.AttributedUser>
			</Styled.Testimony>
		))
	}, [testimonial])

	if (!testimonial) {
		return null
	}

	return (
		<Styled.Testimonials>
			{testimonial.heading && <h2>{testimonial.heading}</h2>}
			{testimonial.subHeading && <h3>{testimonial.subHeading}</h3>}
			<Grid items={testimonies} />
		</Styled.Testimonials>
	)
}

export default Testimonials
