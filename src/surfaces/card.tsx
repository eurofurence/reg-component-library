import styled from '@emotion/styled'

export default styled.article<{
	readonly width?: string
	readonly height?: string
	readonly isLink?: boolean
}>`
	display: flex;
	flex-direction: column;
	background-color: var(--color-grays-000);
	color: var(--color-grays-500);
	padding: 2em;
	border: solid 2px var(--color-grays-300);
	border-radius: 1rem;

	${({ width = 'unset' }) => ({ width })}
	${({ height = 'unset' }) => ({ height })}

	font-family: Inter;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 1.5;

	> * {
		flex: 1;

		&:not(:first-child) {
			padding-top: 2.2rem;
			border-top: solid 1px var(--color-grays-300);
		}

		&:not(:last-child) {
			padding-bottom: 2.2rem;
		}
	}

	> header {
		flex: none;

		> h1 {
			font-family: Manrope;
			font-weight: 500;
			font-size: 1.25em;
			line-height: 1.5;
		}
	}

	> footer {
		flex: none;
	}
`
