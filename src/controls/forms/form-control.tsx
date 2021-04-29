import { css } from '@emotion/react'
import { COLUMN_COUNT } from '../../layout/form'

export default ({ gridSpan = COLUMN_COUNT }: { readonly gridSpan?: number }) => css`
	form > & {
		grid-column: span ${gridSpan};
	}
`
