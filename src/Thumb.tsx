import React, {
	MouseEvent,
	TouchEvent,
	useState,
	useEffect,
	SVGProps,
} from 'react'
import {
	calculateNearestValueToPoint,
	valueToAngle,
	polarToCartesian,
	absPos,
	getElementPosition,
	Coordinates,
} from './utils'
import { useInputContext } from './'

const defaultProps = {
	r: 20,
	fill: '#0045e5',
}

export const Thumb = (props: SVGProps<SVGCircleElement>) => {
	const { value, radius, center, containerRef, onChange } = useInputContext()

	const [isDragging, setDragging] = useState(false)

	const handleStart = (e: MouseEvent | TouchEvent) => {
		if (!onChange) return
		e.stopPropagation()
		e.preventDefault()
		setDragging(true)
	}

	const handleMove = (e: MouseEvent | TouchEvent) => {
		e.stopPropagation()
		e.preventDefault()
		const point = absPos(e)
		const nearestValue = calculateNearestValueToPoint({
			value,
			point,
			container: getElementPosition(containerRef.current) as Coordinates,
			center,
			radius,
		})
		onChange(nearestValue)
	}

	const handleEnd = (e: MouseEvent | TouchEvent) => {
		e.stopPropagation()
		e.preventDefault()
		setDragging(false)
	}

	const { x, y } = polarToCartesian({
		center,
		angle: valueToAngle(value),
		radius,
	})

	useEffect(
		() => {
			if (!isDragging) return
			addEventListeners(handleMove, handleEnd)
			return () => {
				removeEventListeners(handleMove, handleEnd)
			}
		},
		[isDragging]
	)

	return (
		<circle
			{...props}
			cx={x}
			cy={y}
			onMouseDown={handleStart}
			onTouchStart={handleStart}
		/>
	)
}

Thumb.defaultProps = defaultProps

function addEventListeners(onMove: (e: any) => any, onEnd: (e: any) => any) {
	document.addEventListener('mousemove', onMove, { passive: false })
	document.addEventListener('touchmove', onMove, { passive: false })
	document.addEventListener('mouseup', onEnd, { passive: false, once: true })
	document.addEventListener('touchend', onEnd, { passive: false, once: true })
}

function removeEventListeners(onMove: (e: any) => any, onEnd: (e: any) => any) {
	document.removeEventListener('mousemove', onMove)
	document.removeEventListener('touchmove', onMove)
	document.removeEventListener('mouseup', onEnd)
	document.removeEventListener('touchend', onEnd)
}
