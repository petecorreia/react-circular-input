import React, {
	useRef,
	RefObject,
	useMemo,
	HTMLProps,
	useCallback,
} from 'react'
import {
	Coordinates,
	polarToCartesian,
	valueToAngle,
	calculateNearestValueToPoint,
	getElementPosition,
	absPos,
	Weaken,
} from './utils'
import {
	CircularInputContext,
	CircularInputProvider,
} from './CircularInputContext'
import { CircularTrack } from './CircularTrack'
import { CircularProgress } from './CircularProgress'
import { CircularThumb } from './CircularThumb'

type DefaultHTMLProps = HTMLProps<SVGSVGElement>

type Props = Weaken<DefaultHTMLProps, 'onChange'> & {
	value: number
	radius?: number
	onChange?: (value: number) => any
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
	children,
	...props
}: Props) {
	const containerRef: RefObject<SVGSVGElement> = useRef(null)
	const size = radius * 2
	const center = { x: radius, y: radius }

	const getPointFromValue = useCallback(
		v =>
			polarToCartesian({
				center,
				angle: valueToAngle(v || value),
				radius,
			}),
		[value, center, radius]
	)

	const getValueFromPointerEvent = useCallback(
		e =>
			calculateNearestValueToPoint({
				point: absPos(e),
				container: getElementPosition(containerRef.current) as Coordinates,
				value,
				center,
				radius,
			}),
		[containerRef.current, value, center, radius]
	)

	const context = useMemo(
		(): CircularInputContext => ({
			value,
			radius,
			center,
			onChange,
			getPointFromValue,
			getValueFromPointerEvent,
		}),
		[value, radius, center, onChange]
	)

	const handleClick = useCallback(
		e => {
			if (!onChange) return
			const nearestValue = getValueFromPointerEvent(e)
			onChange(nearestValue)
		},
		[onChange, getValueFromPointerEvent]
	)

	const style = {
		overflow: 'visible',
		...(props.style || {}),
		touchAction: 'manipulation',
		WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	}

	return (
		<CircularInputProvider value={context}>
			<svg
				{...props}
				ref={containerRef}
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				style={style}
				onClick={handleClick}
			>
				{children || (
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
