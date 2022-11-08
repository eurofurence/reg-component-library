/** @jsxImportSource @emotion/react */

import { ChangeEventHandler, forwardRef } from 'react'
import styled from '@emotion/styled'
import { withFormHeaderLabel } from './form-header-label'

const Input = styled.input`
	width: 100%;
	height: 3em;
	border: 2px solid var(--color-grays-300);
	border-radius: 0.1875em;
	padding: 0.75em 1em;

	color: var(--color-grays-900);

	&::placeholder {
		color: var(--color-grays-300);
	}
`

export type TextFieldProps = {
	readonly name: string
	readonly placeholder: string
	readonly value?: string
	readonly defaultValue?: string
	readonly onChange?: ChangeEventHandler<HTMLInputElement>
	readonly readOnly?: boolean
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const InnerTextField = withFormHeaderLabel<HTMLInputElement, TextFieldProps>(forwardRef<HTMLInputElement, TextFieldProps>((props, ref) =>
	<Input {...props} ref={ref}/>,
))

export default InnerTextField
