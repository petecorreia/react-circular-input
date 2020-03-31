import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import CodeHighlight from '../shared/CodeHighlight'
import BoxCenteredOnMobile from '../shared/BoxCenteredOnMobile'
import SEO from '../shared/SEO'
import { theme } from '../shared/config'
import {
	CircularInput,
	CircularProgress,
	CircularThumb,
	CircularTrack,
} from '../'

const Example = styled(BoxCenteredOnMobile)``
const ExampleSpaced = styled(BoxCenteredOnMobile)`
	padding: ${theme.space[3]}px 0;
	margin-top: ${theme.space[3]}px;
`

const CircularInputExample = () => {
	const [value, setValue] = useState(0.25)
	return <CircularInput value={value} radius={75} onChange={setValue} />
}

const CircularProgressExample = () => {
	const [value, setValue] = useState(0.75)
	return (
		<CircularInput value={value} radius={75} onChange={setValue}>
			<CircularProgress />
		</CircularInput>
	)
}

const CircularThumbExample = () => {
	const [value, setValue] = useState(0.75)
	return (
		<CircularInput value={value} radius={75} onChange={setValue}>
			<CircularThumb />
		</CircularInput>
	)
}

const CircularTrackExample = () => (
	<CircularInput value={0.75} radius={75}>
		<CircularTrack />
	</CircularInput>
)

const Components = () => (
	<>
		<SEO />

		<h2>CircularInput</h2>

		<p>Provides all the logic and context for the children components.</p>

		<p>
			<strong>The value is always between 0 and 1</strong>. This makes all
			interpolations and customisations easy to calculate. Check out the{' '}
			<Link href="/examples">
				<a>Examples</a>
			</Link>
			.
		</p>

		<p>
			Using this component by itself is not recommended as the library is
			most useful when it&apos;s used with composition.
		</p>

		<CodeHighlight
			code={`
				<CircularInput value={value} radius={75} onChange={setValue} />
			`}
		/>

		<ExampleSpaced>
			<CircularInputExample />
		</ExampleSpaced>

		<h3>Props</h3>

		<CodeHighlight
			code={`
				✅ value: number // range: [0-1]
				✅ radius?: number
				✅ onChange?: (value: number) => any

				// the following props are disallowed to support functionality:
				🚫 ref
				🚫 width
				🚫 height
				🚫 viewBox
				🚫 onClick

				// it's an <svg> under the hood
				...HTMLProps<SVGSVGElement>
			`}
		/>

		<h2>CircularProgress</h2>

		<p>Displays a circular segment to the value provided.</p>

		<CodeHighlight
			code={`
				<CircularInput value={0.75}>

					<CircularProgress />

				</CircularInput>
			`}
		/>

		<ExampleSpaced>
			<CircularProgressExample />
		</ExampleSpaced>

		<h3>Props</h3>

		<CodeHighlight
			code={`
				// the following props are disallowed to support functionality:
				🚫 ref
				🚫 cx
				🚫 cy
				🚫 r
				🚫 strokeDasharray
				🚫 strokeDashoffset
				🚫 transform

				// it's an svg circle under the hood:
				...SVGProps<SVGCircleElement>
			`}
		/>

		<h2>CircularThumb</h2>

		<p>Displays a handle at the value point coordinates.</p>

		<CodeHighlight
			code={`
				<CircularInput value={0.75}>

					<CircularThumb />

				</CircularInput>
			`}
		/>

		<Example>
			<CircularThumbExample />
		</Example>

		<h3>Props</h3>

		<CodeHighlight
			code={`
				// the following props are disallowed to support functionality:
				🚫 ref
				🚫 cx
				🚫 cy

				// it's an svg circle under the hood:
				...SVGProps<SVGCircleElement>
			`}
		/>

		<h2>CircularTrack</h2>

		<p>Displays the value circumference path.</p>

		<p>This component by itself is not very exciting... 😅</p>

		<CodeHighlight
			code={`
				<CircularInput value={0.75}>

					<CircularTrack />

				</CircularInput>
			`}
		/>

		<Example>
			<CircularTrackExample />
		</Example>

		<h3>Props</h3>

		<CodeHighlight
			code={`
				// the following props are disallowed to support functionality:
				🚫 ref
				🚫 cx
				🚫 cy
				🚫 r

				// it's an svg circle under the hood:
				...SVGProps<SVGCircleElement>
			`}
		/>

		<p>Looking to create your own custom component? Take a look at:</p>

		<ul>
			<li>
				<Link href="/hooks">
					<a>Hooks</a>
				</Link>
			</li>
		</ul>
	</>
)

export default Components
