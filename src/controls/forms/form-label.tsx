import { FC, forwardRef, ReactNode } from 'react'
import styled from '@emotion/styled'
import formControlStyle from './form-control'
import { DeepReadonly } from 'ts-essentials'

const FormLabel = styled.label`
	display: grid;
	grid: auto-flow / min-content auto;
	column-gap: 0.5em;
	align-items: center;

	${formControlStyle}

	fieldset > &:not(:last-of-type) {
		margin-bottom: 0.5em;
	}

	fieldset > &:not(:first-of-type) {
		margin-top: 0.5em;
	}

	& > input:first-of-type {
		grid-column: 1;
	}

	& > * {
		grid-column: 2;
	}
`

export default FormLabel

export type WithFormLabelProps<P> = P | P & {
	readonly label: string
	readonly children?: DeepReadonly<ReactNode>
	readonly gridSpan?: number
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const withFormLabel = <T, P>(ChildComponent: FC<Omit<P, 'label' | 'gridSpan' | 'children'>>) => forwardRef<T, WithFormLabelProps<P>>((props, ref) => {
	if ('label' in props) {
		const { label, gridSpan, children, ...rest } = props

		return <FormLabel gridSpan={gridSpan}>
			<ChildComponent {...rest} ref={ref}/>
			{label}
			{children}
		</FormLabel>
	} else {
		return <ChildComponent {...props} ref={ref}/>
	}
})
