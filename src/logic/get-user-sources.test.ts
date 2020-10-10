import { Bias } from '../enums'
import { User } from '../interfaces'
import { getUserSources } from './get-user-sources'

describe('getUserSources', () => {
	it('should return sources for leftist user', () => {
		const user: User = {
			bias: Bias.Left,
			breakBiasTarget: -20,
			email: 'john.email.com',
			firstName: 'John',
			lastName: 'Grisham',
			password: 'test',
			userId: 1
		}

		const result = getUserSources(user)

		for (const source of result) {
			expect(source.bias).toBeGreaterThanOrEqual(0)
		}
	})

	it('should return sources for rightist user', () => {
		const user: User = {
			bias: Bias.Right,
			breakBiasTarget: 20,
			email: 'john.email.com',
			firstName: 'John',
			lastName: 'Grisham',
			password: 'test',
			userId: 1
		}

		const result = getUserSources(user)

		for (const source of result) {
			expect(source.bias).toBeLessThanOrEqual(0)
		}
	})
})
