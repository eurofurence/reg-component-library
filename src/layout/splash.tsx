import styled from '@emotion/styled'
import { ComponentProps, ReactElement } from 'react'
import { DeepReadonly } from 'ts-essentials'
import { desktop, phone } from '../media-queries'

const Container = styled.main`
	display: grid;
	gap: 24px;
	align-items: center;

	padding: 3em 0em;

	@media not all and ${desktop} {
		margin: 0em 1.5em;
	}

	@media ${desktop} {
		width: 1075px;
		margin: 0em auto;
	}

	@media ${phone} {
		grid: auto-flow / 1fr;
	}

	@media not all and ${phone} {
		grid: auto-flow / repeat(14, 1fr);
	}
`

const Image = styled.figure`
	width: 100%;

	@media not all and ${phone} {
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

	@media not all and ${phone} {
		grid-column: 9 / span 6;
	}
`

export type SplashProps = ComponentProps<typeof Content> & {
	readonly image: DeepReadonly<ReactElement>
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Splash = ({ image, ...props }: SplashProps) => <Container>
	<Image role="presentation">
		{image}
	</Image>
	<Content {...props}/>
</Container>

export default Splash
