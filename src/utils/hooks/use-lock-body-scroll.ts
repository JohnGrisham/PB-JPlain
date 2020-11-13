import { checkIsClient } from '../check-is-client'
import { useLayoutEffect } from 'react'

export default function useLockBodyScroll(condition: boolean) {
	const isClient = checkIsClient()

	useLayoutEffect(() => {
		if (!isClient || !condition) {
			return
		}

		const resetStyle = () => {
			document.body.style.overflow = originalStyle
		}

		// Get original body overflow
		const originalStyle = window.getComputedStyle(document.body).overflow
		// Prevent scrolling on mount
		document.body.style.overflow = 'hidden'
		// Re-enable scrolling when component unmounts
		return resetStyle()
	}, [condition, isClient]) // Empty array ensures effect is only run on mount and unmount
}
