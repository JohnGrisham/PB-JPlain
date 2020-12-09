import 'firebase/auth'
import { checkIsClient } from '../../utils'
import firebase from 'firebase/app'

const config = {
	apiKey: process.env.GATSBY_FIREBASE_APIKEY,
	appId: process.env.GATSBY_FIREBASE_APPID,
	authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
	databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
	measurementId: process.env.GATSBY_FIREBASE_MEASUREMENTID,
	messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
	projectId: process.env.GATSBY_FIREBASE_PROJECTID,
	storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET
}

let instance: firebase.app.App | null = firebase.apps.length > 0 ? firebase.apps[0] : null

export function getFirebase() {
	if (checkIsClient()) {
		if (instance) return instance
		instance = firebase.initializeApp(config)
		return instance
	}

	return null
}
