import * as React from 'react'
import * as Styled from './styles'
import { Button, TextField } from '@material-ui/core'

export const CallToAction: React.FC = () => {
	return (
		<Styled.CallToAction>
			<Styled.CallToActionImage />
			<form autoComplete="off">
				<Styled.CallToActionInput>
					<TextField id="CTA" label="Email" type="email" variant="outlined" />
					<Button type="submit" variant="contained" color="primary">
						Sign Up
					</Button>
				</Styled.CallToActionInput>
			</form>
		</Styled.CallToAction>
	)
}
