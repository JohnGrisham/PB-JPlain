import React from 'react'
import { checkIsClient } from '../utils'
import firebase from 'firebase'

const firebaseConfig = {
	apiKey: process.env.GATSBY_FIREBASE_APIKEY,
	appId: process.env.GATSBY_FIREBASE_APPID,
	authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
	databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
	measurementId: process.env.GATSBY_FIREBASE_MEASUREMENTID,
	messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
	projectId: process.env.GATSBY_FIREBASE_PROJECTID,
	storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET
}
export interface FirebaseContextData {
	isInitialized: boolean
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	firebase: typeof firebase
	authToken: string | null
	setAuthToken: (authToken: string) => void
}

export const FirebaseContext = React.createContext<FirebaseContextData>({
	authToken: null,
	firebase,
	isInitialized: false,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setAuthToken: () => {}
})

export const FirebaseProvider: React.FC = ({ children }) => {
	const [isInitialized, setIsInitialized] = React.useState(false)
	const [authToken, setAuthToken] = React.useState<FirebaseContextData['authToken']>(
		typeof window === 'object' ? window.localStorage.getItem('authToken') : null
	)

	if (!firebase.apps.length && checkIsClient()) {
		firebase.initializeApp(firebaseConfig)
		setIsInitialized(true)
	}

	const onSetAuthToken = (token: string) => {
		setAuthToken(token)
		localStorage.setItem('authToken', token)
	}

	React.useEffect(() => {
		if (typeof window === 'object' && !authToken) {
			const token = window.localStorage.getItem('authToken')

			if (token) {
				onSetAuthToken(token)
			}
		}
	}, [authToken])

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
