// https://codesandbox.io/s/framer-motion-intersection-observer-scale-qmtyb?from-embed=&file=/ui/atoms/intersection-observer/index.jsx:0-917

import * as React from 'react'
import { DeviceType, useDeviceDetect, useIntersection, useOritentation } from '../../utils/hooks'

export const IntersectionContext = React.createContext({ inThreshold: false })

interface IntersectionOptions extends IntersectionObserverInit {
	shouldResetIntersection?: boolean
}

interface IntersectionObserverProps extends React.HTMLAttributes<HTMLDivElement> {
	options?: IntersectionOptions
}

export const IntersectionObserver: React.FC<IntersectionObserverProps> = ({
	children,
	className,
	style,
	options = {}
}) => {
	const [inThreshold, setInThreshold] = React.useState(false)
	const intersectionRef = React.useRef<HTMLDivElement>(null)
	const orientation = useOritentation()
	const deviceType = useDeviceDetect()
	const isInLandscape = React.useMemo(
		() => orientation.type === 'landscape-primary' || orientation.type === 'landscape-secondary',
		[orientation]
	)
	// Workaround for: https://github.com/w3c/IntersectionObserver/issues/266
	const shouldReplaceThreshold = React.useMemo(
		() => (isInLandscape && deviceType === DeviceType.Mobile) || (isInLandscape && deviceType === DeviceType.Tablet),
		[deviceType, isInLandscape]
	)

	const intersection = useIntersection(intersectionRef, shouldReplaceThreshold ? { ...options, threshold: 0 } : options)

	React.useEffect(() => {
		if (!inThreshold || options.shouldResetIntersection) {
			const isInThreshold = !!intersection && intersection.isIntersecting
			return setInThreshold(isInThreshold)
		}
	}, [intersection, inThreshold, options])

	return (
		<IntersectionContext.Provider value={{ inThreshold }}>
			<div ref={intersectionRef} className={className} style={style}>
				{children}
			</div>
		</IntersectionContext.Provider>
	)
}
