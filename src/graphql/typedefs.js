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
	planLevel: Int!
	description: String!
}

type ImageOptions {
	src: String!
	height: Int!
	width: Int!
}

type MarkdownRemarkFrontmatter {
	title: String!
	slug: String!
	date: String
	featuredImage: String
}

type MarkdownRemark implements Node {
	frontmatter: MarkdownRemarkFrontmatter
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
	icon: String
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
