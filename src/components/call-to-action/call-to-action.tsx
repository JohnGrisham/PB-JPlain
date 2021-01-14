import * as React from 'react'
import * as Styled from './styles'
import CallToActionForm from './call-to-action-form'
import { ImageType } from '../../enums'
import { useWindowSize } from '../../utils'

const CallToAction: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => { 
	const CTAImageType: ImageType = ImageType.FIXED
	const { width } = useWindowSize()

	const imageSize = React.useMemo(() => {
		if (CTAImageType.valueOf() === ImageType.FLUID) {
			return { height: undefined, width: undefined }
		}

		if(!width || width > 700) {
			return { height: 500, width: 500 }
		}

		return { height: 300, width: 300 }
	}, [])

	return(
	<Styled.CallToAction {...props} className={`${className} ${CTAImageType.valueOf() == ImageType.FLUID ? 'largeItem' : ''}`} >
		<Styled.CallToActionImage type={CTAImageType} {...imageSize} />
		<CallToActionForm />
	</Styled.CallToAction>
)}

export default CallToAction
