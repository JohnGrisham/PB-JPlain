export interface Testimonial {
	attributedUser: {
		avatar?: string
		company?: string
		title?: string
		name: string
	}
	quote: string
}
export interface TestimonialOptions {
	heading?: string
	subHeading?: string
	testimonials: Testimonial[]
}
