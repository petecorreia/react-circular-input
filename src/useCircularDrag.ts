import { MouseEvent, TouchEvent, useEffect, RefObject, useState, useCallback } from 'react'
import { useCircularInputContext } from './'

export function useCircularDrag(ref: RefObject<SVGElement | null>) {
	const { onChange, getValueFromPointerEvent } = useCircularInputContext()
	const [isDragging, setDragging] = useState(false)

	const handleStart = useCallback((e: MouseEvent | TouchEvent) => {
		if (!onChange) return
		stopEvent(e)
		setDragging(true)
		const nearestValue = getValueFromPointerEvent(e)
		onChange(nearestValue)
	}, [onChange])

	const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
		stopEvent(e)
		const nearestValue = getValueFromPointerEvent(e)
		onChange(nearestValue)
	}, [onChange])

	const handleEnd = (e: MouseEvent | TouchEvent) => {
		stopEvent(e)
		setDragging(false)
	}

	// we can't just use React for this due to needing { passive: false } to prevent touch devices scrolling
	useEffect(() => {
		if (!ref.current) return
		addStartListeners(ref.current, handleStart)
		return () => {
			if (!ref.current) return
			removeStartListeners(ref.current, handleStart)
		}
	}, [ref, handleStart])

	useEffect(() => {
		if (!isDragging) return
		addListeners(handleMove, handleEnd)
		return () => {
			removeListeners(handleMove, handleEnd)
		}
	}, [isDragging, handleMove])

	return { isDragging }
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
