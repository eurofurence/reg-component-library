import styled from '@emotion/styled'

export const COLUMN_COUNT = 10

export default styled.form`
	display: grid;
	grid-template-columns: repeat(${COLUMN_COUNT}, 1fr);
	column-gap: 24px;
	row-gap: 24px;

	> * {
		grid-column: span ${COLUMN_COUNT};
	}
`
