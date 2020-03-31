import React, { FunctionComponent, ComponentProps, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import {
	title,
	description,
	routes,
	theme,
	author,
	authorURL,
} from '../shared/config'
import GlobalStyle from '../shared/GlobalStyle'
import Lead from '../shared/Lead'

const Main = styled.main`
	display: flex;
	flex-direction: column;
	max-width: 1290px;
	min-height: 100vh;
	padding: 32px;
	margin: 0 auto;

	@media screen and (min-width: ${theme.breakpoints[0]}) {
		padding-top: 64px;
		padding-left: 64px;
		padding-right: 64px;
	}

	@media screen and (min-width: ${theme.breakpoints[1]}) {
		padding-top: 64px;
		padding-left: 64px;
		padding-right: 64px;
	}

	@media screen and (min-width: ${theme.breakpoints[2]}) {
		padding-top: 128px;
		padding-left: 128px;
		padding-right: 128px;
	}

	@media screen and (max-width: 400px) {
		.app-title {
			font-size: 22px;
		}
	}
`

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

		@media screen and (min-width: ${theme.breakpoints[1]}) {
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

	@media screen and (min-width: ${theme.breakpoints[1]}) {
		display: none;
	}
`

const HamburgerIcon: FunctionComponent<ComponentProps<'svg'>> = (props) => (
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

const Header = styled.header`
	box-sizing: border-box;
	padding-right: 0px;
	width: 100%;

	@media screen and (min-width: ${theme.breakpoints[1]}) {
		width: 33.33333333333333%;
		padding-right: 32px;
	}

	@media screen and (min-width: ${theme.breakpoints[2]}) {
		padding-right: 64px;
	}
`

const Nav = styled.nav<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: ${theme.space[3]}px;

	${({ isOpen }) =>
		!isOpen &&
		css`
			display: none;
		`}

	@media screen and (min-width: ${theme.breakpoints[1]}) {
		display: flex;
		align-items: flex-start;
	}
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;

	@media screen and (min-width: ${theme.breakpoints[1]}) {
		flex-direction: row;
	}
`

const ContentInner = styled.div`
	width: 100%;
	padding-top: 32px;

	@media screen and (min-width: ${theme.breakpoints[1]}) {
		width: 66.66666666666666%;
		padding-top: 0px;
	}

	@media screen and (min-width: ${theme.breakpoints[2]}) {
		padding-top: 0px;
	}

	p {
		max-width: 690px;

		&:first-child {
			margin-top: ${theme.space[2]}px;
		}
	}

	@media screen and (min-width: ${theme.breakpoints[1]}) {
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

const Footer = styled.footer`
	flex: 0 0 auto;
	text-align: right;
	font-size: ${theme.fontSizes[0]}px;
`

function App({ Component, pageProps, router }: AppProps) {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const activeRoute = routes.find(({ path }) => path === router.asPath)

	const pageTitle = !!activeRoute
		? `${activeRoute.name} — ${title}`
		: `${title} — ${description}`

	return (
		<>
			<GlobalStyle />
			<Main>
				<Head>
					<title>{pageTitle}</title>
					<meta name="description" content={description} />
				</Head>

				<Content>
					<Header>
						<Title className="app-title">
							<MenuIcon
								isOpen={isMenuOpen}
								onClick={() => setMenuOpen(!isMenuOpen)}
							>
								<HamburgerIcon />
							</MenuIcon>

							<Link href="/">
								<a onClick={() => setMenuOpen(false)}>
									{title}
								</a>
							</Link>
						</Title>

						<Nav isOpen={isMenuOpen} className="app-nav">
							{routes.map(({ name, path, isExternal }) =>
								isExternal ? (
									<HeaderLink
										key={path}
										href={path}
										isActive={
											!!activeRoute &&
											activeRoute.path === path
										}
										onClick={() => setMenuOpen(false)}
									>
										{name}
									</HeaderLink>
								) : (
									<Link key={path} href={path}>
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
								)
							)}
						</Nav>
					</Header>

					<ContentInner>
						<Component {...pageProps} />
					</ContentInner>
				</Content>

				<Footer className="app-footer">
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
		</>
	)
}

export default App
