/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { withFormLabel, WithFormLabelProps } from './form-label'

const Input = styled.input<{ readonly invalid?: boolean }>`
	width: 1.125em;
	height: 1.125em;
	border: 2px solid var(--color-grays-300);
	border-radius: 0.1em;

	&:checked {
		background-color: var(--color-semantic-info);
		border-color: var(--color-semantic-info);
	}

	${({ invalid = false }) => !invalid ? css`` : css`
		border-color: var(--color-semantic-error);
	`}

	&:invalid {
		border-color: var(--color-semantic-error);
	}
`

type PlainCheckboxProps = Omit<Readonly<ComponentPropsWithoutRef<'input'>>, 'type' | 'height' | 'width' | 'size' | 'defaultValue' | 'radioGroup' | 'children'> & {
	readonly invalid?: boolean
}

export type CheckboxProps = WithFormLabelProps<PlainCheckboxProps>

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Checkbox = withFormLabel<HTMLInputElement, PlainCheckboxProps>(forwardRef<HTMLInputElement, PlainCheckboxProps>((props, ref) =>
	<Input {...props} type="checkbox" ref={ref} />,
))

export default Checkbox
