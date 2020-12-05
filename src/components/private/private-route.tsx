import { FirebaseContext } from '../../services'
import React from 'react'
import { checkIsClient } from '../../utils'
import { navigate } from 'gatsby'

export interface PrivateRouteProps {
	path?: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, path = '/' }) => {
	const { authToken } = React.useContext(FirebaseContext)

	const isClient = React.useMemo(() => checkIsClient(), [])

	React.useEffect(() => {
		const checkPermission = () => {
			if (!authToken && window.location.href !== path) {
				navigate(path)
			}
		}

		if (!isClient) {
			return
		}

		checkPermission()
	}, [authToken, isClient, path])

	if (!authToken) {
		return null
	}

	return <>{children}</>
}
export default PrivateRoute
