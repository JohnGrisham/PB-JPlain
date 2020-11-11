import { FirebaseError as FBError } from 'firebase'

type AuthError = FBError & Error

export default AuthError
