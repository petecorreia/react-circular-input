import React, { SVGProps, useRef } from 'react'
import { useCircularThumbDrag } from '.'

const defaultProps = {
	r: 20,
	fill: '#0045e5',
}

export const CircularThumb = (props: SVGProps<SVGCircleElement>) => {
	const thumbRef = useRef<SVGCircleElement | null>(null)
	const { x, y } = useCircularThumbDrag(thumbRef)
	return (
		<circle
			style={{ touchAction: 'manipulation' }}
			{...props}
			ref={thumbRef}
			cx={x}
			cy={y}
		/>
	)
}

CircularThumb.defaultProps = defaultProps
