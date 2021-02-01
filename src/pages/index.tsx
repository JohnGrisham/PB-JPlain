import * as React from 'react'
import { Landing, Layout, SEO } from '../components'

const HomePage = () => {
	return (
		<Layout>
			<SEO title="Gatsby Template" previewImage={{ width: 267 }} />
			<Landing
				heading="Get the best of both worlds"
				subHeading="Fast and flexible template"
				callToAction="Eat it!"
			/>
		</Layout>
	)
}

export default HomePage
