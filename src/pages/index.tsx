import * as React from 'react'
import { BenefitOptions, Step } from '../interfaces'
import { Landing, Layout, PrivateRoute, SEO } from '../components'
import { faBaseballBall, faBath, faBed, faBell, faBolt } from '@fortawesome/free-solid-svg-icons'

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

const benefits: BenefitOptions[] = [
	{
		description:
			'There are so many different viewpoints when it comes to political news online and at times it can be overwhelming. Most people only follow the news sources that confirm their bias. We bring the news that challenges your perspective to one place.',
		image: { height: 350, src: 'press-release.png', width: 350 }
	},
	{
		description:
			'Regardless of how you vote staying informed on political news and topics is important. You could spend hours seaching through partisan and bipartisan news or you could come here. Never miss an article and get a wide range of views to make the best possible decision come election day.',
		image: { height: 350, src: 'vote.png', width: 350 }
	},
	{
		description:
			'Regardless of how you vote staying informed on political news and topics is important. You could spend hours seaching through partisan and bipartisan news or you could come here. Never miss an article and get a wide range of views to make the best possible decision come election day.',
		image: { height: 350, src: 'divide.png', width: 350 }
	}
]

const HomePage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<PrivateRoute path="/login">
			<Landing
				benefits={benefits}
				heading="News that doesn't care how you feel"
				subHeading="Sign up to get early access"
				callToAction="Get started"
				description={{ heading: 'You have a bias', steps, subHeading: "It's time to break it!" }}
			/>
		</PrivateRoute>
	</Layout>
)

export default HomePage
