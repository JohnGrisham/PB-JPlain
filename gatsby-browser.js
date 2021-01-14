import * as React from 'react'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import loadable from '@loadable/component'

library.add(fas, faReact)

const WindowProvider = loadable(() => import('./src/services/window/window-provider'))

export const wrapRootElement = ({ element }) => <WindowProvider>{element}</WindowProvider>
