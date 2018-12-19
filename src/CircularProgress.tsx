import React, { SVGProps } from 'react'
import { useCircularInputContext, CircularTrack } from '.'
import { DEG_360_IN_RAD } from './utils'

const defaultProps = {
	stroke: '#3D99FF',
}

export const CircularProgress = (props: SVGProps<SVGCircleElement>) => {
	const { value, radius, center } = useCircularInputContext()

	const innerCircumference = DEG_360_IN_RAD * radius

	return (
		<CircularTrack
			{...props}
			strokeDasharray={innerCircumference}
			strokeDashoffset={innerCircumference * (1 - value)}
			transform={`rotate(-90 ${center.x} ${center.y})`}
		/>
	)
}

CircularProgress.defaultProps = defaultProps
