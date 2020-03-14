import React from 'react'
import { useCircularInputContext, CircularTrack } from '.'
import { Props as CircularTrackProps } from './CircularTrack'
import { DEG_360_IN_RAD } from './utils'

type Props = JSX.IntrinsicElements['circle'] &
	CircularTrackProps & {
		// disallow some props
		strokeDasharray?: undefined
		strokeDashoffset?: undefined
		transform?: undefined
	}

const defaultProps = {
	stroke: '#3D99FF'
}

export const CircularProgress = (props: Props) => {
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
