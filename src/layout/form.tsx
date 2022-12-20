import styled from '@emotion/styled'

export const COLUMN_COUNT = 10

export default styled.form`
	display: grid;
	column-gap: 24px;
	row-gap: 24px;

	@media (min-width: 1260px) {
		grid-template-columns: repeat(${COLUMN_COUNT}, 1fr);

		> * {
			grid-column: span ${COLUMN_COUNT};
		}
	}
`
