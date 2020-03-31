import React, { useRef } from 'react'
import { useCircularInputContext, useCircularDrag } from './'

export const CircularThumb = (props: JSX.IntrinsicElements['circle']) => {
	const { getPointFromValue, isFocused } = useCircularInputContext()
	const ref = useRef<SVGCircleElement | null>(null)
	const { isDragging } = useCircularDrag(ref)

	const point = getPointFromValue()

	if (!point) return null

	const { x, y } = point

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
