import { App } from 'tsx-docs'
import styled from 'styled-components'
import { TSXDocsTheme } from 'tsx-docs/dist/types'

import '../static/fonts/fonts.css'

export default styled(App as any)`
	@media screen and (max-width: 400px) {
		.app-title {
			font-size: 22px;
		}
	}
`
