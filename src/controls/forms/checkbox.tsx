/** @jsxImportSource @emotion/react */

import { ChangeEventHandler, forwardRef } from 'react'
import styled from '@emotion/styled'
import { withFormLabel } from './form-label'

const Input = styled.input`
	width: 1.125em;
	height: 1.125em;
	border: 2px solid var(--color-grays-300);
	border-radius: 0.1em;

	&:checked {
		background-color: var(--color-semantic-info);
		border-color: var(--color-semantic-info);
	}
`

export interface CheckboxProps {
	readonly name: string
	readonly checked?: boolean
	readonly defaultChecked?: boolean
	readonly onChange?: ChangeEventHandler<HTMLInputElement>
	readonly readOnly?: boolean
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Checkbox = withFormLabel<HTMLInputElement, CheckboxProps>(forwardRef<HTMLInputElement, CheckboxProps>((props, ref) =>
	<Input {...props} type="checkbox" ref={ref} />,
))

export default Checkbox
