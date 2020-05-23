# react-circular-input

React components for easily composing a circular range input

[![Latest Release][github-release]][npm]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]
[![MIT License][license]](LICENSE.md)

[npm]: https://npmjs.com/package/react-circular-input
[downloads-badge]: https://flat.badgen.net/npm/dt/react-circular-input
[version-badge]: https://flat.badgen.net/npm/v/react-circular-input
[license]: https://flat.badgen.net/badge/license/MIT/blue
[github-release]: https://flat.badgen.net/github/release/petecorreia/react-circular-input

```sh
npm i react-circular-input
```

<a href="https://react-circular-input.now.sh"><img src="https://react-circular-input.now.sh/social-example.gif" alt="Animated example image (GIF)"></a>

## Example

```tsx
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb
} from 'react-circular-input'

export default () => {
	const [value, setValue] = useState(0.25)

	return (
		<CircularInput value={value} onChange={setValue}>
			<CircularTrack />
			<CircularProgress />
			<CircularThumb />
		</CircularInput>
	)
}
```

There's a lot more you can do with the library. From a simple gauge to a fully custom and animated circular input range.

Play around with **[examples at CodeSandbox](https://codesandbox.io/s/ypwq61rnxz?hidenavigation=1)**:

[![Edit react-circular-input](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ypwq61rnxz?hidenavigation=1)

A declarative and composable approach means we have a lot of flexibility, check out the documentation for how to go further!

## Documentation

Full documentation at **[react-circular-input.now.sh](https://react-circular-input.now.sh)**.

-   [Examples](https://react-circular-input.now.sh/examples)
-   [Components](https://react-circular-input.now.sh/components)
-   [Hooks](https://react-circular-input.now.sh/hooks)

Enjoy! 🎉

---

[Contributing](CONTRIBUTING.md)
|
[Code of Conduct](CODE_OF_CONDUCT.md)
|
[MIT License](LICENSE.md)
