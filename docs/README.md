# Documentation

This project was initialised with [create-next-docs](https://create-next-docs.now.sh).

## Getting Started

```sh
npm install
```

### Run in development mode

```sh
npm run dev
```

### Build site

```sh
npm run build
```

### Export static site

```sh
npm run build-static
```

### Type checking

```sh
npm run typecheck
```

## Adding Pages

Each file in the `pages/` directory will create a route for your application.

```jsx
import React from 'react'

const NewPage = () => <p>Some content</p>

export default NewPage
```

## Editing Sidebar

To edit the navigation in the sidebar, change the `routes` array in [`docs.config.js`](./docs.config.js).

## Configuration

Edit [`docs.config.js`](./docs.config.js) to customise your documentation site:

```js
{
	title: '', // project name
	description: '',  // project description
	author: '', // author name
	authorURL: '', // author URL
	routes: [
		{
			name: '', // route name e.g. Example Page
			path: '', // route path e.g. /example
		},
		// ...
	],
	theme: {
		// ...see rebass theming options at https://rebassjs.org/theming
	},
}
```

## Further Customisation

For more information on how Next.js works, see the [Next.js Docs](https://nextjs.org/).

---

Initialised with [create-next-docs](https://create-next-docs.now.sh).
