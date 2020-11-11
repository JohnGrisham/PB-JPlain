import * as React from 'react'

export interface WindowContextData {
	height?: number
	width?: number
}

const WindowContext = React.createContext<WindowContextData>({
	height: undefined,
	width: undefined
})

export default WindowContext
