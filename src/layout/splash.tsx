import styled from '@emotion/styled'
import { ReactElement, ReactNode } from 'react'
import { DeepReadonly } from 'ts-essentials'

export interface SplashProps {
	readonly image: DeepReadonly<ReactElement>
	readonly children: DeepReadonly<ReactNode>
}

const Container = styled.main`
	display: grid;
	grid: auto-flow / 1fr;
	gap: 24px;
	align-items: center;

	padding: 3em 0em;
	margin: 0em 1.5em;

	@media (min-width: 1260px) {
		grid: auto-flow / repeat(14, 1fr);
		width: 1260px;
		margin: 0em auto;
	}
`

const Image = styled.figure`
	width: 100%;

	@media (min-width: 1260px) {
		grid-column: 1 / span 7;
	}
`

const Content = styled.article`
	h1 {
		color: var(--color-brand-2-400);

		&:not(:first-child) {
			margin-top: 1em;
		}

		&:not(:last-child) {
			margin-bottom: 1em;
		}
	}

	h2 {
		&:not(:first-child) {
			margin-top: 0.66666667em;
		}

		&:not(:last-child) {
			margin-bottom: 0.66666667em;
		}
	}

	@media (min-width: 1260px) {
		grid-column: 9 / span 6;
	}
`

const Splash = ({ image, children }: SplashProps) => <Container>
	<Image>
		{image}
	</Image>
	<Content>
		{children}
	</Content>
</Container>

export default Splash
