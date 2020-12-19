import * as React from 'react'
import * as Styled from './styles'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IntersectionContext } from '../intersection-observer'
import { Testimony as TestimonyProps } from '../../interfaces'

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
					{attributedUser.avatar && (
						<Styled.AttributedUserAvatar src={require(`../../images/${attributedUser.avatar}`)} />
					)}
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
