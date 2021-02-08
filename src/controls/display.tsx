/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'

type AlignMethod = 'left' | 'right'

const alignText = (method: AlignMethod, length: number, padChar: string, text: string) => {
	switch (method) {
		case 'left': return text.padEnd(length, padChar)
		case 'right': return text.padStart(length, padChar)
	}
}

const Caption = styled.h1`
	display: block;
	margin-bottom: 0.6em;

	font-family: Inter;
	font-weight: 700;
	font-size: 1.0rem;
	line-height: 1.2;
	letter-spacing: 0.01em;
	text-transform: uppercase;
	color: var(--color-grays-300)
`

const DisplayCharacter = styled.div`
	display: inline-flex;
	background-color: var(--color-grays-000);
	color: var(--color-brand-2-500);
	border-radius: 0.2em;
	width: 1.5em;
	height: 1.5em;
	justify-content: space-around;
	align-items: center;

	font-family: Roboto;
	font-weight: 700;
	font-size: 2.0rem;
	line-height: 1.15;

	&:not(:last-child) {
		margin-right: 0.2em;
	}
`

export interface DisplayProps {
	content: string
	caption?: string
	size?: number
	padding?: string
	align?: AlignMethod
}

const Display = ({ content, caption, size, padding = ' ', align = 'right' }: DisplayProps) => {
	const justifiedContent = size === undefined
		? content
		: alignText(align, size, padding, content.slice(0, size))

	return <section>
		{caption != null ? <Caption>{caption}</Caption> : null}
		<div>{justifiedContent.split('').map((character, i) => <DisplayCharacter key={i}>{character}</DisplayCharacter>)}</div>
	</section>
}

export default Display
