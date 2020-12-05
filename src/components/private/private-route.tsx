import { FirebaseContext } from '../../services'
import React from 'react'
import { navigate } from 'gatsby'

export interface PrivateRouteProps {
	path?: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, path = '/' }) => {
	const { authToken } = React.useContext(FirebaseContext)

	if (!authToken && window.location.href !== path) {
		navigate(path)
		return null
	}

	return <>{children}</>
}
export default PrivateRoute
