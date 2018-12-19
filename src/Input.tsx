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

type InputContextValue = Props & {
	value: number
	radius: number
	onChange: (value: number) => any
	center: Coordinates
	containerRef: RefObject<SVGSVGElement>
}

const InputContext: Context<InputContextValue | {}> = createContext({})

export function useInputContext(): InputContextValue {
	const context = useContext(InputContext)
	if (!context) {
		throw new Error(
			`Input components cannot be rendered outside the Input component`
		)
	}
	return context as InputContextValue
}

export function Input({
	value = 0.25,
	radius = 100,
	onChange = () => {},
	...props
}: HTMLProps<SVGSVGElement> & Props) {
	const containerRef: RefObject<SVGSVGElement> = useRef(null)
	const size = radius * 2
	const center = { x: radius, y: radius }
	const context = useMemo(
		(): InputContextValue => ({
			value,
			radius,
			center,
			containerRef,
			onChange,
		}),
		[value, radius, center, containerRef, onChange]
	)

	return (
		<InputContext.Provider value={context}>
			<svg
				ref={containerRef}
				viewBox={`0 0 ${size} ${size}`}
				width={size}
				height={size}
				{...props}
				style={{ overflow: 'visible' }}
			>
				{props.children}
			</svg>
		</InputContext.Provider>
	)
}
