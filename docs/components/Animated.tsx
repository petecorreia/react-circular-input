import React, { useRef } from 'react'
import { useSpring, animated, interpolate } from 'react-spring/hooks'
import { useCircularThumbDrag, useCircularInputContext } from '../../src'
import { polarToCartesian, valueToAngle, DEG_360_IN_RAD } from '../../src/utils'

export const AnimatedThumb = () => {
	const thumbRef = useRef<SVGCircleElement | null>(null)
	const { value, center, radius } = useCircularInputContext()
	useCircularThumbDrag(thumbRef)
	const { value: animatedValue } = useSpring({ value })

	return (
		<animated.circle
			ref={thumbRef}
			r={20}
			fill="#0045e5"
			cx={interpolate([animatedValue], v => {
				const { x } = polarToCartesian({
					center,
					angle: valueToAngle(v),
					radius,
				})
				return x
			})}
			cy={interpolate([animatedValue], v => {
				const { y } = polarToCartesian({
					center,
					angle: valueToAngle(v),
					radius,
				})
				return y
			})}
		/>
	)
}

export const AnimatedProgress = () => {
	const { value, radius, center } = useCircularInputContext()
	const innerCircumference = DEG_360_IN_RAD * radius
	const {
		value: animatedValue,
		innerCircumference: animatedCircumference,
	} = useSpring({ innerCircumference, value })

	return (
		<animated.circle
			fill="none"
			stroke="#3D99FF"
			strokeWidth={20}
			strokeLinecap="round"
			cx={center.x}
			cy={center.y}
			r={radius}
			strokeDasharray={animatedCircumference}
			strokeDashoffset={interpolate(
				[animatedValue, animatedCircumference],
				(v, c) => c * (1 - v)
			)}
			transform={`rotate(-90 ${center.x} ${center.y})`}
		/>
	)
}
