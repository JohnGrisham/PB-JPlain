import * as React from 'react'
import { Landing, Layout, PrivateRoute, SEO } from '../components'
import { faBaseballBall, faBath, faBed, faBell, faBolt } from '@fortawesome/free-solid-svg-icons'
import { Step } from '../interfaces'

const steps: Step[] = [
	{
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		heading: 'Feugiat in ante',
		icon: faBath
	},
	{
		description:
			'Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Ridiculus mus mauris vitae ultricies. Volutpat diam ut venenatis tellus in metus vulputate eu.',
		heading: 'Pellentesque habitant morbi',
		icon: faBaseballBall
	},
	{
		description:
			'Dignissim sodales ut eu sem. Id donec ultrices tincidunt arcu non sodales. Quis ipsum suspendisse ultrices gravida dictum fusce.',
		heading: 'Feugiat in ante metus',
		icon: faBed
	},
	{
		description:
			'Cursus eget nunc scelerisque viverra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Morbi non arcu risus quis varius quam quisque id.',
		heading: 'Nec feugiat',
		icon: faBell
	},
	{
		description: 'Nec feugiat in fermentum posuere urna. Aliquet nibh praesent tristique magna sit amet purus gravida.',
		heading: 'Quam id leo in vitae',
		icon: faBolt
	}
]

const HomePage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<PrivateRoute path="/login">
			<Landing
				heading="News that doesn't care how you feel"
				subHeading="Sign up to get early access"
				callToAction="Get started"
				description={{ heading: 'You have a bias', steps, subHeading: "It's time to break it!" }}
			/>
		</PrivateRoute>
	</Layout>
)

export default HomePage
