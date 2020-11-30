import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'

export interface Step {
	icon?: IconName | [prefix: IconPrefix, name: IconName]
	heading?: string
	description?: string
}
