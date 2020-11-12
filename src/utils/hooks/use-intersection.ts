// https://github.com/streamich/react-use/blob/master/src/useIntersection.ts
import { RefObject, useEffect, useState } from 'react'
import useOrientation from './use-orientation'

const useIntersection = (
	ref: RefObject<HTMLElement>,
	options: IntersectionObserverInit
): IntersectionObserverEntry | null => {
	const [intersectionObserverEntry, setIntersectionObserverEntry] = useState<IntersectionObserverEntry | null>(null)
	const orientation = useOrientation()

	useEffect(() => {
		if (ref.current && typeof IntersectionObserver === 'function') {
			const handler = (entries: IntersectionObserverEntry[]) => {
				setIntersectionObserverEntry(entries[0])
			}

			const observer = new IntersectionObserver(handler, options)
			observer.observe(ref.current)

			return () => {
				setIntersectionObserverEntry(null)
				observer.disconnect()
			}
		}
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		return () => {}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref.current, options.threshold, options.root, options.rootMargin, orientation.angle])

	return intersectionObserverEntry
}

export default useIntersection
