/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styled from '@emotion/styled'
import { withFormLabel, WithFormLabelProps } from './form-label'

const Input = styled.input`
	width: 1.125em;
	height: 1.125em;
	border: 2px solid var(--color-grays-300);
	border-radius: 0.1em;

	&:checked {
		background-color: var(--color-semantic-info);
		border-color: var(--color-semantic-info);
	}
`

type PlainCheckboxProps = Omit<Readonly<ComponentPropsWithoutRef<'input'>>, 'type' | 'height' | 'width' | 'size' | 'defaultValue' | 'radioGroup' | 'children'>

export type CheckboxProps = WithFormLabelProps<PlainCheckboxProps>

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Checkbox = withFormLabel<HTMLInputElement, PlainCheckboxProps>(forwardRef<HTMLInputElement, PlainCheckboxProps>((props, ref) =>
	<Input {...props} type="checkbox" ref={ref} />,
))

export default Checkbox
