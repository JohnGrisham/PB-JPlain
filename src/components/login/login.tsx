import { AuthError, FirebaseContext } from '../../services'
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { auth } from 'firebase'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { navigate } from 'gatsby'

const Login: React.FC = () => {
	const { firebase, authToken, setAuthToken } = React.useContext(FirebaseContext)
	const [email, setEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

	const handleGoogleAuth = React.useCallback(
		async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			try {
				event.preventDefault()
				const provider = new firebase.auth.GoogleAuthProvider()
				const { credential } = await firebase.auth().signInWithPopup(provider)

				if (credential) {
					const { accessToken } = credential as auth.OAuthCredential
					setAuthToken(accessToken as string)
				}
			} catch (e) {
				// eslint-disable-next-line no-console
				console.log(e)
			}
		},
		[firebase, setAuthToken]
	)

	const handleSignupAndLogin = React.useCallback(
		async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			let authError: AuthError | undefined

			try {
				event.preventDefault()
				const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)

				if (user) {
					const { refreshToken } = user
					setAuthToken(refreshToken)
				}
			} catch (error) {
				authError = error
			} finally {
				if (authError?.code === 'auth/email-already-in-use') {
					const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)

					if (user) {
						const { refreshToken } = user
						setAuthToken(refreshToken)
					}
				}
			}
		},
		[email, password, firebase, setAuthToken]
	)

	React.useEffect(() => {
		if (authToken) {
			navigate('/')
		}
	}, [authToken])

	return (
		<form style={{ display: 'flex', flexDirection: 'column' }}>
			<FormControl>
				<InputLabel htmlFor="email">Email address</InputLabel>
				<Input
					id="email"
					aria-describedby="email-helper"
					value={email}
					onChange={(event) => setEmail(event.currentTarget.value)}
				/>
				<FormHelperText id="email-helper">We&apos;ll never share your email.</FormHelperText>
			</FormControl>
			<FormControl>
				<InputLabel htmlFor="password">Password</InputLabel>
				<Input id="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
			</FormControl>
			<Button
				type="submit"
				variant="contained"
				color="primary"
				style={{ marginTop: '10px' }}
				onClick={handleSignupAndLogin}>
				Login / Sign Up
			</Button>
			<Button
				type="button"
				variant="contained"
				color="primary"
				style={{ marginTop: '10px' }}
				onClick={handleGoogleAuth}>
				<FontAwesomeIcon icon={faGoogle} style={{ marginRight: '10px' }} />
				Login With Google
			</Button>
		</form>
	)
}

export default Login
