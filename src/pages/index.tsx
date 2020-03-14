import React, { useState } from 'react'
import Link from 'next/link'
import CodeHighlight from './components/CodeHighlight'
import Lead from './components/Lead'
import BoxCenteredOnMobile from './components/BoxCenteredOnMobile'
import SEO from './components/SEO'
import { CircularInput } from '../'

const Example = () => {
	const [value, setValue] = useState(0.25)
	return <CircularInput value={value} onChange={v => setValue(v)} />
}

const Home = () => (
	<>
		<SEO />

		<Lead>
			React components for easily composing a circular range input
		</Lead>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<Example />
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
			npm i react-circular-input
		`}
			language="bash"
		/>

		<h2>Example</h2>

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
						<CircularInput value={value} onChange={setValue}>
							<CircularTrack />
							<CircularProgress />
							<CircularThumb />
						</CircularInput>
					)
				}
			`}
		/>

		<p>
			There&apos;s a lot more you can do with the library. From a simple
			gauge to a fully custom and animated circular input range.
		</p>

		<p>
			Play around with the{' '}
			<a
				href="https://codesandbox.io/s/ypwq61rnxz?hidenavigation=1&view=preview"
				target="_blank"
				rel="noopener noreferrer"
			>
				<strong>examples at CodeSandbox</strong>
			</a>
		</p>

		<a
			href="https://codesandbox.io/s/ypwq61rnxz?hidenavigation=1&view=preview"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				alt="Edit react-circular-input"
				src="https://codesandbox.io/static/img/play-codesandbox.svg"
			/>
		</a>

		<p>
			A declarative and composable approach means we have a lot of
			flexibility, check out the other pages for how to go further!
		</p>

		<ul>
			<li>
				<Link href="/examples">
					<a>Examples</a>
				</Link>
			</li>
			<li>
				<Link href="/components">
					<a>Components</a>
				</Link>
			</li>
			<li>
				<Link href="/hooks">
					<a>Hooks</a>
				</Link>
			</li>
		</ul>
	</>
)

export default Home
