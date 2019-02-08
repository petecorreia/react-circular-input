/* eslint @typescript-eslint/no-var-requires: 0 */
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withTM = require('next-plugin-transpile-modules')

module.exports = withFonts(
	withCSS(
		withTypescript(
			withTM({
				target: 'serverless',
				transpileModules: ['react-circular-input'],
			})
		)
	)
)
