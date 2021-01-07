// https://reedbarger.com/how-to-create-a-custom-usedevicedetect-react-hook/
// https://dev.to/itsabdessalam/detect-current-device-type-with-javascript-490j
import React from 'react'
import { checkIsClient } from '../check-is-client'

export enum DeviceType {
	Mobile = 'mobile',
	Tablet = 'tablet',
	Desktop = 'desktop'
}

export default function useDeviceDetect() {
	const [deviceType, setDeviceType] = React.useState<DeviceType>(DeviceType.Desktop)
	const isClient = checkIsClient()

	React.useEffect(() => {
		const userAgent = !isClient ? null : navigator.userAgent

		if (!userAgent) {
			return
		}

		const tablet = Boolean(userAgent.match(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i))
		const mobile = Boolean(
			userAgent.match(
				/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/
			)
		)

		if (tablet) {
			return setDeviceType(DeviceType.Tablet)
		}

		if (mobile) {
			return setDeviceType(DeviceType.Mobile)
		}

		return setDeviceType(DeviceType.Desktop)
	}, [isClient])

	return deviceType
}
