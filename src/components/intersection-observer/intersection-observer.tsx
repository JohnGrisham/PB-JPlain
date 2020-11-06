// https://codesandbox.io/s/framer-motion-intersection-observer-scale-qmtyb?from-embed=&file=/ui/atoms/intersection-observer/index.jsx:0-917

import * as React from 'react'
import { useIntersection } from '../../utils/hooks'

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
	const intersection = useIntersection(intersectionRef, options)

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
