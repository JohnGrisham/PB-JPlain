import * as React from 'react'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import loadable from '@loadable/component'

library.add(fas)

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
