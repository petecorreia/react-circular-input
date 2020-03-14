const config = {
	title: 'react-circular-input',
	description: 'React components for easily composing a circular range input',
	author: 'Pete Correia',
	authorURL: 'https://petecorreia.com',
	routes: [
		{
			name: 'Examples',
			path: '/examples',
			isExternal: false
		},
		{
			name: 'Components',
			path: '/components',
			isExternal: false
		},
		{
			name: 'Hooks',
			path: '/hooks',
			isExternal: false
		},
		{
			name: 'Github',
			path: 'https://github.com/petecorreia/react-circular-input',
			isExternal: true
		}
	],
	theme: {
		breakpoints: ['550px', '769px', '1024px'],
		fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
		space: [0, 4, 8, 16, 32, 64, 128, 256],
		colors: {
			blue: '#000',
			gray: '#666',
			lightgray: '#aaa'
		}
	}
} as const

export type Theme = typeof config['theme']

export default config
