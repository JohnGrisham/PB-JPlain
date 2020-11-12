// Source: https://github.com/streamich/react-use/blob/master/docs/useOrientation.md
import { off, on } from '../helpers'
import { useEffect, useState } from 'react'

export interface OrientationState {
	angle: number
	type: string
}

const defaultState: OrientationState = {
	angle: 0,
	type: 'landscape-primary'
}

const useOrientation = (initialState: OrientationState = defaultState) => {
	const screen = window.screen
	const [state, setState] = useState(initialState)

	useEffect(() => {
		let mounted = true

		const onChange = () => {
			if (mounted) {
				const { orientation } = screen

				if (orientation) {
					const { angle, type } = orientation
					setState({ angle, type })
				} else if (window.orientation) {
					setState({
						angle: typeof window.orientation === 'number' ? window.orientation : 0,
						type: ''
					})
				} else {
					setState(initialState)
				}
			}
		}

		on(window, 'orientationchange', onChange)
		onChange()

		return () => {
			mounted = false
			off(window, 'orientationchange', onChange)
		}
	}, [initialState, screen])

	return state
}

export default useOrientation
