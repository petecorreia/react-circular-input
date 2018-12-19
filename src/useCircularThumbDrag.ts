import { MouseEvent, TouchEvent, useState, useEffect } from 'react'
import {
	calculateNearestValueToPoint,
	valueToAngle,
	polarToCartesian,
	absPos,
	getElementPosition,
	Coordinates,
} from './utils'
import { useCircularInputContext } from './'

export function useCircularThumbDrag() {
	const {
		value,
		radius,
		center,
		containerRef,
		onChange,
	} = useCircularInputContext()

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

	return {
		cx: x,
		cy: y,
		onMouseDown: handleStart,
		onTouchStart: handleStart,
	}
}

function addEventListeners(onMove: (e: any) => any, onEnd: (e: any) => any) {
	document.addEventListener('mousemove', onMove, { passive: false })
	document.addEventListener('touchmove', onMove, { passive: false })
	document.addEventListener('mouseup', onEnd, { passive: false })
	document.addEventListener('touchend', onEnd, { passive: false })
}

function removeEventListeners(onMove: (e: any) => any, onEnd: (e: any) => any) {
	document.removeEventListener('mousemove', onMove)
	document.removeEventListener('touchmove', onMove)
	document.removeEventListener('mouseup', onEnd)
	document.removeEventListener('touchend', onEnd)
}
