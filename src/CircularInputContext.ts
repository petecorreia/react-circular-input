import {
	createContext,
	useContext,
	Context as ReactContext,
	MouseEvent,
	TouchEvent,
} from 'react'
import { Coordinates } from './utils'

export type CircularInputContext = {
	value: number
	radius: number
	center: Coordinates
	onChange: (value: number) => any
	getPointFromValue: (v?: number) => Coordinates | null
	getValueFromPointerEvent: (e: MouseEvent | TouchEvent) => number
}

const Context: ReactContext<CircularInputContext | {}> = createContext({})

export const CircularInputProvider = Context.Provider

export function useCircularInputContext(): CircularInputContext {
	const context = useContext(Context)
	if (!context) {
		throw new Error(
			`CircularInput components cannot be rendered outside the CircularInput component`
		)
	}
	return context as CircularInputContext
}
