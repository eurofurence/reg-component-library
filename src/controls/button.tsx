import styled from '@emotion/styled'

export default styled.button<{ readonly inverted?: boolean }>`
	background-color: ${({ inverted = false }) => inverted ? 'var(--color-grays-000)' : 'var(--color-semantic-info)'};

	height: 3em;
	padding: 0em 2.125em;

	border-radius: 3px;

	font-family: Roboto;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 700;
	line-height: 1.1875;

	color: ${({ inverted = false }) => inverted ? 'var(--color-brand-2-500)' : 'var(--color-grays-000)'};

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
`
