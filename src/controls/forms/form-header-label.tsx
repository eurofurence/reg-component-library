/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { ReactNode, FC, forwardRef } from 'react'
import FormHeader from './form-header'
import formControlStyle from './form-control'
import ErrorMessage from './error-message'
import type { DeepReadonly } from 'ts-essentials'

export interface FormHeaderLabelProps {
	readonly label: string
	readonly gridSpan?: number
	readonly children: DeepReadonly<ReactNode>
}

const Label = styled.label<{ readonly gridSpan?: number }>`
	${formControlStyle}
`

const FormHeaderLabel = ({ label, gridSpan, children }: FormHeaderLabelProps) => <Label gridSpan={gridSpan}>
	<FormHeader>{label}</FormHeader>
	{children}
</Label>

export default FormHeaderLabel

export type WithFormHeaderLabelWrappedComponentProps<P> = Omit<P, 'label' | 'gridSpan' | 'error'> & {
	readonly invalid?: boolean
}

export type WithFormHeaderLabelProps<P> = {
	readonly error?: string
} & (P | P & {
	readonly label: string
	readonly gridSpan?: number
})

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const withFormHeaderLabel = <T, P>(ChildComponent: FC<WithFormHeaderLabelWrappedComponentProps<P>>) => forwardRef<T, WithFormHeaderLabelProps<P>>((props, ref) => {
	if ('label' in props) {
		const { label, gridSpan, error, ...rest } = props

		return <FormHeaderLabel label={label} gridSpan={gridSpan}>
			<ChildComponent invalid={Boolean(error)} {...rest} ref={ref}/>
			{error === undefined ? undefined : <ErrorMessage>{error}</ErrorMessage>}
		</FormHeaderLabel>
	} else {
		const { error, ...rest } = props

		// @ts-expect-error There is a problem here because 'label' and 'gridSpan' are removed in WithFormHeaderLabelWrappedComponentProps. Should fix later.
		return <ChildComponent invalid={Boolean(error)} {...rest} ref={ref}/>
	}
})
