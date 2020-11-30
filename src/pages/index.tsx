import * as React from 'react'
import { Landing, Layout, SEO } from '../components'

const HomePage = () => {
	return (
		<Layout>
			<SEO title="Break your echo chamber in social media" />
			<Landing
				heading="News that doesn't care how you feel"
				subHeading="Sign up to get early access"
				callToAction="Sign up"
			/>
		</Layout>
	)
}

export default HomePage
