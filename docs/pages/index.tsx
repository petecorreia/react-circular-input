import React, { useState } from 'react'
import { Lead, CodeHighlight, Link } from 'tsx-docs'
import { CircularInput } from '../../src'

export default () => {
	const [value, setValue] = useState(0.5)
	return (
		<>
			<Lead>
				Welcome to your Docs{' '}
				<span role="img" aria-label="party">
					🎉
				</span>
			</Lead>

			<CircularInput value={value} onChange={v => setValue(v)} />

			<p>
				We recommend following our{' '}
				<a href="https://tsx-docs.now.sh/guide">Guide</a> if you're not already
				doing it.
			</p>

			<p>
				You should also have a look at all the{' '}
				<a href="https://tsx-docs.now.sh/configuration">
					configuration options
				</a>{' '}
				and the provided{' '}
				<a href="https://tsx-docs.now.sh/components">components</a>.
			</p>

			<hr />

			<CodeHighlight
				code={`
					npm run dev
					npm run build
					npm run typecheck
				`}
				language="bash"
			/>
		</>
	)
}
