// Source: https://usehooks.com/useWindowSize/
import * as React from 'react'
import { off, on } from '../helpers'

export default function useWindowSize(): {
	height: number
	width: number
} {
	const getSize = React.useCallback(() => {
		return {
			height: window.innerHeight,
			width: window.innerWidth
		}
	}, [])

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
