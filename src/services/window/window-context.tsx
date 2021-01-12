import * as React from 'react'

export interface WindowContextData {
	height: number | null
	width: number | null
}

const WindowContext = React.createContext<WindowContextData>({
	height: 0,
	width: 0
})

export default WindowContext
