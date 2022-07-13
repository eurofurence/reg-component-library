/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { ReactNode } from 'react'
import formControlStyle from './form-control'
import FormHeader from './form-header'
import type { DeepReadonly } from 'ts-essentials'

const FSet = styled.fieldset`
	${formControlStyle}
`

export interface FieldSetProps {
	readonly legend?: string
	readonly gridSpan?: number
	readonly children: DeepReadonly<ReactNode>
}

const FieldSet = ({ legend, gridSpan, children }: FieldSetProps) => <FSet gridSpan={gridSpan}>
	{legend == null ? null : <FormHeader as="legend">{legend}</FormHeader>}
	{children}
</FSet>

export default FieldSet
