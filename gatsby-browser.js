import * as React from 'react'
import { FirebaseProvider, WindowProvider } from './src/services'
import { ConvertProvider } from './src/contexts'

export const wrapRootElement = ({ element }) => (
	<FirebaseProvider>
		<WindowProvider>
			<ConvertProvider>{element}</ConvertProvider>
		</WindowProvider>
	</FirebaseProvider>
)
