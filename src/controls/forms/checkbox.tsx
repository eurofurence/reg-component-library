/** @jsxImportSource @emotion/react */

import { ChangeEventHandler, forwardRef, ForwardedRef } from 'react'
import styled from '@emotion/styled'
import FormLabel from './form-label'

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

export interface CheckboxProps {
	readonly name: string
	readonly label?: string
	readonly checked?: boolean
	readonly defaultChecked?: boolean
	readonly gridSpan?: number
	readonly onChange?: ChangeEventHandler<HTMLInputElement>
}

const Checkbox = forwardRef(({ name, label, checked, defaultChecked, gridSpan, onChange }: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
	const input = <Input name={name} type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange} ref={ref}/>

	return label == null
		? input
		: <FormLabel gridSpan={gridSpan}>
			{input}
			{label}
		</FormLabel>
})

export default Checkbox
