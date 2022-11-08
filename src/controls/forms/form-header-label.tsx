/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { ReactNode, FC, forwardRef } from 'react'
import FormHeader from './form-header'
import formControlStyle from './form-control'
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


export type WithFormHeaderLabelProps<P> = P | P & {
	readonly label: string
	readonly gridSpan?: number
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const withFormHeaderLabel = <T, P>(ChildComponent: FC<Omit<P, 'label' | 'gridSpan'>>) => forwardRef<T, WithFormHeaderLabelProps<P>>((props, ref) => {
	if ('label' in props) {
		const { label, gridSpan, ...rest } = props

		return <FormHeaderLabel label={label} gridSpan={gridSpan}>
			<ChildComponent {...rest} ref={ref}/>
		</FormHeaderLabel>
	} else {
		return <ChildComponent {...props} ref={ref}/>
	}
})
