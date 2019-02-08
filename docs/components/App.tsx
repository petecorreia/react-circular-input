import React, { useState, FunctionComponent, ComponentProps } from 'react'
import { Container, AppComponentProps } from 'next/app'
import Head from 'next/head'
import NextLink from 'next/link'
import styled, { ThemeProvider, css } from 'styled-components'
import { Box, Flex } from 'rebass'
import {
	title,
	routes,
	theme,
	author,
	authorURL,
	description,
} from '../docs.config'
import '../styles/fonts.css'
import GlobalStyle from './GlobalStyle'
import Lead from './Lead'

const menuBreakpoint = theme.breakpoints[1]

const Main = styled(Flex)`
	max-width: 1290px;
	min-height: 100vh;
`
Main.defaultProps = {
	as: 'main',
}

const Title = styled.h1`
	display: flex;
	align-items: flex-start;
	margin: 0;
	font-size: ${theme.fontSizes[4]}px;

	a {
		margin-right: ${theme.space[3]}px;
		text-decoration: none;

		&:focus,
		&:hover {
			text-decoration: underline;
		}

		@media screen and (min-width: ${menuBreakpoint}) {
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
	color: ${({ isOpen }) => (isOpen ? 'inherit' : theme.colors.lightgray)};
	background: none;
	border: none;
	cursor: pointer;
	outline: none;

	&:focus,
	&:hover {
		color: inherit;
	}

	@media screen and (min-width: ${menuBreakpoint}) {
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
	margin-top: ${theme.space[3]}px;

	${({ isOpen }) =>
		!isOpen &&
		css`
			display: none;
		`}

	@media screen and (min-width: ${menuBreakpoint}) {
		display: flex;
		align-items: flex-start;
	}
`
Nav.defaultProps = {
	as: 'nav',
}

const Content = styled(Flex)`
	flex-direction: column;
	flex: 1 0 auto;

	@media screen and (min-width: ${menuBreakpoint}) {
		flex-direction: row;
	}
`

const ContentInner = styled(Box)`
	p {
		max-width: 690px;

		&:first-child {
			margin-top: ${theme.space[2]}px;
		}
	}

	@media screen and (min-width: ${menuBreakpoint}) {
		p {
			&:first-child {
				margin-top: ${theme.space[2]}px;
			}
		}

		${Lead} {
			&:first-child {
				margin-top: ${theme.space[1]}px;
			}
		}
	}
`

const HeaderLink = styled.a<{ isActive: boolean }>`
	margin-bottom: ${theme.space[2]}px;
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
	font-size: ${theme.fontSizes[0]}px;
`
Footer.defaultProps = {
	as: 'footer',
}

const App = ({ Component, ...props }: AppComponentProps) => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const activeRoute = routes.find(({ path }) => path === props.router.asPath)
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
						<meta charSet="utf-8" />
						<meta
							name="viewport"
							content="initial-scale=1.0, width=device-width"
						/>
						<meta name="description" content={description} />
						<link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
					</Head>

					<Content>
						<Box as="header" width={[1, 1, 1 / 3]} pr={[0, 0, 4, 5]}>
							<Title>
								<MenuIcon
									isOpen={isMenuOpen}
									onClick={() => setMenuOpen(!isMenuOpen)}
								>
									<HamburgerIcon />
								</MenuIcon>

								<NextLink href="/" prefetch>
									<a onClick={() => setMenuOpen(false)}>{title}</a>
								</NextLink>
							</Title>

							<Nav isOpen={isMenuOpen}>
								{routes.map(({ name, path }) => (
									<NextLink
										key={path}
										href={path}
										prefetch={path.startsWith('/')}
									>
										<HeaderLink
											isActive={!!activeRoute && activeRoute.path === path}
											href={path}
											onClick={() => setMenuOpen(false)}
										>
											{name}
										</HeaderLink>
									</NextLink>
								))}
							</Nav>
						</Box>

						<ContentInner width={[1, 1, 2 / 3]} pt={[4, 4, 0, 0]}>
							<Component {...props} />
						</ContentInner>
					</Content>

					<Footer pt={4}>
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
