import * as React from 'react'
import { BenefitOptions, Step } from '../interfaces'
import { Landing, Layout, SEO } from '../components'
import { faDoorOpen, faEye, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const steps: Step[] = [
	{
		description:
			'Tell us your political leaning and some basic information about the type of content you see on your social media feed. Are you more liberal or conservative? Do you prefer CNN, Fox news or somewhere else?',
		heading: 'Tell us your viewpoint',
		icon: faEye
	},
	{
		description:
			"Find sources that you typically wouldn't follow and read articles on topics you already have an opinion on but through a different set of eyes. Discover topics you've never heard of from pundits across the political spectrum as well as news from traditionally less biased sources.",
		heading: 'Discover new perspectives',
		icon: faNewspaper
	},
	{
		description:
			"Prepare to leave your social media filter bubble. News outlets you've avoided in the past start to make a little more sense and you're ready to give a different viewpoint a shot. You now have a deeper understanding of the news everyone else is reading and not just your own.",
		heading: 'Leave your echo chamber',
		icon: faDoorOpen
	}
]

const benefits: BenefitOptions[] = [
	{
		description:
			'There are so many different viewpoints when it comes to political artlcles online and at times it can be overwhelming. Most people only follow the sources that confirm their bias. We bring the news that challenges your perspective to one place.',
		image: { height: 350, src: 'press-release.png', width: 350 }
	},
	{
		description:
			'Regardless of how you vote staying informed on political news and topics is important. You could spend hours searching articles or you could come here. Get a wide range of views and not just the ones on your social media feed to make the best possible decision come election day.',
		image: { height: 350, src: 'vote.png', width: 350 }
	},
	{
		description:
			"As political polarisation continues to grow it's even more important that we have access to different viewpoints. Stay up to date with conflicting viewpoints and thoughts on relevant news and start making better arguements for the things you care about.",
		image: { height: 350, src: 'divide.png', width: 350 }
	}
]

const HomePage: React.FC = () => (
	<Layout>
		<SEO title="Break your echo chamber in social media" />
		<Landing
			benefits={benefits}
			heading="News that doesn't care how you feel"
			subHeading="Sign up to get early access"
			callToAction="Sign up"
			description={{ heading: 'You have a bias', steps, subHeading: "It's time to break it!" }}
		/>
	</Layout>
)

export default HomePage
