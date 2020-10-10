import Layout from '../components/layout'
import Login from '../components/login'
import React from 'react'
import SEO from '../components/seo'

const LoginPage: React.FC = () => (
	<Layout>
		<SEO title="Login" />
		<Login />
	</Layout>
)

export default LoginPage
