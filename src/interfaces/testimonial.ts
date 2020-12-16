export interface Testimonial {
	attributedUser: {
		avatar?: string
		company?: string
		name: string
	}
	quote: string
}
export interface TestimonialOptions {
	heading?: string
	subHeading?: string
	testimonials: Testimonial[]
}
