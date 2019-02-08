import React, { useState } from 'react'
import Lead from '../components/Lead'
import CodeHighlight from '../components/CodeHighlight'
import {
	CircularInput,
	CircularProgress,
	CircularThumb,
	CircularTrack,
} from 'react-circular-input'
import { Flex } from 'rebass'
import Link from 'next/link'

const Example = () => {
	const [value, setValue] = useState(0.25)
	return (
		<Flex justifyContent="center" alignItems="center" pt={5} pb={5} my={-4}>
			<CircularInput value={value} radius={100} onChange={setValue}>
				<CircularTrack />
				<CircularProgress />
				<CircularThumb />
			</CircularInput>
		</Flex>
	)
}

const Index = () => (
	<>
		<Lead>
			React components for easily composing a circular range input{' '}
			<span role="img" aria-label="party">
				🌀
			</span>
		</Lead>

		<ul>
			<li>Declarative and composable components</li>
			<li>First-class support for Typescript</li>
			<li>Export hooks for easy customisation</li>
		</ul>

		<CodeHighlight
			code={`
				npm install react-circular-input
			`}
			language="bash"
		/>

		<Example />

		<CodeHighlight
			code={`
				import {
					CircularInput,
					CircularProgress,
					CircularThumb,
					CircularTrack
				} from 'react-circular-input'


				const Example = () => {
					const [value, setValue] = useState(0.25)

					return (
						<CircularInput value={value} radius={100} onChange={setValue}>
							<CircularTrack />
							<CircularProgress />
							<CircularThumb />
						</CircularInput>
					)
				}
			`}
		/>

		<p>
			From a simple gauge to a fully custom and animated circular input range,
			you have the power to compose, customise and animate every part of the
			react-circular-input.
		</p>

		<hr />

		<p>
			Check out other{' '}
			<Link href="/examples">
				<a>Examples</a>
			</Link>
		</p>
	</>
)

export default Index
