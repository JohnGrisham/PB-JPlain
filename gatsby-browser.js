import * as React from 'react'
import { FirebaseProvider, WindowProvider } from './src/services'

export const wrapRootElement = ({ element }) => (
	<FirebaseProvider>
		<WindowProvider>{element}</WindowProvider>
	</FirebaseProvider>
)
