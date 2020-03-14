import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'

type Props = {
	statusCode: number
}

const Error: NextPage<Props> = ({ statusCode }) => (
	<>
		{statusCode ? (
			<p>`An error ${statusCode} occurred on the server.`</p>
		) : (
			<>
				<p>An error occurred, the page doesn&apos;t seem to exist.</p>
				<hr />
				<Link href="/" prefetch>
					<a>Let&apos;s go back to the beginning?</a>
				</Link>
			</>
		)}
	</>
)

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : null
	return { statusCode }
}

export default Error
