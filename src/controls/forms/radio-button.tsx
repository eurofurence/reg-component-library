/** @jsxImportSource @emotion/react */

import { Fragment, ReactElement, createContext, useContext, ChangeEventHandler, forwardRef, ForwardedRef } from 'react'
import styled from '@emotion/styled'
import FormHeader from './form-header'
import FormLabel from './form-label'

const NameContext = createContext<string>('unknown')

const Input = styled.input`
	// TODO: Probably scale padding and border along.

	width: 1.25em;
	height: 1.25em;
	border: 2px solid var(--color-grays-300);
	border-radius: 0.625em;

	&:checked {
		background-color: var(--color-semantic-info);
		border-color: var(--color-semantic-info);
		background-clip: content-box;
		padding: 3px;
	}
`

export interface RadioItemProps {
	label?: string
	value: string
	onChange?: ChangeEventHandler<HTMLInputElement>
}

export const RadioItem = forwardRef(({ label, value, onChange }: RadioItemProps, ref: ForwardedRef<HTMLInputElement>) => {
	const name = useContext(NameContext)
	const input = <Input name={name} type="radio" value={value} onChange={onChange} ref={ref}/>

	return label == null
		? input
		: <FormLabel>
			{input}
			{label}
		</FormLabel>
})

export const RadioGroup = ({ name, title, children }: { name: string, title?: string, children: ReactElement }) => <Fragment>
	{title == null ? null : <FormHeader>{title}</FormHeader>}
	<NameContext.Provider value={name}>
		{children}
	</NameContext.Provider>
</Fragment>

RadioGroup.Item = RadioItem

export default RadioGroup
