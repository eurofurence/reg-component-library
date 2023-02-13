/** @jsxImportSource @emotion/react */

import { Fragment, ReactNode, createContext, useContext, forwardRef, ComponentPropsWithoutRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { withFormLabel, WithFormLabelProps } from './form-label'
import FieldSet, { FieldSetProps } from './field-set'
import type { DeepReadonly } from 'ts-essentials'

interface ContextProps {
	readonly name?: string
	readonly invalid?: boolean
}

const RadioGroupContext = createContext<ContextProps>({})

const Input = styled.input<{ readonly invalid?: boolean }>`
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

	${({ invalid = false }) => !invalid ? css`` : css`
		border-color: var(--color-semantic-error);
	`}

	&:invalid {
		border-color: var(--color-semantic-error);
	}
`

type PlainRadioItemProps = Omit<Readonly<ComponentPropsWithoutRef<'input'>>, 'type' | 'height' | 'width' | 'size' | 'defaultValue' | 'radioGroup' | 'children'>

export type RadioItemProps = WithFormLabelProps<PlainRadioItemProps>

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const RadioItem = withFormLabel<HTMLInputElement, PlainRadioItemProps>(forwardRef<HTMLInputElement, PlainRadioItemProps>((props, ref) => {
	const ctx = useContext(RadioGroupContext)

	return <Input {...ctx} {...props} type="radio" ref={ref}/>
}))

export type RadioGroupProps = ContextProps & {
	readonly children: DeepReadonly<ReactNode>
}

export const RadioGroup = ({ children, ...ctx }: RadioGroupProps) => <Fragment>
	<RadioGroupContext.Provider value={ctx}>
		{children}
	</RadioGroupContext.Provider>
</Fragment>

export type RadioSetProps = FieldSetProps

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const RadioSet = ({ name, children, ...fieldSetProps }: RadioSetProps) => <FieldSet {...fieldSetProps}>
	<RadioGroup name={name} invalid={Boolean(fieldSetProps.error)}>
		{children}
	</RadioGroup>
</FieldSet>

RadioGroup.Item = RadioItem
RadioSet.Item = RadioItem

export default RadioGroup
