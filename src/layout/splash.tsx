import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { DeepReadonly } from 'ts-essentials'

export interface SplashProps {
	readonly image: string
	readonly children: DeepReadonly<ReactNode>
}

const Container = styled.main`
	display: grid;
	grid: auto-flow / repeat(14, 1fr);
	gap: 24px;
	align-items: center;

	width: 1260px;
	margin: 0px auto;
	padding: 3em 0em;
`

const Image = styled.img`
	width: 100%;
	grid-column: 1 / span 7;
`

const Content = styled.article`
	grid-column: 9 / span 6;
`

const Splash = ({ image, children }: SplashProps) => <Container>
	<Image src={image}/>
	<Content>
		{children}
	</Content>
</Container>

export default Splash
