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
	readonly name: string
	readonly label: string
	readonly placeholder: string
	readonly gridSpan?: number
	readonly onChange?: ChangeEventHandler<HTMLInputElement>
}

const TextField = forwardRef(({ label, gridSpan, ...rest }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => <FormHeaderLabel label={label} gridSpan={gridSpan}>
	<Input {...rest} ref={ref}/>
</FormHeaderLabel>)

export default TextField
