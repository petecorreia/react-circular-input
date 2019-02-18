module.exports = {
	include: ['../src'],
	title: 'react-circular-input',
	description: 'React components for easily composing a circular range input',
	author: 'Pete Correia',
	authorURL: 'https://petecorreia.com',
	routes: [
		{
			name: 'Examples',
			path: '/examples',
		},
		{
			name: 'Components',
			path: '/components',
		},
		{
			name: 'Hooks',
			path: '/hooks',
		},
		{
			name: 'Github',
			path: 'https://github.com/petecorreia/react-circular-input',
		},
	],
	nextConfig: {
		target: 'serverless',
	},
}
