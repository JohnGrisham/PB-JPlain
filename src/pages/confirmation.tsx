import * as React from 'react'
import { Confirmation, Layout, PrivateRoute, SEO } from '../components'

const ConfirmationPage: React.FC = () => (
	<PrivateRoute>
		<Layout>
			<SEO title="Confirmation" />
			<Confirmation />
		</Layout>
	</PrivateRoute>
)

export default ConfirmationPage
