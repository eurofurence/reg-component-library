/** @jsxImportSource @emotion/react */

import { ChangeEvent } from 'react'
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

const Checkbox = ({ name, label, checked, onChange }: { name: string, label?: string, checked: boolean, onChange?: (event: ChangeEvent<HTMLInputElement>) => void }) => {
	const input = <Input name={name} type="checkbox" checked={checked} onChange={onChange}/>

	return label == null
		? input
		: <FormLabel>
			{input}
			{label}
		</FormLabel>
}

export default Checkbox
