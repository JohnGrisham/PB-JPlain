// https://codesandbox.io/s/framer-motion-intersection-observer-scale-qmtyb?from-embed=&file=/ui/atoms/intersection-observer/index.jsx:0-917

import * as React from 'react'
import { useIntersection, useOritentation } from '../../utils/hooks'

export const IntersectionContext = React.createContext({ inThreshold: false })

interface IntersectionObserverProps extends React.HTMLAttributes<HTMLDivElement> {
	options?: IntersectionObserverInit
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
	const isInLandscape = React.useMemo(
		() => orientation.type === 'landscape-primary' || orientation.type === 'landscape-secondary',
		[orientation]
	)

	// I discovered that certain devices will not display an interection if threshold is greater than 0 and the device orientation is landscape so for now just use 0 if that is the case.
	const intersection = useIntersection(intersectionRef, isInLandscape ? { ...options, threshold: 0 } : options)

	React.useEffect(() => {
		const isInThreshold = !!intersection && intersection.isIntersecting
		return setInThreshold(isInThreshold)
	}, [intersection])

	return (
		<IntersectionContext.Provider value={{ inThreshold }}>
			<div ref={intersectionRef} className={className} style={style}>
				{children}
			</div>
		</IntersectionContext.Provider>
	)
}
