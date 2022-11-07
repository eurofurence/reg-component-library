/** @jsxImportSource @emotion/react */

import { Fragment, ReactNode, createContext, useContext, ChangeEventHandler, forwardRef } from 'react'
import styled from '@emotion/styled'
import { withFormLabel } from './form-label'
import FieldSet from './field-set'
import type { DeepReadonly } from 'ts-essentials'

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
	readonly value: string
	readonly checked?: boolean
	readonly defaultChecked?: boolean
	readonly onChange?: ChangeEventHandler<HTMLInputElement>
	readonly readOnly?: boolean
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const RadioItem = withFormLabel<HTMLInputElement, RadioItemProps>(forwardRef<HTMLInputElement, RadioItemProps>((props, ref) => {
	const name = useContext(NameContext)

	return <Input {...props} name={name} type="radio" ref={ref}/>
}))

export interface RadioGroupProps {
	readonly name: string
	readonly children: DeepReadonly<ReactNode>
}

export const RadioGroup = ({ name, children }: RadioGroupProps) => <Fragment>
	<NameContext.Provider value={name}>
		{children}
	</NameContext.Provider>
</Fragment>

export interface RadioSetProps {
	readonly name: string
	readonly gridSpan?: number
	readonly legend: string
	readonly children: DeepReadonly<ReactNode>
}

export const RadioSet = ({ name, gridSpan, legend, children }: RadioSetProps) => <FieldSet legend={legend} gridSpan={gridSpan}>
	<RadioGroup name={name}>
		{children}
	</RadioGroup>
</FieldSet>

RadioGroup.Item = RadioItem
RadioSet.Item = RadioItem

export default RadioGroup
