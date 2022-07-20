import React, {
	useRef,
	RefObject,
	useMemo,
	useCallback,
	useState,
	KeyboardEvent,
} from 'react'
import {
	Coordinates,
	polarToCartesian,
	valueToAngle,
	calculateNearestValueToPoint,
	getElementPosition,
	absPos,
} from './utils'
import {
	CircularInputContext,
	CircularInputProvider,
} from './CircularInputContext'
import { CircularTrack } from './CircularTrack'
import { CircularProgress } from './CircularProgress'
import { CircularThumb } from './CircularThumb'

type DefaultHTMLProps = JSX.IntrinsicElements['svg']

type Props = Omit<DefaultHTMLProps, 'onChange'> & {
	value: number
	radius?: number
	onChange?: (value: number) => void
	onChangeEnd?: (value: number) => void
	// disallow some props
	ref?: undefined
	width?: undefined
	height?: undefined
	viewBox?: undefined
	onClick?: undefined
}

export function CircularInput({
	value = 0.25,
	radius = 100,
	onChange = () => {},
	onChangeEnd = () => {},
	children,
	...props
}: Props) {
	const containerRef: RefObject<SVGSVGElement> = useRef(null)
	const size = radius * 2
	const center = useMemo(() => ({ x: radius, y: radius }), [radius])

	// Accessibility
	const [isFocused, setFocused] = useState(false)

	const isReadonly = !onChange

	const handleFocus = useCallback(() => {
		setFocused(true)
	}, [])

	const handleBlur = useCallback(() => {
		setFocused(false)
	}, [])

	const handleKeyDown = useCallback(
		(e: KeyboardEvent<SVGSVGElement>) => {
			if (!isFocused) return
			const { keyCode } = e

			// arrow up, arrow right, page up, space
			const isIncrement =
				keyCode === 38 ||
				keyCode === 39 ||
				keyCode === 33 ||
				keyCode === 32
			// arrow down, arrow left, page down
			const isDecrement =
				keyCode === 40 || keyCode === 37 || keyCode === 34

			if (isIncrement) {
				onChange(Math.min(1, value + 0.1))
			}

			if (isDecrement) {
				onChange(Math.max(0, value - 0.1))
			}

			if (isIncrement || isDecrement) {
				e.preventDefault()
			}
		},
		[isFocused, onChange, value]
	)

	const accessibilityProps = {
		tabIndex: 0,
		role: 'slider',
		onFocus: handleFocus,
		onBlur: handleBlur,
		onKeyDown: handleKeyDown,
	}

	// Geometry utilities

	const getPointFromValue = useCallback(
		(v) =>
			polarToCartesian({
				center,
				angle: valueToAngle(v || value),
				radius,
			}),
		[value, center, radius]
	)

	const getValueFromPointerEvent = useCallback(
		(e) =>
			calculateNearestValueToPoint({
				point: absPos(e),
				container: getElementPosition(
					containerRef.current
				) as Coordinates,
				value,
				center,
				radius,
			}),
		[value, center, radius]
	)

	// Context

	const context = useMemo(
		(): CircularInputContext => ({
			value,
			radius,
			center,
			isFocused,
			setFocused,
			onChange,
			onChangeEnd,
			getPointFromValue,
			getValueFromPointerEvent,
		}),
		[
			value,
			radius,
			center,
			onChange,
			onChangeEnd,
			isFocused,
			setFocused,
			getPointFromValue,
			getValueFromPointerEvent,
		]
	)

	const handleClick = useCallback(
		(e) => {
			if (isReadonly) return
			const nearestValue = getValueFromPointerEvent(e)
			onChange(nearestValue)
			onChangeEnd(nearestValue)
		},
		[onChange, onChangeEnd, getValueFromPointerEvent, isReadonly]
	)

	const style = {
		overflow: 'visible',
		outline: 'none',
		...(props.style || {}),
		touchAction: 'manipulation',
		WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	}

	return (
		<CircularInputProvider value={context}>
			<svg
				{...props}
				ref={containerRef}
				viewBox={`0 0 ${size} ${size}`}
				style={style}
				onClick={handleClick}
				{...(!isReadonly ? accessibilityProps : {})}
			>
				{children ? (
					typeof children === 'function' ? (
						children(context)
					) : (
						children
					)
				) : (
					<>
						<CircularTrack />
						<CircularProgress />
						<CircularThumb />
					</>
				)}
			</svg>
		</CircularInputProvider>
	)
}
