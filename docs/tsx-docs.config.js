module.exports = {
	title: 'Project X',
	description: 'Built with tsx-docs',
	routes: [
		{ name: 'About', path: '/about' },
		{
			name: 'Github',
			path: 'https://github.com/petecorreia/tsx-docs',
		},
	],
	nextConfig: {
		target: 'serverless',
	},
}
