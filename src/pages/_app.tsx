import React, { FunctionComponent, ComponentProps, useState } from 'react'
import { Container, AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import styled, { ThemeProvider, css } from 'styled-components'
import { Box, Flex } from 'rebass'
import config from '../../config'
import GlobalStyle from '../shared/GlobalStyle'
import Lead from '../shared/Lead'

const Main = styled(Flex)`
	max-width: 1290px;
	min-height: 100vh;
	@media screen and (max-width: 400px) {
		.app-title {
			font-size: 22px;
		}
	}
`
Main.defaultProps = {
	as: 'main'
}

const Title = styled.h1`
	display: flex;
	align-items: flex-start;
	margin: 0;
	font-size: ${({ theme }) => theme.fontSizes[4]}px;

	a {
		margin-right: ${({ theme }) => theme.space[3]}px;
		text-decoration: none;

		&:focus,
		&:hover {
			text-decoration: underline;
		}

		@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
			margin-right: 0;
		}
	}
`

const MenuIcon = styled.button<{ isOpen: boolean }>`
	position: relative;
	top: 2px;
	order: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin-left: auto;
	color: ${({ isOpen, theme }) =>
		isOpen ? 'inherit' : theme.colors.lightgray};
	background: none;
	border: none;
	cursor: pointer;
	outline: none;

	&:focus,
	&:hover {
		color: inherit;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: none;
	}
`

const HamburgerIcon: FunctionComponent<ComponentProps<'svg'>> = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width={24}
		height={24}
		{...props}
	>
		<path
			fill="currentColor"
			d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
		/>
	</svg>
)

const Nav = styled(Flex)<{ isOpen: boolean }>`
	flex-direction: column;
	align-items: flex-end;
	margin-top: ${({ theme }) => theme.space[3]}px;

	${({ isOpen }) =>
		!isOpen &&
		css`
			display: none;
		`}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: flex;
		align-items: flex-start;
	}
`
Nav.defaultProps = {
	as: 'nav'
}

const Content = styled(Flex)`
	flex-direction: column;
	flex: 1 0 auto;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		flex-direction: row;
	}
`

const ContentInner = styled(Box)`
	p {
		max-width: 690px;

		&:first-child {
			margin-top: ${({ theme }) => theme.space[2]}px;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		p {
			&:first-child {
				margin-top: ${({ theme }) => theme.space[2]}px;
			}
		}

		${Lead} {
			&:first-child {
				margin-top: ${({ theme }) => theme.space[1]}px;
			}
		}
	}
`

const HeaderLink = styled.a<{ isActive: boolean }>`
	margin-bottom: ${({ theme }) => theme.space[2]}px;
	font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
	text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};

	&:focus,
	&:hover {
		text-decoration: underline;
	}
`

const Footer = styled(Box)`
	flex: 0 0 auto;
	text-align: right;
	font-size: ${({ theme }) => theme.fontSizes[0]}px;
`
Footer.defaultProps = {
	as: 'footer'
}

function App({ Component, pageProps, router }: AppProps) {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const { title, description, routes, theme, author, authorURL } = config

	const activeRoute = routes.find(({ path }) => path === router.asPath)

	const pageTitle = !!activeRoute
		? `${activeRoute.name} — ${title}`
		: `${title} — ${description}`

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<GlobalStyle />
				<Main
					mx="auto"
					flexDirection="column"
					px={[4, 5, 5, 6]}
					pt={[4, 5, 5, 6]}
					pb={4}
				>
					<Head>
						<title>{pageTitle}</title>
						<meta name="description" content={description} />
					</Head>

					<Content>
						<Box
							as="header"
							width={[1, 1, 1 / 3]}
							pr={[0, 0, 4, 5]}
							className="app-header"
						>
							<Title className="app-title">
								<MenuIcon
									isOpen={isMenuOpen}
									onClick={() => setMenuOpen(!isMenuOpen)}
								>
									<HamburgerIcon />
								</MenuIcon>

								<Link href="/" prefetch>
									<a onClick={() => setMenuOpen(false)}>
										{title}
									</a>
								</Link>
							</Title>

							<Nav isOpen={isMenuOpen} className="app-nav">
								{routes.map(({ name, path }) => (
									<Link
										key={path}
										href={path}
										prefetch={path.startsWith('/')}
									>
										<HeaderLink
											isActive={
												!!activeRoute &&
												activeRoute.path === path
											}
											href={path}
											onClick={() => setMenuOpen(false)}
										>
											{name}
										</HeaderLink>
									</Link>
								))}
							</Nav>
						</Box>

						<ContentInner width={[1, 1, 2 / 3]} pt={[4, 4, 0, 0]}>
							<Component {...pageProps} />
						</ContentInner>
					</Content>

					<Footer pt={4} className="app-footer">
						© {new Date().getFullYear()}{' '}
						{author ? (
							authorURL ? (
								<a href={authorURL}>{author}</a>
							) : (
								author
							)
						) : (
							title
						)}
					</Footer>
				</Main>
			</Container>
		</ThemeProvider>
	)
}

export default App
