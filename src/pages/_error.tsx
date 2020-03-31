import React from 'react'
import Link from 'next/link'
import { theme } from '../shared/config'

const Error = () => (
	<>
		<h1 style={{ fontSize: theme.fontSizes[4] }}>
			This page doesn&apos;t seem to exist
		</h1>
		<p>...and I had no time to code up a nicer 404 page 👻</p>
		<hr />
		<Link href="/">
			<a>Let&apos;s go back to the beginning?</a>
		</Link>
	</>
)

export default Error
