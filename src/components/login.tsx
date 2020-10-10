import Button from '@material-ui/core/Button'
import { FirebaseContext } from '../services/firebase-provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { navigate } from 'gatsby'

const Login: React.FC = () => {
	const { firebase, authToken, setAuthToken } = React.useContext(FirebaseContext)

	const handleGoogleAuth = React.useCallback(
		async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			try {
				event.preventDefault()
				const provider = new firebase.auth.GoogleAuthProvider()
				const {
					credential: { accessToken }
				} = await firebase.auth().signInWithPopup(provider)

				if (accessToken) {
					setAuthToken(accessToken)
				}
			} catch (e) {
				// eslint-disable-next-line no-console
				console.log(e)
			}
		},
		[firebase, setAuthToken]
	)

	React.useEffect(() => {
		if (authToken) {
			navigate('/')
		}
	}, [authToken])

	return (
		<Button variant="contained" color="primary" onClick={handleGoogleAuth}>
			<FontAwesomeIcon icon={faGoogle} style={{ marginRight: '10px' }} />
			Login With Google
		</Button>
	)
}

export default Login
