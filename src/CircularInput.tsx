import React, { useRef, HTMLProps, RefObject, useCallback } from 'react'
import PropTypes from 'prop-types'
import { scaleLinear } from 'd3-scale'
import {
	matrixScale,
	polarToCartesian,
	DEG_360_IN_RAD,
	ANGLE_OFFSET,
	clamp,
	Coordinates,
	calculateNearestValueToPoint,
	absMousePos,
	valueToAngle,
} from './utils'
import { useCircularDrag } from './useCircularDrag'

const VALUE_GRADIENT_START_COLOR = '#0072A4'
const VALUE_GRADIENT_END_COLOR = '#03b2dc'

type Props = {
	value: number
	min: number
	max: number
	maxSelectable: number
	radius: number
	disabled: boolean
	thumbRadius: number
	trackThickness: number
	onChange: (value: number) => {}
}

export function CircularInput({
	value = 0,
	min = 0,
	max = 1,
	maxSelectable = 1,
	radius = 120,
	disabled = false,
	thumbRadius = 15,
	trackThickness = 20,
	onChange = (value: number) => value,
	...props
}: Props) {
	const svgNode: RefObject<SVGSVGElement> = useRef(null)
	const size = radius * 2
	const center = { x: radius, y: radius }
	const innerCircumference = DEG_360_IN_RAD * radius

	const valueScale = scaleLinear()
		.domain([min, max])
		.range([0, 1])
		.clamp(true)

	const clampedValue = clamp(min, maxSelectable, value)
	const scaledValue = valueScale(clampedValue)
	const minValue = valueScale(min)
	const maxValue = valueScale(maxSelectable)

	const getContainerPosition = useCallback(
		() => {
			if (!svgNode.current) return { x: 0, y: 0 }
			const { left: x, top: y } = svgNode.current.getBoundingClientRect()
			return { x, y }
		},
		[svgNode.current]
	)

	const { dragValue, isDragging, ...dragEventHandlers } = useCircularDrag({
		value: scaledValue,
		radius: radius,
		center: center,
		minValue: minValue,
		maxValue: maxValue,
		getContainerPosition: getContainerPosition,
		onDragEnd: value => onChange(valueScale.invert(value)),
	})

	const pointValue =
		isDragging && typeof dragValue === 'number' ? dragValue : scaledValue
	const valueAngle = valueToAngle(pointValue)
	const valuePoint = polarToCartesian({
		center,
		angle: valueAngle,
		radius,
	})

	const gradientRadius = clamp(10, 50, pointValue * 1.5 * 100)
	const gradientAngle = (-pointValue - 0.25) * DEG_360_IN_RAD + ANGLE_OFFSET
	const gradientPoint = polarToCartesian({
		center,
		angle: gradientAngle,
		radius,
	})

	return (
		<svg
			ref={svgNode}
			viewBox={`0 0 ${size} ${size}`}
			width={size}
			height={size}
			style={{ overflow: 'visible' }}
			{...props}
		>
			<radialGradient
				id="gradient"
				cx={gradientPoint.x}
				cy={gradientPoint.y}
				r={gradientRadius + '%'}
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor={VALUE_GRADIENT_END_COLOR} />
				<stop offset="100%" stopColor={VALUE_GRADIENT_START_COLOR} />
			</radialGradient>

			{/* value track */}
			<circle
				cx={center.x}
				cy={center.y}
				r={radius}
				fill="none"
				stroke="url(#gradient)"
				strokeWidth={trackThickness}
				strokeLinecap="round"
				strokeDasharray={innerCircumference}
				strokeDashoffset={innerCircumference * (1 - pointValue)}
				transform={`rotate(-90 ${center.x} ${center.y})`}
			/>

			{/*	value track mask - this helps create the conic gradient effect */}
			{pointValue > 0.5 && (
				<circle
					cx={center.x}
					cy={center.y}
					r={radius}
					fill="none"
					stroke={VALUE_GRADIENT_START_COLOR}
					strokeWidth={trackThickness}
					strokeLinecap="round"
					strokeDasharray={innerCircumference}
					strokeDashoffset={innerCircumference * (1 - pointValue * 0.25)}
					transform={`rotate(-90 ${center.x} ${center.y})`}
				/>
			)}

			{/* value track event catcher (invisible and wider than track) */}
			<circle
				cx={center.x}
				cy={center.y}
				r={radius}
				fill="none"
				stroke="red"
				strokeWidth={trackThickness * 4}
				strokeOpacity={0}
				onClick={e => {
					const nearestValue = calculateNearestValueToPoint({
						center,
						container: getContainerPosition(),
						point: absMousePos(e),
						radius,
						value: scaledValue,
					})
					const newValue = clamp(minValue, maxValue, nearestValue)
					onChange(valueScale.invert(newValue))
				}}
			/>

			{/* value thumb */}
			<circle
				cx={valuePoint.x}
				cy={valuePoint.y}
				r={thumbRadius}
				fill="white"
				{...dragEventHandlers}
			/>
		</svg>
	)
}
