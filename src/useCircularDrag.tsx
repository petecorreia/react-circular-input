import { useState, MouseEvent, TouchEvent } from 'react'
import {
	Coordinates,
	stopEvent,
	calculateNearestValueToPoint,
	clamp,
	absMousePos,
	absTouchPos,
} from './utils'

type useCircularDragArgs = {
	value: number
	radius: number
	center: Coordinates
	minValue: number
	maxValue: number
	getContainerPosition: () => Coordinates
	onDragEnd: (value: number) => {}
}

export function useCircularDrag({
	value,
	radius,
	center,
	minValue,
	maxValue,
	getContainerPosition,
	onDragEnd,
}: useCircularDragArgs) {
	const [dragValue, setDragValue] = useState<number | null>(null)
	const [isDragging, setDragging] = useState(false)

	function onMouseDown(e: Event | MouseEvent) {
		stopEvent(e)
		setDragging(true)
		addMouseEventListeners()
	}

	function onTouchStart(e: Event | TouchEvent) {
		stopEvent(e)
		setDragging(true)
		addTouchEventListeners()
	}

	function handleMouseMove(e: Event | MouseEvent) {
		stopEvent(e)
		const pointerPos = absMousePos(e as MouseEvent)
		setEventValue(pointerPos)
	}

	function handleTouchMove(e: Event | TouchEvent) {
		stopEvent(e)
		const pointerPos = absTouchPos(e as TouchEvent)
		setEventValue(pointerPos)
	}

	function handleMouseUp(e: Event | MouseEvent) {
		stopEvent(e)
		onEventEnd()
		removeMouseEventListeners()
	}

	function handleTouchEnd(e: Event | TouchEvent) {
		stopEvent(e)
		onEventEnd()
		removeTouchEventListeners()
	}

	function addMouseEventListeners() {
		document.addEventListener('mousemove', handleMouseMove, { passive: false })
		document.addEventListener('mouseup', handleMouseUp, { passive: false })
	}

	function addTouchEventListeners() {
		document.addEventListener('touchmove', handleTouchMove, { passive: false })
		document.addEventListener('touchend', handleTouchEnd, { passive: false })
	}

	function removeMouseEventListeners() {
		document.removeEventListener('mousemove', handleMouseMove)
		document.removeEventListener('mouseup', handleMouseUp)
	}

	function removeTouchEventListeners() {
		document.removeEventListener('touchmove', handleTouchMove)
		document.removeEventListener('touchend', handleTouchEnd)
	}

	function onEventEnd() {
		onDragEnd(typeof dragValue === 'number' ? dragValue : value)
		setDragging(false)
		setDragValue(null)
	}

	function setEventValue(pointerPos: Coordinates) {
		const nearestValue = calculateNearestValueToPoint({
			center,
			container: getContainerPosition(),
			point: pointerPos,
			radius,
			value,
		})
		const newValue = clamp(minValue, maxValue, nearestValue)
		setDragValue(newValue)
	}

	return {
		dragValue,
		isDragging,
		onMouseDown,
		onTouchStart,
	}
}
