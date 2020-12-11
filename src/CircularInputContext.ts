import {
	createContext,
	useContext,
	Context as ReactContext,
	SetStateAction,
	Dispatch,
} from 'react'
import { Coordinates } from './utils'

export type CircularInputContext = {
	value: number
	radius: number
	center: Coordinates
	isFocused: boolean
	setFocused: Dispatch<SetStateAction<boolean>>
	onChange: (value: number) => void
	onChangeEnd: (value: number) => void
	getPointFromValue: (v?: number) => Coordinates | null
	getValueFromPointerEvent: (...args: Parameters<EventListener>) => number
}

const Context: ReactContext<CircularInputContext> = createContext(
	{} as CircularInputContext
)

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
