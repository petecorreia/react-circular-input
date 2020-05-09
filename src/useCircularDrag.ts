import { useEffect, RefObject, useState, useCallback } from 'react'
import { useCircularInputContext } from './'

export function useCircularDrag(ref: RefObject<SVGElement | null>) {
	const {
		onChange,
		onChangeEnd,
		getValueFromPointerEvent,
	} = useCircularInputContext()
	const [isDragging, setDragging] = useState(false)

	const handleStart: EventListener = useCallback(
		(e) => {
			if (!onChange) return
			stopEvent(e)
			setDragging(true)
			const nearestValue = getValueFromPointerEvent(e)
			onChange(nearestValue)
		},
		[onChange, setDragging, getValueFromPointerEvent]
	)

	const handleMove: EventListener = useCallback(
		(e) => {
			stopEvent(e)
			const nearestValue = getValueFromPointerEvent(e)
			onChange(nearestValue)
		},
		[onChange, getValueFromPointerEvent]
	)

	const handleEnd: EventListener = useCallback(
		(e) => {
			if (!onChangeEnd) return
			stopEvent(e)
			setDragging(false)
			const nearestValue = getValueFromPointerEvent(e)
			onChangeEnd(nearestValue)
		},
		[onChangeEnd, getValueFromPointerEvent]
	)

	// we can't just use React for this due to needing { passive: false } to prevent touch devices scrolling
	useEffect(() => {
		const node = ref.current
		if (!node) return
		addStartListeners(node, handleStart)
		return () => {
			if (!node) return
			removeStartListeners(node, handleStart)
		}
	}, [ref, handleStart])

	useEffect(() => {
		if (!isDragging) return
		addListeners(handleMove, handleEnd)
		return () => {
			removeListeners(handleMove, handleEnd)
		}
	}, [isDragging, handleMove, handleEnd])

	return { isDragging }
}

function addStartListeners(
	element: SVGElement | HTMLElement,
	onStart: EventListener
) {
	element.addEventListener('mousedown', onStart, { passive: false })
	element.addEventListener('touchstart', onStart, { passive: false })
}

function removeStartListeners(
	element: SVGElement | HTMLElement,
	onStart: EventListener
) {
	element.removeEventListener('mousedown', onStart)
	element.removeEventListener('touchstart', onStart)
}

function addListeners(onMove: EventListener, onEnd: EventListener) {
	document.addEventListener('mousemove', onMove, { passive: false })
	document.addEventListener('touchmove', onMove, { passive: false })
	document.addEventListener('mouseup', onEnd, { passive: false })
	document.addEventListener('touchend', onEnd, { passive: false })
}

function removeListeners(onMove: EventListener, onEnd: EventListener) {
	document.removeEventListener('mousemove', onMove)
	document.removeEventListener('touchmove', onMove)
	document.removeEventListener('mouseup', onEnd)
	document.removeEventListener('touchend', onEnd)
}

const stopEvent: EventListener = (e) => {
	e.stopPropagation()
	if (e.cancelable) {
		e.preventDefault()
	}
}
