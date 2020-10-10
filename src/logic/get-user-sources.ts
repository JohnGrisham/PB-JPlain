import { Source, User } from '../interfaces'
import { sources } from '../data/sources'

export function getUserSources(user: User): Source[] {
	const sourcesClone = [...sources]
	const userSources: Source[] = []
	const userIsRight = user.bias > 0
	let breakGoal = user.breakBiasTarget

	const goalHit = userIsRight ? breakGoal <= 0 : breakGoal >= 0

	while (!goalHit) {
		const newsSourceIndex = sourcesClone.findIndex((source) => {
			return userIsRight ? source.bias <= 0 : source.bias >= 0
		})

		const newsSource = newsSourceIndex >= 0 ? sourcesClone[newsSourceIndex] : undefined

		if (newsSource) {
			userSources.push(newsSource)
			sourcesClone.splice(newsSourceIndex, 1)
			breakGoal += newsSource.bias
			continue
		}

		break
	}

	return userSources
}
