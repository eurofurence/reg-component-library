/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { ReactNode } from 'react'
import formControlStyle from './form-control'
import FormHeader from './form-header'

const FSet = styled.fieldset`
	${formControlStyle}
`

const FieldSet = ({ legend, gridSpan, children }: Readonly<{ legend?: string, gridSpan?: number, children: ReactNode }>) => <FSet gridSpan={gridSpan}>
	{legend == null ? null : <FormHeader as="legend">{legend}</FormHeader>}
	{children}
</FSet>

export default FieldSet
