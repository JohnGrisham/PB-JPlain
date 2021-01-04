import * as React from 'react'
import * as Styled from './styles'

const Confirmation: React.FC = () => {
	return (
		<Styled.Confirmation>
			<span>
				<h2>Congratulations you&apos;re now on the waitlist</h2>
				<h5 style={{ color: '#fff0cc' }}>That&apos;s one step closer to breaking your echo chamber</h5>
				<h5>
					While you wait checkout:
					<br />
					<a href="https://www.theflipside.io/">The Flip Side</a>
				</h5>
			</span>
			<Styled.ConfirmationImage />
		</Styled.Confirmation>
	)
}

export default Confirmation
