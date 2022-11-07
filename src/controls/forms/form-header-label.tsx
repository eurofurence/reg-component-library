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


type WithFormHeaderLabelProps<P> = P & ({} | {
	readonly label: string
	readonly gridSpan?: number
})

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const withFormHeaderLabel = <T, P>(ChildComponent: FC<P>) => forwardRef<T, WithFormHeaderLabelProps<P>>((props, ref) => {
	if ('label' in props) {
		return <FormHeaderLabel label={props.label} gridSpan={props.gridSpan}>
			<ChildComponent {...props} ref={ref}/>
		</FormHeaderLabel>
	} else {
		return <ChildComponent {...props} ref={ref}/>
	}
})
