import * as React from 'react'
import { app } from 'firebase'

export interface FirebaseContextData {
	isInitialized: boolean
	firebase: app.App | null
	authToken: string | null
	setAuthToken: (authToken: string) => void
}

const FirebaseContext = React.createContext<FirebaseContextData>({
	authToken: null,
	firebase: null,
	isInitialized: false,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setAuthToken: () => {}
})

export default FirebaseContext
