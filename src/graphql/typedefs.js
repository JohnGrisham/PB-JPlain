const typeDefs = `
type ActionOptions {
	actionContent: String!
	href: String 
}

type AttributedUser {
	name: String!
	company: String
	title: String
	avatar: String
}

type BenefitsJson implements Node {
	heading: String
	description: String!
	image: ImageOptions
	order: Int!
}

type DescriptionJson implements Node {
	heading: String
	subHeading: String
	steps: [Step!]
}

type Feature {
	included: Boolean
	planLevel: Int!
	description: String!
}

type Icon {
	prefix: String
	name: String!
}

type ImageOptions {
	src: String!
	height: Int!
	width: Int!
}

type Plan {
	action: ActionOptions
	image: ImageOptions
	level: Int!
	price: String!
	features: [Feature!]
	type: String!
}

type PricingJson implements Node {
	heading: String
	subHeading: String
	plans: [Plan!]!
	sharedFeatures: [Feature!]
}

type Step {
	icon: Icon
	heading: String!
	description: String
}

type Testimony {
	attributedUser: AttributedUser!
	quote: String!
}

type TestimonialsJson implements Node {
	heading: String
	subHeading: String
	testimonials: [Testimony!]!
}
`

module.exports = typeDefs
