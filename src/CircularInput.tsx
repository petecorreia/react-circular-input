import React, {
	useRef,
	RefObject,
	createContext,
	useMemo,
	useContext,
	Context,
	HTMLProps,
} from 'react'
import { Coordinates } from './utils'

type Props = {
	value?: number
	radius?: number
	onChange?: (value: number) => any
}

type CircularInputContextValue = Props & {
	value: number
	radius: number
	onChange: (value: number) => any
	center: Coordinates
	containerRef: RefObject<SVGSVGElement>
}

const CircularInputContext: Context<
	CircularInputContextValue | {}
> = createContext({})

export function CircularInput({
	value = 0.25,
	radius = 100,
	onChange = () => {},
	...props
}: HTMLProps<SVGSVGElement> & Props) {
	const containerRef: RefObject<SVGSVGElement> = useRef(null)
	const size = radius * 2
	const center = { x: radius, y: radius }
	const context = useMemo(
		(): CircularInputContextValue => ({
			value,
			radius,
			center,
			containerRef,
			onChange,
		}),
		[value, radius, center, containerRef, onChange]
	)

	return (
		<CircularInputContext.Provider value={context}>
			<svg
				ref={containerRef}
				viewBox={`0 0 ${size} ${size}`}
				width={size}
				height={size}
				{...props}
				style={{ overflow: 'visible', touchAction: 'manipulation' }}
			>
				{props.children}
			</svg>
		</CircularInputContext.Provider>
	)
}

export function useCircularInputContext(): CircularInputContextValue {
	const context = useContext(CircularInputContext)
	if (!context) {
		throw new Error(
			`CircularInput components cannot be rendered outside the CircularInput component`
		)
	}
	return context as CircularInputContextValue
}
