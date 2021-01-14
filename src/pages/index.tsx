import * as React from 'react'
import { Landing, Layout, SEO } from '../components'

const HomePage = () => {
	return (
		<Layout>
			<SEO title="They go together" />
			<Landing
				heading="Get the best of both worlds"
				subHeading="fast and flexible template"
				callToAction="Eat it!"
			/>
		</Layout>
	)
}

export default HomePage
