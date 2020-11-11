import * as React from 'react'
import WindowContext from './window-context'
import { useWindowSize } from '../../utils/hooks'

const WindowProvider: React.FC = ({ children }) => {
	const { height, width } = useWindowSize()

	return (
		<WindowContext.Provider
			value={{
				height,
				width
			}}>
			{children}
		</WindowContext.Provider>
	)
}

export default WindowProvider
