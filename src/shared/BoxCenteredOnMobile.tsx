import styled from 'styled-components'
import { theme } from '../shared/config'

const BoxCenteredOnMobile = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (min-width: ${theme.breakpoints[1]}) {
		justify-content: inherit;
	}
`

export default BoxCenteredOnMobile
