import React, { SVGProps } from 'react'
import { useInputContext } from './'
import { DEG_360_IN_RAD, calculateNearestValueToPoint, absPos } from './utils'

const defaultProps = {
	stroke: 'blue',
	fill: 'none',
	strokeWidth: 20,
}

export const Track = ({
	strokeWidth,
	...props
}: SVGProps<SVGCircleElement>) => {
	const { value, radius, center, container, setValue } = useInputContext()

	const innerCircumference = DEG_360_IN_RAD * radius

	return (
		<>
			<circle
				strokeWidth={strokeWidth}
				{...props}
				cx={center.x}
				cy={center.y}
				r={radius}
				strokeLinecap="round"
				strokeDasharray={innerCircumference}
				strokeDashoffset={innerCircumference * (1 - value)}
				transform={`rotate(-90 ${center.x} ${center.y})`}
			/>

			{/* event catcher (invisible and slightly wider than track) */}
			<circle
				{...props}
				cx={center.x}
				cy={center.y}
				r={radius}
				strokeWidth={parseFloat(strokeWidth as string) * 10}
				strokeOpacity={0}
				onClick={e => {
					const nearestValue = calculateNearestValueToPoint({
						center,
						container,
						point: absPos(e),
						radius,
						value,
					})
					setValue(nearestValue)
				}}
			/>
		</>
	)
}

Track.defaultProps = defaultProps
