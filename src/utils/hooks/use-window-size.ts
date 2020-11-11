import * as React from 'react'

// Source: https://usehooks.com/useWindowSize/
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

		window.addEventListener('resize', handleSetSize)
		window.addEventListener('orientationchange', handleSetSize)
		return () => {
			window.removeEventListener('resize', handleSetSize)
			window.removeEventListener('orientationchange', handleSetSize)
		}
	}, [getSize])

	return windowSize
}
