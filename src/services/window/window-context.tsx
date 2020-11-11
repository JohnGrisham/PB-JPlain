import * as React from 'react'

export interface WindowContextData {
	height: number
	width: number
}

const WindowContext = React.createContext<WindowContextData>({
	height: 0,
	width: 0
})

export default WindowContext
