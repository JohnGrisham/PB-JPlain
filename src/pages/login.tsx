import * as React from 'react'
import { Layout, Login, SEO } from '../components'

const LoginPage: React.FC = () => (
	<Layout>
		<SEO title="Login" />
		<Login />
	</Layout>
)

export default LoginPage
