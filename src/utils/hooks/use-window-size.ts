import * as React from 'react'

// Source: https://usehooks.com/useWindowSize/
export default function useWindowSize(): {
	height: number | undefined
	width: number | undefined
} {
	const isClient = typeof window === 'object'

	function getSize() {
		return {
			height: isClient ? window.innerHeight : undefined,
			width: isClient ? window.innerWidth : undefined
		}
	}

	const [windowSize, setWindowSize] = React.useState(getSize)

	React.useEffect(() => {
		if (!isClient) {
			return
		}

		function handleResize() {
			setWindowSize(getSize())
		}

		window.addEventListener('resize', handleResize)
		window.addEventListener('orientationchange', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('orientationchange', handleResize)
		}
	})

	return windowSize
}
