/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { ComponentProps } from 'react'
import formControlStyle from './form-control'
import FormHeader from './form-header'
import ErrorMessage from './error-message'

const FSet = styled.fieldset`
	${formControlStyle}
`

export type FieldSetProps = Omit<ComponentProps<'fieldset'>, 'defaultValue' | 'defaultChecked' | 'radioGroup'> & {
	readonly legend?: string
	readonly gridSpan?: number
	readonly error?: string
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const FieldSet = ({ legend, gridSpan, error, children, ...props }: FieldSetProps) => <FSet {...props} gridSpan={gridSpan}>
	{legend == null ? null : <FormHeader as="legend">{legend}</FormHeader>}
	{children}
	{error === undefined ? undefined : <ErrorMessage>{error}</ErrorMessage>}
</FSet>

export default FieldSet
