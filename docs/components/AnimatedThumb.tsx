import React from 'react'
import { useSpring, animated } from 'react-spring/hooks'
import { useCircularThumbDrag } from '../../src'

export const AnimatedThumb = () => {
	const { cx, cy, ...dragProps } = useCircularThumbDrag()
	const animatedProps = useSpring({ cx, cy })

	// TODO: interpolate rather than animate!

	return (
		// @ts-ignore
		<animated.circle
			r={10}
			fill="#0045e5"
			style={animatedProps}
			{...dragProps}
		/>
	)
}
