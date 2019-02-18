import React, { useState, useEffect } from 'react'
import { Spring, config } from 'react-spring/renderprops.cjs'
import { CodeHighlight, Lead } from 'tsx-docs'
import BoxCenteredOnMobile from '../components/BoxCenteredOnMobile'
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb,
} from '../../src'
import styled from 'styled-components'
import { animated } from 'react-spring/renderprops-universal'

const FullFeaturedExample = () => {
	const [value, setValue] = useState(0.25)
	return (
		<CircularInput value={value} onChange={setValue}>
			<CircularTrack />
			<CircularProgress />
			<CircularThumb />
		</CircularInput>
	)
}

const ProgressExample = () => {
	const [value, setValue] = useState(0.25)

	useEffect(() => {
		const i = setInterval(() => {
			setValue(Math.random())
		}, 1000)
		return () => clearInterval(i)
	}, [])

	return (
		<Spring to={{ value }}>
			{props => (
				<CircularInput value={props.value}>
					<CircularTrack />
					<CircularProgress />
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

const StyledExample = () => {
	const [value, setValue] = useState(0.25)
	return (
		<StyledCircularInput value={value} onChange={setValue}>
			<StyledCircularTrack />
			<CircularProgress className="custom-progress" />
			<CircularThumb r={10} fill="rgba(255,255,255,0.5)" />
		</StyledCircularInput>
	)
}

const AnimatedExample = () => {
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

export default () => (
	<>
		<Lead>
			A declarative and composable approach means we have a lot of flexibility,
			here are a few examples that showcase it.
		</Lead>

		<h2 id="full-featured">Full featured</h2>

		<p>
			An example of using the 3 components included with their default styling.
		</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<FullFeaturedExample />
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
			<a href="https://www.react-spring.io/">react-spring</a> to add animation.
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
			<code>CircularThumb</code> are just SVG <code>{`<circle />`}</code> so you
			can also just tweak most (see Component docs) attributes 💅
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

		<h2 id="readonly">Readonly</h2>

		<p>
			⚠️ Omitting the <code>onChange</code> prop makes it readonly.
		</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<CircularInput value={0.25}>
				<CircularTrack />
				<CircularProgress />
				<CircularThumb />
			</CircularInput>
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				<CircularInput value={0.25}>
					<CircularTrack />
					<CircularProgress />
					<CircularThumb />
				</CircularInput>
			`}
		/>

		<h2 id="progress">Progress</h2>

		<p>Can be used to simply display progress/gauge.</p>

		<BoxCenteredOnMobile py={[3, 3, 4]} mt={4}>
			<ProgressExample />
		</BoxCenteredOnMobile>

		<CodeHighlight
			code={`
				<CircularInput value={0.25}>
					<CircularTrack />
					<CircularProgress />
				</CircularInput>
			`}
		/>
	</>
)
