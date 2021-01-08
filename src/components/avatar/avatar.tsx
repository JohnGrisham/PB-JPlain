import * as React from 'react'
import * as Styled from './styles'
import { AttributedUser, Query } from '../../interfaces'
import { graphql, useStaticQuery } from 'gatsby'
import { AvatarProps as MaterialUIAvatarProps } from '@material-ui/core'

export interface AvatarProps extends MaterialUIAvatarProps {
	avatar: AttributedUser['avatar']
}

const Avatar: React.FC<AvatarProps> = ({ avatar, ...props }) => {
	const query = graphql`
		query {
			allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
				nodes {
					relativePath
					publicURL
				}
			}
		}
	`

	const data = useStaticQuery<{ allFile: Query['allFile'] }>(query)

	const avatarPath = React.useMemo(() => {
		const match = data.allFile.nodes.find(({ relativePath }: { relativePath: string }) => avatar === relativePath)

		if (match && match.publicURL) {
			return match.publicURL
		}
	}, [avatar, data])

	return <Styled.Avatar src={avatarPath} {...props} />
}

export default Avatar
