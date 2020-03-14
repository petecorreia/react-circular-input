import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { Theme } from '../config'

const GlobalStyle = createGlobalStyle<{
	theme: Theme
}>`
	${normalize()};

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	body {
		min-width: 320px;
		font-family: "Inter", "Helvetica Neue", helvetica, arial, sans-serif;
		line-height: 1.375;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	h1, h2, h3, h4, h5, h6, p, ul, ol {
		&:first-child {
			margin-top: 0;
		}
	}

	h1, h2, h3 {
		margin-top: ${({ theme }) => theme.space[4]}px;
		margin-bottom: ${({ theme }) => theme.space[3]}px;
	}

	h1 {
		letter-spacing: -0.03em;
	}

	h2 {
		letter-spacing: -0.02em;
	}

	ul, ol {
		padding-left: 1em;

		@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
			padding-left: ${({ theme }) => theme.space[4]}px;
		}
	}

	li {
		& + & {
			margin-top: ${({ theme }) => theme.space[2]}px;
		}
	}

	a {
		color: inherit;
	}

	hr,
	blockquote {
		margin: ${({ theme }) => theme.space[4]}px 0;
	}

	hr {
		border: none;
		border-top: 3px solid #f1f1f1;
	}

	blockquote {
		font-size: ${({ theme }) => theme.fontSizes[3]}px;
		line-height: 1.375;
	}

	code {
		display: inline-block;
		padding: 0px 8px;
		font-size: 13px;
		font-family: 'Monaco', 'Consolas', 'Courier New', Courier, monospace;
		line-height: 1.345em;
		color: #08134a;
		background: #eee;
	}
`

export default GlobalStyle
