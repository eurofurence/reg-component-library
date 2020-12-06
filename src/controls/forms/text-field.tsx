/** @jsxImportSource @emotion/react */

import { ChangeEvent } from 'react'
import styled from '@emotion/styled'
import FormHeader from './form-header'

const Input = styled.input`
	height: 3em;
	border: 1px solid var(--color-grays-300);
	border-radius: 0.1875em;
	padding: 0.75em 1em;

	color: var(--color-grays-900);

	&::placeholder {
		color: var(--color-grays-300);
	}
`

export default ({ label, placeholder, onChange }: { label: string, placeholder: string, onChange?: (event: ChangeEvent<HTMLInputElement>) => void }) => <label>
	<FormHeader>{label}</FormHeader>
	<Input placeholder={placeholder} onChange={onChange}/>
</label>
