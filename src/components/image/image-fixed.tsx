// Credit: https://github.com/gatsbyjs/gatsby/discussions/10482#discussioncomment-100864
import * as React from 'react'
import Img, { GatsbyImageFixedProps } from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Query } from '../../interfaces'
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
					publicURL
					childImageSharp {
						fixed(quality: 100) {
							...GatsbyImageSharpFixed
						}
					}
					extension
				}
			}
		}
	`

	const data = useStaticQuery<{ allFile: Query['allFile'] }>(query)
	const match = React.useMemo(
		() => data.allFile.nodes.find(({ relativePath }: { relativePath: string }) => src === relativePath),
		[data, src]
	)

	const image: GatsbyImageFixedProps['fixed'] = get(match, 'childImageSharp.fixed')

	if (match && match.extension === 'svg' && match.publicURL) {
		return <object type="image/svg+xml" data={match.publicURL} height={height} width={width} />
	}

	if (!image) {
		return <div>Image not found</div>
	}

	return (
		<Img fixed={{ ...image, height, width }} style={style} className={`fixed${className ? ` ${className}` : ''}`} />
	)
}

export default ImageFixed
