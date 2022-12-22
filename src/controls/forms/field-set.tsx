/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { ReactNode } from 'react'
import formControlStyle from './form-control'
import FormHeader from './form-header'
import ErrorMessage from './error-message'
import type { DeepReadonly } from 'ts-essentials'

const FSet = styled.fieldset`
	${formControlStyle}
`

export interface FieldSetProps {
	readonly legend?: string
	readonly gridSpan?: number
	readonly error?: string
	readonly children: DeepReadonly<ReactNode>
}

const FieldSet = ({ legend, gridSpan, error, children }: FieldSetProps) => <FSet gridSpan={gridSpan}>
	{legend == null ? null : <FormHeader as="legend">{legend}</FormHeader>}
	{children}
	{error === undefined ? undefined : <ErrorMessage>{error}</ErrorMessage>}
</FSet>

export default FieldSet
