import { sample, shuffle } from 'lodash'
import { Bias } from '../enums'
import { Source } from '../interfaces'
import { sources } from '../data/sources'

export function getLandingSources() {
	const landingSources: Source[] = []

	let sourceBias: Bias = 0

	while (landingSources.length !== 15) {
		const shuffled = shuffle(sources)

		for (const source of shuffled) {
			if (landingSources.length === 15) {
				break
			}

			if (landingSources.includes(source)) {
				continue
			}

			if (sourceBias === Bias.Centrist && source.bias === 0) {
				sourceBias = -1
				landingSources.push(source)
			} else if (sourceBias < 0 && source.bias < 0) {
				sourceBias = 1
				landingSources.push(source)
			} else if (sourceBias > 0 && source.bias > 0) {
				sourceBias = 0
				landingSources.push(source)
			}
		}
	}

	return landingSources
}
