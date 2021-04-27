/** @jsxImportSource @emotion/react */

import { Fragment, ReactNode, createContext, useContext, ChangeEventHandler, forwardRef, ForwardedRef } from 'react'
import styled from '@emotion/styled'
import FormLabel from './form-label'
import FieldSet from './field-set'

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
	readonly label?: string
	readonly value: string
	readonly checked?: boolean
	readonly defaultChecked?: boolean
	readonly onChange?: ChangeEventHandler<HTMLInputElement>
	readonly gridSpan?: number
}

export const RadioItem = forwardRef(({ label, gridSpan, ...rest }: RadioItemProps, ref: ForwardedRef<HTMLInputElement>) => {
	const name = useContext(NameContext)
	const input = <Input {...rest} name={name} type="radio" ref={ref}/>

	return label == null
		? input
		: <FormLabel gridSpan={gridSpan}>
			{input}
			{label}
		</FormLabel>
})

export const RadioGroup = ({ name, children }: Readonly<{ name: string, children: ReactNode }>) => <Fragment>
	<NameContext.Provider value={name}>
		{children}
	</NameContext.Provider>
</Fragment>

export const RadioSet = ({ name, gridSpan, legend, children }: Readonly<{ name: string, gridSpan?: number, legend: string, children: ReactNode }>) => <FieldSet legend={legend} gridSpan={gridSpan}>
	<RadioGroup name={name}>
		{children}
	</RadioGroup>
</FieldSet>

RadioGroup.Item = RadioItem
RadioSet.Item = RadioItem

export default RadioGroup
