/** @jsxImportSource @emotion/react */

import { ChangeEventHandler, forwardRef, ForwardedRef } from 'react'
import styled from '@emotion/styled'
import FormHeaderLabel from './form-header-label'

const TArea = styled.textarea<{ height?: string }>`
	min-width: 100%;
	max-width: 100%;
	height: ${({ height }) => height != null ? height : '6.25em'};
	border: 1px solid var(--color-grays-300);
	border-radius: 0.1875em;
	padding: 0.75em 1em 1em 1em;

	color: var(--color-grays-900);

	&::placeholder {
		color: var(--color-grays-300);
	}
`

export interface TextAreaProps {
	name: string
	label: string
	height?: string
	placeholder: string
	gridSpan?: number
	onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

const TextArea = forwardRef(({ name, label, height, placeholder, gridSpan, onChange }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => <FormHeaderLabel label={label} gridSpan={gridSpan}>
	<TArea name={name} placeholder={placeholder} height={height} onChange={onChange} ref={ref}/>
</FormHeaderLabel>)

export default TextArea
