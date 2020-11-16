/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'

export interface ConvertContextData {
	isOpen: boolean
	setHasBeenDismissed: (value: boolean) => void
	setIsOpen: (isOpen: boolean) => void
}

const ConvertContext = React.createContext<ConvertContextData>({
	isOpen: false,
	setHasBeenDismissed: () => {},
	setIsOpen: () => {}
})

export default ConvertContext
