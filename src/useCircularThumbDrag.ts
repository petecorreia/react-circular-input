import { MouseEvent, TouchEvent, useEffect, RefObject } from 'react'
import {
	calculateNearestValueToPoint,
	valueToAngle,
	polarToCartesian,
	absPos,
	getElementPosition,
	Coordinates,
} from './utils'
import { useCircularInputContext } from './'

export function useCircularThumbDrag(thumbRef: RefObject<SVGElement | null>) {
	const {
		value,
		radius,
		center,
		containerRef,
		onChange,
		isDragging,
		setDragging,
	} = useCircularInputContext()

	const handleStart = (e: MouseEvent | TouchEvent) => {
		if (!onChange) return
		stopEvent(e)
		setDragging(true)
	}

	const handleMove = (e: MouseEvent | TouchEvent) => {
		stopEvent(e)
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
		stopEvent(e)
		setDragging(false)
	}

	const { x, y } = polarToCartesian({
		center,
		angle: valueToAngle(value),
		radius,
	})

	// we can't just use React for this due to needing { passive: false } to prevent touch devices scrolling
	useEffect(
		() => {
			if (!thumbRef.current) return
			addStartListeners(thumbRef.current, handleStart)
			return () => {
				if (!thumbRef.current) return
				removeStartListeners(thumbRef.current, handleStart)
			}
		},
		[thumbRef]
	)

	useEffect(
		() => {
			if (!isDragging) return
			addListeners(handleMove, handleEnd)
			return () => {
				removeListeners(handleMove, handleEnd)
			}
		},
		[isDragging]
	)

	return {
		x,
		y,
	}
}

function addStartListeners(
	element: SVGElement | HTMLElement,
	onStart: (e: any) => any
) {
	element.addEventListener('mousedown', onStart, { passive: false })
	element.addEventListener('touchstart', onStart, { passive: false })
}

function removeStartListeners(
	element: SVGElement | HTMLElement,
	onStart: (e: any) => any
) {
	element.removeEventListener('mousedown', onStart)
	element.removeEventListener('touchstart', onStart)
}

function addListeners(onMove: (e: any) => any, onEnd: (e: any) => any) {
	document.addEventListener('mousemove', onMove, { passive: false })
	document.addEventListener('touchmove', onMove, { passive: false })
	document.addEventListener('mouseup', onEnd, { passive: false })
	document.addEventListener('touchend', onEnd, { passive: false })
}

function removeListeners(onMove: (e: any) => any, onEnd: (e: any) => any) {
	document.removeEventListener('mousemove', onMove)
	document.removeEventListener('touchmove', onMove)
	document.removeEventListener('mouseup', onEnd)
	document.removeEventListener('touchend', onEnd)
}

function stopEvent(e: MouseEvent | TouchEvent) {
	e.stopPropagation()
	if (e.cancelable) {
		e.preventDefault()
	}
}
