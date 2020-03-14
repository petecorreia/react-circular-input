import styled from 'styled-components'
import { Flex } from 'rebass'
import { Theme } from '../../config'

const BoxCenteredOnMobile = styled(Flex)`
	justify-content: center;

	@media screen and (min-width: ${({ theme }: { theme: Theme }) =>
			theme.breakpoints[1]}) {
		justify-content: inherit;
	}
`

export default BoxCenteredOnMobile
