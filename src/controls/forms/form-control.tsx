import { css } from '@emotion/react'
import { COLUMN_COUNT } from '../../layout/form'

export default ({ gridSpan = COLUMN_COUNT }) => css`
	form > & {
		grid-column: span ${gridSpan};
	}
`
