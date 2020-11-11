import * as React from 'react'
import { checkIsClient } from '../check-is-client'

// Source: https://usehooks.com/useWindowSize/
export default function useWindowSize(): {
	height: number | undefined
	width: number | undefined
} {
	const isClient = React.useMemo(() => checkIsClient(), [])

	const getSize = React.useCallback(() => {
		return {
			height: isClient ? window.innerHeight : undefined,
			width: isClient ? window.innerWidth : undefined
		}
	}, [isClient])

	const [windowSize, setWindowSize] = React.useState(getSize)

	React.useEffect(() => {
		if (!isClient) {
			return
		}

		const handleSetSize = () => setWindowSize(getSize())
		handleSetSize()

		window.addEventListener('resize', handleSetSize)
		window.addEventListener('orientationchange', handleSetSize)
		return () => {
			window.removeEventListener('resize', handleSetSize)
			window.removeEventListener('orientationchange', handleSetSize)
		}
	}, [getSize, isClient])

	return windowSize
}
