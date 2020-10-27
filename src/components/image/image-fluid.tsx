// Credit: https://github.com/gatsbyjs/gatsby/discussions/10482#discussioncomment-100864
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { get } from 'lodash'

export interface ImageFluidProps extends React.HTMLAttributes<HTMLImageElement> {
	src: string
	aspectRatio?: number
}

const ImageFluid: React.FC<ImageFluidProps> = ({ aspectRatio = 4 / 3, src, style, className }) => {
	const query = graphql`
		query {
			allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
				nodes {
					relativePath
					childImageSharp {
						fluid(quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	`

	const data = useStaticQuery(query)

	const match: string = React.useMemo(
		() => data.allFile.nodes.find(({ relativePath }: { relativePath: string }) => src === relativePath),
		[data, src]
	)
	const image = get(match, 'childImageSharp.fluid')

	if (!image) {
		return <div>Image not found</div>
	}

	return <Img fluid={{ ...image, aspectRatio }} style={style} className={className} />
}

export default ImageFluid
