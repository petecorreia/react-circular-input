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
import { Thumb } from './Thumb'
import { Track } from './Track'

type Props = {
	value: number
	radius: number
	onChange: (value: number) => any
}

type Coordinates = {
	x: number
	y: number
}

type CircularInputContextValue = {
	value: number
	radius: number
	center: Coordinates
	container: Coordinates
	setValue: (...args: any) => number
}

const CircularInputContext: Context<
	CircularInputContextValue | {}
> = createContext({})

export function useCircularInputContext(): CircularInputContextValue {
	const context = useContext(CircularInputContext)
	if (!context) {
		throw new Error(
			`CircularInput components cannot be rendered outside the CircularInput component`
		)
	}
	return context as CircularInputContextValue
}

export function CircularInput({
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
		(): CircularInputContextValue => ({
			value,
			radius,
			center,
			container,
			setValue,
		}),
		[value, radius, center, container, setValue]
	)

	return (
		<CircularInputContext.Provider value={context}>
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
		</CircularInputContext.Provider>
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
