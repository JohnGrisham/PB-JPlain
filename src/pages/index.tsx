import Home from '../components/home'
import Layout from '../components/layout'
import PrivateRoute from '../components/private-route'
import React from 'react'
import SEO from '../components/seo'

const HomePage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<PrivateRoute path="/login">
			<Home />
		</PrivateRoute>
	</Layout>
)

export default HomePage
