import { easings } from '@react-spring/web'

const initialFrom = {
	x: 0,
	y: -100,
	opacity: 0,
}

const defaultConfig = {
	duration: 800,
	easing: easings.easeInOutBack,
}

type DestinationType = {
	x: number
	y: number
	opacity: number
}

export const pickUpSpring = (destination: DestinationType) => ({
	from: initialFrom,
	to: destination,
	loop: true,
	immediate: true,
	config: defaultConfig,
})
