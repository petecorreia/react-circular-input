import React, { SVGProps } from 'react'
import { useInputContext, Track } from './'
import { DEG_360_IN_RAD } from './utils'

const defaultProps = {
	stroke: '#3D99FF',
}

export const Progress = (props: SVGProps<SVGCircleElement>) => {
	const { value, radius, center } = useInputContext()

	const innerCircumference = DEG_360_IN_RAD * radius

	return (
		<Track
			{...props}
			strokeDasharray={innerCircumference}
			strokeDashoffset={innerCircumference * (1 - value)}
			transform={`rotate(-90 ${center.x} ${center.y})`}
		/>
	)
}

Progress.defaultProps = defaultProps
