/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styled from '@emotion/styled'
import { withFormLabel, WithFormLabelProps } from './form-label'

const Input = styled.input<{ readonly warn?: boolean, readonly invalid?: boolean }>`
	width: 1.125em;
	height: 1.125em;
	border: 2px solid ${({ invalid = false, warn = false }) => invalid ? 'var(--color-semantic-error)' : warn ? 'var(--color-semantic-warning)' : 'var(--color-grays-300)'};
	border-radius: 0.1em;

	&:checked {
		background-color: var(--color-semantic-info);
		border-color: ${({ invalid = false, warn = false }) => invalid ? 'var(--color-semantic-error)' : warn ? 'var(--color-semantic-warning)' : 'var(--color-semantic-info)'};
	}

	&:invalid {
		border-color: var(--color-semantic-error);
	}

	&:focus {
		border-width: 3px;
	}
`

type PlainCheckboxProps = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'height' | 'width' | 'size' | 'defaultValue' | 'radioGroup' | 'children'> & {
	readonly warn?: boolean
	readonly invalid?: boolean
}

export type CheckboxProps = WithFormLabelProps<PlainCheckboxProps>

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Checkbox = withFormLabel<HTMLInputElement, PlainCheckboxProps>(forwardRef<HTMLInputElement, PlainCheckboxProps>((props, ref) =>
	<Input {...props} type="checkbox" ref={ref} />,
))

export default Checkbox
