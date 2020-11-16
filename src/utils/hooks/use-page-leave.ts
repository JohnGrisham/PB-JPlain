/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
// https://github.com/streamich/react-use/blob/master/docs/usePageLeave.md
import { off, on } from '../helpers'
import { checkIsClient } from '../check-is-client'
import { useEffect } from 'react'

const usePageLeave = (onPageLeave?: () => void) => {
	const isClient = checkIsClient()

	useEffect(() => {
		if (!onPageLeave || !isClient) {
			return
		}

		const handler = (event: any) => {
			event = event ? event : window.event
			const from = event.relatedTarget || event.toElement
			if (!from || (from as any).nodeName === '#document') {
				onPageLeave()
			}
		}

		on(document, 'mouseout', handler)
		return () => {
			off(document, 'mouseout', handler)
		}
	}, [isClient, onPageLeave])
}

export default usePageLeave
