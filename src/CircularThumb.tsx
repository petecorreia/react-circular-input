import React, { SVGProps, useRef } from 'react'
import { useCircularInputContext, useCircularDrag } from './'

export const CircularThumb = (props: SVGProps<SVGCircleElement>) => {
	const { getPointFromValue, isFocused, setFocused } = useCircularInputContext()

	const point = getPointFromValue()
	if (!point) return null
	const { x, y } = point

	const ref = useRef<SVGCircleElement | null>(null)
	const { isDragging } = useCircularDrag(ref)

	const style = {
		transition: 'r 150ms cubic-bezier(0.215, 0.61, 0.355, 1)',
		...(props.style || {}),
	}
	return (
		<circle
			r={isFocused || isDragging ? 23 : 20}
			fill="#0045e5"
			{...props}
			style={style}
			ref={ref}
			cx={x}
			cy={y}
		/>
	)
}
