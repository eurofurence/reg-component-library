import styled from '@emotion/styled'

export const COLUMN_COUNT = 10

export default styled.form`
	display: grid;
	grid-template-columns: repeat(${COLUMN_COUNT}, 1fr);
	column-gap: 24px;
	row-gap: 24px;
	width: 620px;
	margin: 0px auto;

	> * {
		grid-column: span ${COLUMN_COUNT};
	}
`
