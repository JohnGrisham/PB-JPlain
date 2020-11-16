import * as React from 'react'
import { checkIsClient, usePageLeave } from '../utils'
import ConvertContext from './convert-context'

const ConvertProvider: React.FC = ({ children }) => {
	const [hasBeenDismissed, setHasBeenDismissed] = React.useState(false)
	const [isOpen, setIsOpen] = React.useState(false)
	const isClient = checkIsClient()

	const onSetHasBeenDismissed = (value: boolean) => {
		localStorage.setItem('hasBeenDismissed', JSON.stringify(value))
		setHasBeenDismissed(value)
	}

	React.useEffect(() => {
		if (!isClient) {
			return
		}

		const hasBeenDismissedInStorage = window.localStorage.getItem('hasBeenDismissed')

		if (hasBeenDismissedInStorage) {
			onSetHasBeenDismissed(JSON.parse(hasBeenDismissedInStorage as string))
		}
	}, [isClient])

	usePageLeave(!hasBeenDismissed ? () => setIsOpen(true) : undefined)

	return (
		<ConvertContext.Provider
			value={{
				isOpen,
				setHasBeenDismissed: onSetHasBeenDismissed,
				setIsOpen
			}}>
			{children}
		</ConvertContext.Provider>
	)
}

export default ConvertProvider
