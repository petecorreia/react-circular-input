import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Spring, config } from 'react-spring/renderprops.cjs'
import Link from 'next/link'
import CodeHighlight from './components/CodeHighlight'
import Lead from './components/Lead'
import BoxCenteredOnMobile from './components/BoxCenteredOnMobile'
import SEO from './components/SEO'
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb,
	useCircularInputContext
} from '../'

const Examples = () => (
	<>
		<SEO />

		<Lead>
			A declarative and composable approach means we have a lot of
			flexibility, here are a few examples that showcase it.
		</Lead>

		<ul style={{ margin: '32px 0' }}>
			<li>
				<a href="#default">Default</a>
			</li>
			<li>
				<a href="#animated">Animated</a>
			</li>
			<li>
				<a href="#styled">Styled</a>
			</li>
			<li>
				<a href="#custom-component">Custom Component</a>
			</li>
			<li>
				<a href="#progress">Progress</a>
			</li>
			<li>
				<a href="#min-max-scale">Min, Max & Scale</a>
			</li>
			<li>
				<a href="#steps">Steps</a>
			</li>
			<li>
				<a href="#readonly">Readonly</a>
			</li>
			<li>
				<a href="#render-prop">Render Prop</a>
			</li>
		</ul>

		<p>
			Or play around with the{' '}
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

		<h2 id="default">Default</h2>

		<p>
			An example of using the 3 components included with their default
			styling.
		</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<DefaultExample />
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				const [value, setValue] = useState(0.25)

				return (
					<CircularInput value={value} onChange={setValue}>
						<CircularTrack />
						<CircularProgress />
						<CircularThumb />
					</CircularInput>
				)
			`}
		/>

		<h2 id="animated">Animated</h2>

		<p>
			You can use libraries like{' '}
			<a href="https://www.react-spring.io/">react-spring</a> to add
			animation.
		</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<AnimatedExample />
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				const [value, setValue] = useState(0.25)

				return (
					<Spring to={{ value }}>
						{props => (
							<CircularInput value={props.value} onChange={setValue}>
								<CircularTrack />
								<CircularProgress />
								<CircularThumb />
							</CircularInput>
						)}
					</Spring>
				)
			`}
		/>

		<h2 id="styled">Styled</h2>

		<p>
			The recommended way to style the components is to use CSS classes or
			CSS-in-JS as you normally do for other components 🙂
		</p>

		<p>
			<code>CircularTrack</code>, <code>CircularProgress</code> and{' '}
			<code>CircularThumb</code> are just SVG <code>{`<circle />`}</code>{' '}
			so you can also just tweak most (see Component docs) attributes 💅
		</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<StyledExample />
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				const [value, setValue] = useState(0.25)

				return (
					<StyledCircularInput value={value} onChange={setValue}>
						{/* CSS-in-JS */}
						<StyledCircularTrack />

						{/* CSS class */}
						<CircularProgress className="custom-progress" />

						{/* SVG style prop */}
						<CircularThumb r={10} fill="rgba(255,255,255,0.5)" />
					</StyledCircularInput>
				)
			`}
		/>

		<h2 id="custom-component">Custom Component</h2>

		<p>
			Using the provided{' '}
			<strong>
				<Link href="/hooks">
					<a>Hooks</a>
				</Link>
			</strong>{' '}
			you can create your own components! 🤩
		</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<CustomExample />
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				const CustomComponent = () => {
					const { getPointFromValue, value } = useCircularInputContext()
					const { x, y } = getPointFromValue()

					return (
						<text x={x} y={y} style={{ pointerEvents: 'none' }}>
							{Math.round(value * 100)}
						</text>
					)
				}

				const CustomComponentExample = () => {
					const [value, setValue] = useState(0.25)

					return (
						<CircularInput value={value} onChange={setValue}>
							<CircularProgress />
							<CircularThumb />

							{/* Add any component and use the provided hooks! */}
							<CustomComponent />

						</CircularInput>
					)
				}
			`}
		/>

		<h2 id="progress">Progress</h2>

		<p>Can be used to simply display progress/gauge.</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<ProgressExample />
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				<CircularInput value={Math.random()}>
					<CircularTrack strokeWidth={5} stroke="#eee" />
					<CircularProgress stroke={\`hsl(\${props.value * 100}, 100%, 50%)\`} />
				</CircularInput>
			`}
		/>

		<h2 id="min-max-scale">Min, Max & Scale</h2>

		<p>
			There are no props for min/max/etc as you can easily achieve these
			and much more with simple code.
		</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<MinMaxScaleExample />
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				const [value, setValue] = useState(0.25)

				// custom limits
				const min = 0.25
				const max = 0.75

				// get value within limits
				const valueWithinLimits = v => Math.min(Math.max(v, min), max)

				// custom range
				const range = [0, 100]

				// scaled range value
				const rangeValue = value * (range[1] - range[0]) + range[0]

				return (
					<CircularInput
						value={valueWithinLimits(value)}
						onChange={v => setValue(valueWithinLimits(v))}
					>
						<CircularTrack />
						<CircularProgress />

						{/* limit lines */}
						<line x1={-10} x2={10} y1={100} y2={100} stroke="black" />
						<line x1={190} x2={210} y1={100} y2={100} stroke="black" />

						<CircularThumb />

						{/* range value in center */}
						<text x={100} y={100} textAnchor="middle" dy="0.3em" fontWeight="bold">
							{Math.round(rangeValue)}%
						</text>
					</CircularInput>
				)
			`}
		/>

		<h2 id="steps">Steps</h2>

		<p>
			You&apos;re in full control of the value so it&apos;s easy to
			introduce the stepped interaction.
		</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<SteppedExample />
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				const [value, setValue] = useState(0.25)

				const stepValue = v => Math.round(v * 10) / 10

				return (
					<CircularInput
						value={stepValue(value)}
						onChange={v => setValue(stepValue(v))}
					>
						<CircularTrack />
						<CircularProgress />
						<CircularThumb />

						<text x={100} y={100} textAnchor="middle" dy="0.3em" fontWeight="bold">
							{Math.round(stepValue(value) * 100)}%
						</text>
					</CircularInput>
				)
			`}
		/>

		<h2 id="readonly">Readonly</h2>

		<p>
			Omitting the <code>onChange</code> prop makes it readonly.
		</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<CircularInput value={0.25}>
				<CircularTrack />
				<CircularProgress />
			</CircularInput>
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				<CircularInput value={0.25}>
					<CircularTrack />
					<CircularProgress />
				</CircularInput>
			`}
		/>

		<h2 id="render-prop">Render Prop</h2>

		<p>
			Use <code>children</code> prop as a function to receive the current
			context.
		</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<RenderPropExample />
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				const [value, setValue] = useState(0.25)

				return (
					<CircularInput value={value} onChange={setValue}>
						{({ getPointFromValue }) => (
							<>
								<CircularTrack />
								<CircularProgress />

								<text {...getPointFromValue()} dx="30" dy="0.3em">
									wee!
								</text>

								<CircularThumb />
							</>
						)}
					</CircularInput>
				)
			`}
		/>

		<p>
			It might be a good time to dive deep into customisation with
			components and hooks:
		</p>

		<ul>
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

function DefaultExample() {
	const [value, setValue] = useState(0.25)
	return (
		<CircularInput value={value} onChange={setValue}>
			<CircularTrack />
			<CircularProgress />
			<CircularThumb />
		</CircularInput>
	)
}

function ProgressExample() {
	const [value, setValue] = useState(0.25)

	useEffect(() => {
		const i = setInterval(() => {
			setValue(Math.random())
		}, 1000)
		return () => clearInterval(i)
	}, [])

	return (
		<Spring to={{ value }} config={config.slow}>
			{props => (
				<CircularInput value={props.value}>
					<CircularTrack strokeWidth={5} stroke="#eee" />
					<CircularProgress
						stroke={`hsl(${props.value * 100}, 100%, 50%)`}
					/>
				</CircularInput>
			)}
		</Spring>
	)
}

const StyledCircularInput = styled(CircularInput)`
	.custom-progress {
		stroke: #b1108e;
		stroke-width: 40px;
	}
`

const StyledCircularTrack = styled(CircularTrack)`
	stroke: #f6f6f6;
	stroke-width: 10px;
`

function StyledExample() {
	const [value, setValue] = useState(0.25)
	return (
		<StyledCircularInput value={value} onChange={setValue}>
			<StyledCircularTrack />
			<CircularProgress className="custom-progress" />
			<CircularThumb r={10} fill="rgba(255,255,255,0.5)" />
		</StyledCircularInput>
	)
}

function AnimatedExample() {
	const [value, setValue] = useState(0.25)

	return (
		<Spring to={{ value }} config={config.stiff}>
			{props => (
				<CircularInput value={props.value} onChange={setValue}>
					<CircularTrack />
					<CircularProgress />
					<CircularThumb />
				</CircularInput>
			)}
		</Spring>
	)
}

function CustomComponent() {
	const { getPointFromValue, value } = useCircularInputContext()
	const { x, y } = getPointFromValue()

	return (
		<text
			x={x}
			y={y}
			textAnchor="middle"
			dy="0.35em"
			fill="rgb(61, 153, 255)"
			style={{ pointerEvents: 'none', fontWeight: 'bold' }}
		>
			{Math.round(value * 100)}
		</text>
	)
}

function CustomExample() {
	const [value, setValue] = useState(0.25)

	return (
		<Spring to={{ value }} config={config.stiff}>
			{props => (
				<CircularInput value={props.value} onChange={setValue}>
					<CircularProgress
						strokeWidth={45}
						stroke={`rgba(61, 153, 255, ${props.value})`}
					/>
					<CircularThumb
						fill="white"
						stroke="rgb(61, 153, 255)"
						strokeWidth="5"
					/>
					<CustomComponent />
				</CircularInput>
			)}
		</Spring>
	)
}

function RenderPropExample() {
	const [value, setValue] = useState(0.25)
	return (
		<CircularInput value={value} onChange={setValue}>
			{({ getPointFromValue }) => (
				<>
					<CircularTrack />
					<CircularProgress />
					<text {...getPointFromValue()} dx="30" dy="0.3em">
						wee!
					</text>
					<CircularThumb />
				</>
			)}
		</CircularInput>
	)
}

function MinMaxScaleExample() {
	const [value, setValue] = useState(0.25)

	// custom limits
	const min = 0.25
	const max = 0.75

	// get value within limits
	const valueWithinLimits = v => Math.min(Math.max(v, min), max)

	// custom range
	const range = [0, 100]

	// scaled range value
	const rangeValue = value * (range[1] - range[0]) + range[0]

	return (
		<CircularInput
			// make sure value is always within limits
			value={valueWithinLimits(value)}
			// make sure we set value within limits
			onChange={v => setValue(valueWithinLimits(v))}
		>
			<CircularTrack />
			<CircularProgress />

			{/* limit lines */}
			<line x1={-10} x2={10} y1={100} y2={100} stroke="black" />
			<line x1={190} x2={210} y1={100} y2={100} stroke="black" />

			<CircularThumb />

			{/* range value in center */}
			<text
				x={100}
				y={100}
				textAnchor="middle"
				dy="0.3em"
				fontWeight="bold"
			>
				{Math.round(rangeValue)}%
			</text>
		</CircularInput>
	)
}

function SteppedExample() {
	const [value, setValue] = useState(0.25)
	const stepValue = v => Math.round(v * 10) / 10
	return (
		<CircularInput
			value={stepValue(value)}
			onChange={v => setValue(stepValue(v))}
		>
			<CircularTrack />
			<CircularProgress />
			<CircularThumb />

			<text
				x={100}
				y={100}
				textAnchor="middle"
				dy="0.3em"
				fontWeight="bold"
			>
				{Math.round(stepValue(value) * 100)}%
			</text>
		</CircularInput>
	)
}

export default Examples
