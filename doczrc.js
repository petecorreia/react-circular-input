const path = require('path')
module.exports = {
	title: '🌀 react-circular-input',
	description:
		'React components for easily composing a circular range input 🌀',
	typescript: true,
	port: 3000,
	files: './docs/**/*.{md,markdown,mdx}',
	dest: 'dist-docs',
	propsParser: false,
	menu: [
		'Getting Started',
		'Components',
		'Hooks',
		'Examples',
		{
			name: 'Github',
			href: 'https://github.com/petecorreia/react-circular-input',
		},
	],
	themeConfig: {
		showPlaygroundEditor: true,
		codemirrorTheme: 'night-owl',
		colors: {
			primary: '#006de6',
			sidebarBg: 'white',
			sidebarBorder: 'transparent',
			border: '#fff',
		},
		styles: {
			h1: {
				fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
			},
		},
	},
	htmlContext: {
		head: {
			links: [
				{
					rel: 'stylesheet',
					href: 'https://codemirror.net/theme/dracula.css',
				},
			],
			raw: `
				<style>
					.react-live {
						margin-top: 40px;
					}
					.react-live > div > div > span {
						display: none;
					}
					.react-live > div > div > div {
						width: 100%;
					}
					.CodeMirror.cm-s-night-owl {
						font-family: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
						font-weight: 350;
						font-size: 18px;
						color: rgb(213,221,234);
						background-color: rgb(1,22,39);
					  }
					  .cm-s-night-owl .CodeMirror-sizer {
						  margin-left: 15px;
					  }
					  .cm-s-night-owl .CodeMirror-gutters,
					  .cm-s-night-owl .CodeMirror-gutter-wrapper {display:none;}
					  .cm-s-night-owl .CodeMirror-selected {background-color: #1d3b53 !important;}
					  .cm-s-night-owl .CodeMirror-gutter,
					  .cm-s-night-owl .CodeMirror-gutters {
						border: none;
						background-color: #011627;
					  }
					  .cm-s-night-owl .CodeMirror-line {
						  padding: 0 20px !important;
					  }
					  .cm-s-night-owl .CodeMirror-linenumber,
					  .cm-s-night-owl .CodeMirror-linenumbers {
						color: #5f7e97 !important;
						background-color: transparent;
					  }
					  .cm-s-night-owl .CodeMirror-lines {
						color: rgb(214,222,235) !important;
						background-color: transparent;
					  }
					  .cm-s-night-owl .CodeMirror-cursor {border-left: 2px solid #7e57c2 !important;}
					  /* addon: edit/machingbrackets.js & addon: edit/matchtags.js */
					  .cm-s-night-owl .CodeMirror-matchingbracket,
					  .cm-s-night-owl .CodeMirror-matchingtag {
						color: rgb(214,222,235) !important;
						background-color: transparent;
					  }
					  .cm-s-night-owl .CodeMirror-nonmatchingbracket {
						border-bottom: 2px solid #e06c75;
						color: rgb(214,222,235) !important;
						background-color: transparent;
					  }
					  /* addon: fold/foldgutter.js */
					  .cm-s-night-owl .CodeMirror-foldmarker,
					  .cm-s-night-owl .CodeMirror-foldgutter,
					  .cm-s-night-owl .CodeMirror-foldgutter-open,
					  .cm-s-night-owl .CodeMirror-foldgutter-folded {
						border: none;
						text-shadow: none;
						color: #5c6370 !important;
						background-color: transparent;
					  }
					  /* addon: selection/active-line.js */
					  .cm-s-night-owl .CodeMirror-activeline-background {background-color: #01121f;}
					  /* basic syntax */
					  .cm-s-night-owl .cm-quote {color: #5c6370;font-style: italic;}
					  .cm-s-night-owl .cm-negative {color: #e06c75;}
					  .cm-s-night-owl .cm-positive {color: #e06c75;}
					  .cm-s-night-owl .cm-strong {color: #F78C6C;font-weight: bold;}
					  .cm-s-night-owl .cm-em {color: #c792ea;font-style: italic;}
					  .cm-s-night-owl .cm-attribute {color: rgb(169,215,101);font-style: italic;}
					  .cm-s-night-owl .cm-link {color: #ecc48d;border-bottom: solid 1px #ecc48d;}
					  .cm-s-night-owl .cm-keyword {color: rgb(204,128,255)}
					  .cm-s-night-owl .cm-def {color: #82AAFF;}
					  .cm-s-night-owl .cm-atom {color: #F78C6C;}
					  .cm-s-night-owl .cm-number {color: #F78C6C;}
					  .cm-s-night-owl .cm-property {color: #fff;}
					  .cm-s-night-owl .cm-qualifier {color: #F78C6C;}
					  .cm-s-night-owl .cm-variable {color: #82AAFF;}
					  .cm-s-night-owl .cm-variable-2 {color: #82AAFF;}
					  .cm-s-night-owl .cm-string {color: #ecc48d;}
					  .cm-s-night-owl .cm-string-2 {color: #addb67ff;}
					  .cm-s-night-owl .cm-operator {color: rgb(129,169,254);}
					  .cm-s-night-owl .cm-meta {color: #7fdbca;}
					  .cm-s-night-owl .cm-comment {color: #5c6370;font-style: italic;}
					  .cm-s-night-owl .cm-error {color: #e06c75;}
					  .cm-s-night-owl .cm-tag {color: rgb(230,132,103)}
					  .cm-s-night-owl .cm-tag.cm-bracket {color: rgb(120,208,192)}
				</style>
			`,
		},
	},
}
