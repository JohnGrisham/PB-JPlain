import * as React from 'react'
import * as Styled from './styles'
import { Query, Testimony as TestimonyProps } from '../../../../../interfaces'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IntersectionContext } from '../../../../intersection-observer'

const testimonyVariants = {
	flip: {
		rotateY: 0
	},
	hide: {
		rotateY: 90
	}
}

const Testimony: React.FC<TestimonyProps> = ({ attributedUser, quote }) => {
	const { inThreshold } = React.useContext(IntersectionContext)

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
		const match = data.allFile.nodes.find(
			({ relativePath }: { relativePath: string }) => attributedUser.avatar === relativePath
		)

		if (match && match.publicURL) {
			return match.publicURL
		}
	}, [data, attributedUser])

	const motionProps = React.useMemo(
		() => ({
			animate: inThreshold ? 'flip' : 'hide',
			exit: 'hide',
			initial: 'hide',
			transition: {
				duration: 1,
				ease: 'easeInOut'
			}
		}),
		[inThreshold]
	)

	return (
		<Styled.TestimonyMotion {...motionProps} variants={testimonyVariants}>
			<Styled.Testimony>
				<Styled.Quote>
					<FontAwesomeIcon icon={faQuoteLeft} />
					<h3>{quote}</h3>
					<FontAwesomeIcon icon={faQuoteRight} />
				</Styled.Quote>
				<Styled.AttributedUser>
					{attributedUser.avatar && avatarPath && <Styled.AttributedUserAvatar src={avatarPath} />}
					<Styled.AttributedUserInformation>
						<h4>{attributedUser.name}</h4>
						{(attributedUser.company || attributedUser.title) && (
							<span>{`${attributedUser.title ? attributedUser.title : ''}${
								attributedUser.company && attributedUser.title ? ', ' : ''
							} ${attributedUser.company ? attributedUser.company : ''}`}</span>
						)}
					</Styled.AttributedUserInformation>
				</Styled.AttributedUser>
			</Styled.Testimony>
		</Styled.TestimonyMotion>
	)
}

export default Testimony
