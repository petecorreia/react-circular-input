import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'
import { TSXDocsTheme } from 'tsx-docs/dist/types'

const BoxCenteredOnMobile = styled(Flex)`
	justify-content: center;

	@media screen and (min-width: ${({ theme }: { theme: TSXDocsTheme }) =>
			theme.breakpoints[1]}) {
		justify-content: inherit;
	}
`

export default BoxCenteredOnMobile
