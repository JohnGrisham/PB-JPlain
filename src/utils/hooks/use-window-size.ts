// Source: https://usehooks.com/useWindowSize/
import * as React from 'react'
import { off, on } from '../helpers'
import { checkIsClient } from '../check-is-client'

export default function useWindowSize(): {
	height: number | null
	width: number | null
} {
	const isClient = React.useMemo(() => checkIsClient(), [])

	const getSize = React.useCallback(() => {
		if (!isClient) {
			return {
				height: null,
				width: null
			}
		}

		return {
			height: window.innerHeight,
			width: window.innerWidth
		}
	}, [isClient])

	const [windowSize, setWindowSize] = React.useState(getSize())

	React.useEffect(() => {
		const handleSetSize = () => setWindowSize(getSize())

		on(window, 'resize', handleSetSize)
		on(window, 'orientationchange', handleSetSize)
		return () => {
			off(window, 'resize', handleSetSize)
			off(window, 'orientationchange', handleSetSize)
		}
	}, [getSize])

	return windowSize
}
