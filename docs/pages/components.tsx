import React, { useState } from 'react'
import { Lead, CodeHighlight, Link } from 'tsx-docs'
import BoxCenteredOnMobile from '../components/BoxCenteredOnMobile'
import {
	CircularInput,
	CircularProgress,
	CircularThumb,
	CircularTrack,
} from '../../src'

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

export default () => (
	<>
		<h2>CircularInput</h2>

		<p>Provides all the logic and context for the children components.</p>

		<p>
			Using this component by itself is not recommended as the library is most
			useful when it's used with composition.
		</p>

		<CodeHighlight
			code={`
				<CircularInput value={value} radius={75} onChange={setValue} />
			`}
		/>

		<BoxCenteredOnMobile py={3} mt={3}>
			<CircularInputExample />
		</BoxCenteredOnMobile>

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

		<BoxCenteredOnMobile py={3} mt={3}>
			<CircularProgressExample />
		</BoxCenteredOnMobile>

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

		<BoxCenteredOnMobile>
			<CircularThumbExample />
		</BoxCenteredOnMobile>

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

		<BoxCenteredOnMobile>
			<CircularTrackExample />
		</BoxCenteredOnMobile>

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
