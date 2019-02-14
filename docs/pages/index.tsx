import React, { useState } from 'react'
import { Lead, CodeHighlight, Link } from 'tsx-docs'
import { CircularInput } from '../../src'

const Example = () => {
	const [value, setValue] = useState(0.25)
	return (
		<CircularInput
			value={value}
			onChange={v => setValue(v)}
			style={{ marginTop: 40, marginBottom: 20 }}
		/>
	)
}

export default () => (
	<>
		<Lead>
			React components for easily composing a circular range input{' '}
			<span role="img" aria-label="party">
				🌀
			</span>
		</Lead>

		<Example />

		<CodeHighlight
			code={`
			npm i react-circular-input
		`}
			language="bash"
		/>

		<h2>Example</h2>

		<p>You can use the default circular input:</p>

		<CodeHighlight
			code={`
				import { CircularInput } from 'react-circular-input'

				export default () => {
					const [value, setValue] = useState(0.25)

					return (
						<CircularInput value={value} onChange={v => setValue(v)} />
					)
				}
			`}
		/>

		<p>Or compose it:</p>

		<CodeHighlight
			code={`
				import {
					CircularInput,
					CircularTrack,
					CircularProgress,
					CircularThumb,
				} from 'react-circular-input'

				export default () => {
					const [value, setValue] = useState(0.25)

					return (
						<CircularInput value={value} onChange={v => setValue(v)}>
							<CircularTrack />
							<CircularProgress />
							<CircularThumb />
						</CircularInput>
					)
				}
			`}
		/>
	</>
)
