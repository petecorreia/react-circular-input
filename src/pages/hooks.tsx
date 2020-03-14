import React from 'react'
import CodeHighlight from '../shared/CodeHighlight'
import Lead from '../shared/Lead'
import SEO from '../shared/SEO'

const Hooks = () => (
	<>
		<SEO />

		<Lead>
			We provide Hooks for implementing your own custom components! 🎉
		</Lead>

		<p>
			⚠️ The hooks below can only be used by children of{' '}
			<code>CircularInput</code>.
		</p>

		<h2>useCircularInputContext</h2>

		<p>
			Gives you access to the same context used by the components so you
			can <strong>create custom ones</strong>. 🙂
		</p>

		<p>
			It returns computed values and utility functions that should be
			enough to build any custom component.
		</p>

		<CodeHighlight
			code={`
				const {
					value,						// current value
					radius,						// radius in px
					center,						// {x,y} of center
					isFocused,					// is input focused state
					setFocused,					// set input focused state
					onChange,					// onChange handler
					getPointFromValue, 			// util: returns {x,y} of current value
					getValueFromPointerEvent, 	// util: returns the nearest value to the given pointer event
				} = useCircularInputContext()


				// Example of a custom component to display text on top of the thumb

				const CustomComponent = () => {
					const { getPointFromValue, value } = useCircularInputContext()
					const { x, y } = getPointFromValue()

					return (
						<text x={x} y={y} style={{ pointerEvents: 'none' }}>
							{Math.round(value * 100)}
						</text>
					)
				}
			`}
		/>

		<h2>useCircularDrag</h2>

		<p>
			Useful to <strong>make custom elements an input to dragging</strong>
			.
		</p>

		<p>
			Adds event listeners to an element ref to fire the{' '}
			<code>CircularThumb</code> <code>onChange</code> on click and drag
			with the nearest value.
		</p>

		<p>
			Adds/removes listeners as needed so you don&apos;t have to worry
			about that complexity.
		</p>

		<p>
			<code>CircularThumb</code> uses this hook:{' '}
			<a href="https://github.com/petecorreia/react-circular-input/blob/master/src/CircularThumb.tsx#L10">
				View source
			</a>
		</p>

		<CodeHighlight
			code={`
				const ref = useRef(null) // your element ref

				useCircularDrag(ref)

				// ...on click/drag it's going to update value
				// to the nearest point in the value circumference


				// Example of a custom thumb component

				const CustomThumb = () => {
					const { getPointFromValue } = useCircularInputContext()
					const { x, y } = getPointFromValue()

					const ref = useRef(null)
					useCircularDrag(ref)

					return <circle ref={ref} cx={x} cy={y} r={20} />
				}
			`}
		/>
	</>
)

export default Hooks
