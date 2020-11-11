import * as React from 'react'
import { FirebaseProvider } from './src/services'

export const wrapRootElement = ({ element }) => <FirebaseProvider>{element}</FirebaseProvider>
