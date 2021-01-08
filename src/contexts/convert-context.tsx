/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'

export interface ConvertContextData {
	hasBeenDismissed: boolean
	isOpen: boolean
	setHasBeenDismissed: (value: boolean) => void
	setIsOpen: (isOpen: boolean) => void
}

const ConvertContext = React.createContext<ConvertContextData>({
	hasBeenDismissed: false,
	isOpen: false,
	setHasBeenDismissed: () => {},
	setIsOpen: () => {}
})

export default ConvertContext
