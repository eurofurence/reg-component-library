/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { withFormHeaderLabel, WithFormHeaderLabelProps, WithFormHeaderLabelWrappedComponentProps } from './form-header-label'

const Input = styled.input<{ readonly invalid?: boolean }>`
	width: 100%;
	height: 3em;
	border: 2px solid var(--color-grays-300);
	border-radius: 0.1875em;
	padding: 0.75em 1em;

	color: var(--color-grays-900);

	${({ invalid = false }) => !invalid ? css`` : css`
		border-color: var(--color-semantic-error);
	`}

	&::placeholder {
		color: var(--color-grays-300);
	}

	&:invalid {
		border-color: var(--color-semantic-error);
	}
`

type PlainTextFieldProps = Omit<Readonly<ComponentPropsWithoutRef<'input'>>, 'type' | 'height' | 'width' | 'checked' | 'size' | 'defaultChecked' | 'radioGroup' | 'children'> & {
	readonly type?: 'date' | 'datetime' | 'datetime-local' | 'email' | 'month' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'
}

export type TextFieldProps = WithFormHeaderLabelProps<PlainTextFieldProps>

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TextField = withFormHeaderLabel<HTMLInputElement, TextFieldProps>(forwardRef<HTMLInputElement, WithFormHeaderLabelWrappedComponentProps<TextFieldProps>>((props, ref) =>
	<Input {...props} ref={ref}/>,
))

export default TextField
