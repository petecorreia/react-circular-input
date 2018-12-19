import React, {
	useRef,
	RefObject,
	createContext,
	useMemo,
	useContext,
	Context,
	useLayoutEffect,
	useState,
	HTMLProps,
} from 'react'
import { getElementPosition } from './utils'

type Props = {
	value: number
	radius: number
	onChange: (value: number) => any
}

type Coordinates = {
	x: number
	y: number
}

type InputContextValue = {
	value: number
	radius: number
	center: Coordinates
	container: Coordinates
	setValue: (...args: any) => number
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
	const setValue = onChange
	const container = useContainerPosition(containerRef)
	const context = useMemo(
		(): InputContextValue => ({
			value,
			radius,
			center,
			container,
			setValue,
		}),
		[value, radius, center, container, setValue]
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

function useContainerPosition(containerRef: RefObject<SVGSVGElement>) {
	const [initialContainer, setInitialContainer] = useState({ x: 0, y: 0 })
	const container = getElementPosition(containerRef.current) || initialContainer
	useLayoutEffect(() => {
		const pos = getElementPosition(containerRef.current)
		setInitialContainer(pos || { x: 0, y: 0 })
	}, [])
	return container
}
