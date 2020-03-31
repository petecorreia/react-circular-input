import React from 'react'
import Head from 'next/head'
import { title, description } from '../shared/config'

const SEO = () => (
	<Head>
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@petecorreia" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta
			name="twitter:image"
			content="https://react-circular-input.now.sh/social-card.png"
		/>

		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:url" content="https://react-circular-input.now.sh" />
		<meta
			property="og:image"
			content="https://react-circular-input.now.sh/social-card.png"
		/>
	</Head>
)

export default SEO
