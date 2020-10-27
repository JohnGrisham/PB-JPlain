// Credit: https://github.com/gatsbyjs/gatsby/discussions/10482#discussioncomment-100864
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { get } from 'lodash'

export interface ImageFixedProps extends React.HTMLAttributes<HTMLImageElement> {
	src: string
	height?: number
	width?: number
}

const ImageFixed: React.FC<ImageFixedProps> = ({ src, style, className, height = 25, width = 25 }) => {
	const query = graphql`
		query {
			allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
				nodes {
					relativePath
					childImageSharp {
						fixed(quality: 100) {
							...GatsbyImageSharpFixed
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

	const image = get(match, 'childImageSharp.fixed')

	if (!image) {
		return <div>Image not found</div>
	}

	return <Img fixed={{ ...image, height, width }} style={style} className={className} />
}

export default ImageFixed
