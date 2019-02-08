module.exports = api => {
	api.cache(true)

	const presets = ['next/babel', '@zeit/next-typescript/babel']

	const plugins = [['styled-components', { ssr: true }]]

	return {
		presets,
		plugins,
	}
}
