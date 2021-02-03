/** @jsxImportSource @emotion/react */

import { ChangeEventHandler, forwardRef, ForwardedRef } from 'react'
import styled from '@emotion/styled'
import FormHeader from './form-header'
import formControlStyle from './form-control'

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

const Label = styled.label<{ gridSpan?: number }>`
	${formControlStyle}
`

export interface TextFieldProps {
	name: string
	label: string
	placeholder: string
	gridSpan?: number
	onChange?: ChangeEventHandler<HTMLInputElement>
}

const TextField = forwardRef(({ name, label, placeholder, gridSpan, onChange }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => <Label gridSpan={gridSpan}>
	<FormHeader>{label}</FormHeader>
	<Input name={name} placeholder={placeholder} onChange={onChange} ref={ref}/>
</Label>)

export default TextField
