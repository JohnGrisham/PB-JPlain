import { Bias } from '../enums'

export interface Source {
	category: string
	country: string
	description: string
	id: string
	language: string
	name: string
	url: string
	bias: Bias
}
