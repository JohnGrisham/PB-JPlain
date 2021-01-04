import { Dialog } from '@material-ui/core'
import styled from 'styled-components'

export const ConvertModal = styled(Dialog)`
	h4 {
		text-align: center;
	}

	.MuiDialog-paper {
		align-items: center;
		background-color: white;
		display: flex;
		flex-direction: column;
		padding: 25px;
	}
`
