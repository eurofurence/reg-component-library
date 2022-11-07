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


type WithFormLabelProps<P> = P & ({} | {
	readonly label: string
	readonly children?: DeepReadonly<ReactNode>
	readonly gridSpan?: number
})

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const withFormLabel = <T, P>(ChildComponent: FC<P>) => forwardRef<T, WithFormLabelProps<P>>((props, ref) => {
	if ('label' in props) {
		return <FormLabel gridSpan={props.gridSpan}>
			<ChildComponent {...{ ...props, children: undefined }} ref={ref}/>
			{props.label}
			{props.children}
		</FormLabel>
	} else {
		return <ChildComponent {...props} ref={ref}/>
	}
})
