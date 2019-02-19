import React, { SVGProps, useRef } from 'react'
import { useCircularInputContext, useCircularDrag } from './'

export const CircularThumb = (props: SVGProps<SVGCircleElement>) => {
	const { getPointFromValue, isFocused, setFocused } = useCircularInputContext()
	const point = getPointFromValue()
	if (!point) return null
	const { x, y } = point
	const ref = useRef<SVGCircleElement | null>(null)
	const { isDragging } = useCircularDrag(ref)
	return (
		<circle
			r={isFocused || isDragging ? 25 : 20}
			fill="#0045e5"
			{...props}
			ref={ref}
			cx={x}
			cy={y}
		/>
	)
}
