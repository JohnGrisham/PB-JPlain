import * as React from 'react'
import loadable from '@loadable/component'

const ConvertProvider = loadable(() => import('./src/contexts/convert-context-provider'))
const FirebaseProvider = loadable(() => import('./src/services/firebase/firebase-provider'))
const WindowProvider = loadable(() => import('./src/services/window/window-provider'))

export const wrapRootElement = ({ element }) => (
	<FirebaseProvider>
		<WindowProvider>
			<ConvertProvider>{element}</ConvertProvider>
		</WindowProvider>
	</FirebaseProvider>
)
