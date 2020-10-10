import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const Image = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	if (!data?.placeholderImage?.childImageSharp?.fluid) {
		return <div>Picture not found</div>
	}

	return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
