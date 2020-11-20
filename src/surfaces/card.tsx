/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'

export default styled.article(({ width, height }: { width: string, height: string }) => `
	display: block;
	background-color: var(--color-grays-000);
	color: var(--color-grays-500);
	padding: 3.2rem;
	border-radius: 1rem;

	filter: drop-shadow(0px 4px 20px var(--color-grays-200));

	width: ${width};
	height: ${height};

	font-family: Inter;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 150%;

	& > header {
		border-bottom: solid 1px var(--color-grays-200);
		padding-bottom: 1.8rem;
		margin-bottom: 2.2rem;
	}

	& > footer {
		border-top: solid 1px var(--color-grays-200);
		padding-top: 1.8rem;
		margin-top: 2.2rem;
	}
`)
