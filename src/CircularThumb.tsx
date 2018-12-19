import React, { SVGProps } from 'react'
import { useCircularThumbDrag } from '.'

const defaultProps = {
	r: 20,
	fill: '#0045e5',
}

export const CircularThumb = (props: SVGProps<SVGCircleElement>) => {
	const dragProps = useCircularThumbDrag()
	return <circle {...props} {...dragProps} />
}

CircularThumb.defaultProps = defaultProps
