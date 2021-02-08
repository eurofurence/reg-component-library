/** @jsxImportSource @emotion/react */

import { ChangeEventHandler, forwardRef, ForwardedRef } from 'react'
import styled from '@emotion/styled'
import FormHeaderLabel from './form-header-label'

const Input = styled.input`
	width: 100%;
	height: 3em;
	border: 1px solid var(--color-grays-300);
	border-radius: 0.1875em;
	padding: 0.75em 1em;

	color: var(--color-grays-900);

	&::placeholder {
		color: var(--color-grays-300);
	}
`

export interface TextFieldProps {
	name: string
	label: string
	placeholder: string
	gridSpan?: number
	onChange?: ChangeEventHandler<HTMLInputElement>
}

const TextField = forwardRef(({ name, label, placeholder, gridSpan, onChange }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => <FormHeaderLabel label={label} gridSpan={gridSpan}>
	<Input name={name} placeholder={placeholder} onChange={onChange} ref={ref}/>
</FormHeaderLabel>)

export default TextField
