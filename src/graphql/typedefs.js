const typeDefs = `
type AttributedUser {
	name: String!
	company: String
	title: String
	avatar: String
}

type BenefitsJson implements Node {
	description: String!
	image: ImageOptions
	order: Int!
}

type DescriptionJson implements Node {
	heading: String
	subHeading: String
	steps: [Step!]
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
