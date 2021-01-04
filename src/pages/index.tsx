import * as React from 'react'
import { Landing, Layout, SEO } from '../components'

const HomePage = () => {
	return (
		<Layout>
			<SEO title="Break your Echo Chamber" />
			<Landing
				heading="News perspectives from both sides"
				subHeading="Sign up to get early access"
				callToAction="Sign up"
			/>
		</Layout>
	)
}

export default HomePage
