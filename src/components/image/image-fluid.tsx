// Credit: https://github.com/gatsbyjs/gatsby/discussions/10482#discussioncomment-100864
import * as React from 'react'
import Img, { GatsbyImageFluidProps } from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Query } from '../../interfaces'
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
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	`

	const data = useStaticQuery<{ allFile: Query['allFile'] }>(query)

	const match = React.useMemo(
		() => data.allFile.nodes.find(({ relativePath }: { relativePath: string }) => src === relativePath),
		[data, src]
	)
	const image: GatsbyImageFluidProps['fluid'] = get(match, 'childImageSharp.fluid')

	if (!image) {
		return <div>Image not found</div>
	}

	return <Img fluid={{ ...image, aspectRatio }} style={style} className={`fluid${className ? ` ${className}` : ''}`} />
}

export default ImageFluid
