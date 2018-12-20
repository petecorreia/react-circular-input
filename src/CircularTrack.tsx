import React, { SVGProps, useRef } from 'react'
import { useCircularInputContext } from './'
import { useCircularDrag } from './useCircularDrag'

export const defaultProps = {
	stroke: '#CEE0F5',
	fill: 'none',
	strokeWidth: 20,
	strokeLinecap: 'round',
}

export const CircularTrack = ({
	strokeWidth,
	...props
}: SVGProps<SVGCircleElement>) => {
	const { radius, center } = useCircularInputContext()
	const ref = useRef<SVGCircleElement | null>(null)
	useCircularDrag(ref)
	return (
		<circle
			strokeWidth={strokeWidth}
			{...props}
			ref={ref}
			cx={center.x}
			cy={center.y}
			r={radius}
		/>
	)
}

CircularTrack.defaultProps = defaultProps
