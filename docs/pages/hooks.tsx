import React from 'react'
import { Lead, CodeHighlight } from 'tsx-docs'

export default () => (
	<>
		<Lead>
			We provide Hooks for implementing your own interactive custom components!
			🎉
		</Lead>

		<p>
			⚠️ The hooks below can only be used by children of{' '}
			<code>CircularInput</code>.
		</p>

		<h2>useCircularDrag</h2>

		<p>
			Makes a component "draggable" and fires the <code>CircularThumb</code>{' '}
			<code>onChange</code> on click and drag with the nearest value.
		</p>

		<p>
			Adds/removes event listeners as needed so you don't have to worry about
			that complexity.
		</p>

		<CodeHighlight
			code={`
				const ref = useRef(null) // your element ref

				useCircularDrag(ref)

				// ...on click/drag it's going to update value
				// to the nearest point in the value circumference
			`}
		/>

		<p>
			<code>CircularThumb</code> uses this hook:{' '}
			<a href="https://github.com/petecorreia/react-circular-input/blob/master/src/CircularThumb.tsx#L10">
				View source
			</a>
		</p>

		<h2>useCircularInputContext</h2>

		<p>
			Gives you access to the same context used by the components so you can
			create custom ones. 🙂
		</p>

		<p>
			You get access to key computed values and utility functions that should be
			enough to build any custom component.
		</p>

		<CodeHighlight
			code={`
				const {

					value,						// current value
					radius,						// radius in px
					center,						// {x,y} of center
					onChange,					// onChange handler
					getPointFromValue, 			// util: returns {x,y} when given a value [0-1]
					getValueFromPointerEvent, 	// util: returns the nearest value to the given pointer event

				} = useCircularInputContext()
			`}
		/>
	</>
)
