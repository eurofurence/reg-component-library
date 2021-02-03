/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { ReactElement } from 'react'
import formControlStyle from './form-control'
import FormHeader from './form-header'

const FSet = styled.fieldset`
	${formControlStyle}
`

const FieldSet = ({ legend, gridSpan, children }: { legend?: string, gridSpan?: number, children: ReactElement }) => <FSet gridSpan={gridSpan}>
	{legend == null ? null : <FormHeader as="legend">{legend}</FormHeader>}
	{children}
</FSet>

export default FieldSet
