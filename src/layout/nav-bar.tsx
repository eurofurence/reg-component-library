import styled from '@emotion/styled'

export default styled.header`
	background-color: var(--color-brand-2-900);
	color: var(--color-grays-000);
	height: 64px;
	display: flex;
	align-items: center;
	padding: 2em;

	font-family: Roboto;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 1.5;

	@media (min-width: 1260px) {
		height: 110px;
	}
`
