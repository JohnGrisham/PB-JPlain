// Credit: https://github.com/gatsbyjs/gatsby/discussions/10482#discussioncomment-100864
import * as React from 'react'
import ImageFixed from './image-fixed'
import ImageFluid from './image-fluid'
import { ImageType } from '../../enums'

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
	src: string
	aspectRatio?: number
	type?: ImageType
	height?: number
	width?: number
}

const Image: React.FC<ImageProps> = ({
	aspectRatio = 4 / 3,
	src,
	style,
	className,
	type = ImageType.FIXED,
	height = 25,
	width = 25
}) => {
	const absoluteSrc = src.replace('./images/', '')

	if (type === 'fixed') {
		return <ImageFixed src={absoluteSrc} style={style} className={className} height={height} width={width} />
	}

	return <ImageFluid src={absoluteSrc} style={style} className={className} aspectRatio={aspectRatio} />
}

export default Image
