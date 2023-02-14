/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styled from '@emotion/styled'
import { withFormHeaderLabel, WithFormHeaderLabelProps, WithFormHeaderLabelWrappedComponentProps } from './form-header-label'

const Input = styled.input<{ readonly warn?: boolean, readonly invalid?: boolean }>`
	width: 100%;
	height: 3em;
	border: 2px solid ${({ invalid = false, warn = false }) => invalid ? 'var(--color-semantic-error)' : warn ? 'var(--color-semantic-warning)' : 'var(--color-grays-300)'};
	border-radius: 0.1875em;
	padding: 0.75em 1em;

	color: var(--color-grays-900);

	&::placeholder {
		color: var(--color-grays-300);
	}

	&:invalid {
		border-color: var(--color-semantic-error);
	}

	&:disabled {
		background-color: var(--color-grays-200);
	}

	&:focus {
		border-width: 3px;
	}
`

type PlainTextFieldProps = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'height' | 'width' | 'checked' | 'size' | 'defaultChecked' | 'radioGroup' | 'children'> & {
	readonly type?: 'date' | 'datetime' | 'datetime-local' | 'email' | 'month' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'
}

export type TextFieldProps = WithFormHeaderLabelProps<PlainTextFieldProps>

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TextField = withFormHeaderLabel<HTMLInputElement, TextFieldProps>(forwardRef<HTMLInputElement, WithFormHeaderLabelWrappedComponentProps<TextFieldProps>>((props, ref) =>
	<Input {...props} ref={ref}/>,
))

export default TextField
