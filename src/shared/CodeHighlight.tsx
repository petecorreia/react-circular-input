import React, { FunctionComponent, useRef, useEffect } from 'react'
import styled from 'styled-components'
import stripIndent from 'strip-indent'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'

type Props = {
	code: string
	language?: 'tsx' | 'jsx' | 'ts' | 'js' | 'json' | 'bash'
	className?: string
}

const defaultProps: Partial<Props> = {
	language: 'tsx'
}

const Wrapper = styled.div`
	padding: ${({ theme }) => theme.space[3]}px;
	margin: ${({ theme }) => theme.space[4]}px 0;
	background: #f6f6f6;

	&:first-child {
		margin-top: 0;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		padding: ${({ theme }) => theme.space[4]}px;
	}
`

const Code = styled.pre`
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	margin: 0;
	color: #08134a;
	font-family: 'Monaco', 'Consolas', 'Courier New', Courier, monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	font-size: 13px;
	line-height: 1.345em;
	tab-size: 4;
	hyphens: none;
	-webkit-font-smoothing: auto;
	-moz-osx-font-smoothing: auto;

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: #aaa;
		font-style: italic;
	}

	.token.namespace {
		opacity: 0.7;
	}

	.token.string,
	.token.attr-value {
		color: #a44185;
	}
	.token.punctuation,
	.token.operator,
	.token.property {
		color: #08134a;
	}

	.token.tag {
		color: #384caf;
	}

	.token.entity,
	.token.url,
	.token.symbol,
	.token.number,
	.token.boolean,
	.token.variable,
	.token.constant,
	.token.regex,
	.token.inserted {
		color: #36acaa;
	}

	.token.atrule,
	.token.keyword,
	.token.attr-name,
	.language-autohotkey .token.selector {
		color: #449;
	}

	.token.function,
	.token.deleted,
	.language-autohotkey .token.tag {
		color: #b1108e;
	}

	.token.selector,
	.language-autohotkey .token.keyword {
		color: #b1108e;
	}

	.token.important,
	.token.function-variable,
	.token.bold {
		font-weight: bold;
	}

	.token.italic {
		font-style: italic;
	}
`

const Preview = styled.div`
	margin-bottom: ${({ theme }) => theme.space[4]}px;
`

const CodeHighlight: FunctionComponent<Props> = ({
	code,
	language,
	children,
	className
}) => {
	const ref = useRef<HTMLPreElement | null>(null)

	useEffect(() => {
		if (!ref.current) return
		Prism.highlightElement(ref.current)
	}, [code, language, ref])

	return (
		<Wrapper className={className}>
			{children && <Preview>{children}</Preview>}
			<Code ref={ref} className={`language-${language}`}>
				{tidyCode(code)}
			</Code>
		</Wrapper>
	)
}

CodeHighlight.defaultProps = defaultProps

function tidyCode(code: string) {
	return stripIndent(code).trim()
}

export default CodeHighlight
