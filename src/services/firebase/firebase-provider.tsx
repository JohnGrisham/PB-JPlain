import * as React from 'react'
import FirebaseContext, { FirebaseContextData } from './firebase-context'
import { app } from 'firebase'
import { checkIsClient } from '../../utils'
import { getFirebase } from './get-firebase-instance'

const FirebaseProvider: React.FC = ({ children }) => {
	const isClient = React.useMemo(() => checkIsClient(), [])
	const [isInitialized, setIsInitialized] = React.useState(false)
	const [firebase, setFirebase] = React.useState<app.App | null>(null)
	const [authToken, setAuthToken] = React.useState<FirebaseContextData['authToken']>(
		isClient ? window.localStorage.getItem('authToken') : null
	)

	React.useEffect(() => {
		const firebaseInstance = getFirebase()
		setFirebase(firebaseInstance)

		if (firebaseInstance) {
			setIsInitialized(true)
		}
	}, [])

	const onSetAuthToken = (token: string) => {
		setAuthToken(token)
		localStorage.setItem('authToken', token)
	}

	React.useEffect(() => {
		if (isClient && !authToken) {
			const token = window.localStorage.getItem('authToken')

			if (token) {
				onSetAuthToken(token)
			}
		}
	}, [authToken, isClient])

	return (
		<FirebaseContext.Provider
			value={{
				authToken,
				firebase,
				isInitialized,
				setAuthToken: onSetAuthToken
			}}>
			{children}
		</FirebaseContext.Provider>
	)
}

export default FirebaseProvider
