/** @jsxImportSource @emotion/react */

import { ChangeEventHandler, forwardRef, ForwardedRef } from 'react'
import styled from '@emotion/styled'
import FormHeaderLabel from './form-header-label'

const TArea = styled.textarea<{ readonly height?: string }>`
	min-width: 100%;
	max-width: 100%;
	height: ${({ height }) => height != null ? height : '6.25em'};
	border: 2px solid var(--color-grays-300);
	border-radius: 0.1875em;
	padding: 0.75em 1em 1em 1em;

	color: var(--color-grays-900);

	&::placeholder {
		color: var(--color-grays-300);
	}
`

export interface TextAreaProps {
	readonly name: string
	readonly label: string
	readonly height?: string
	readonly placeholder: string
	readonly value?: string
	readonly defaultValue?: string
	readonly gridSpan?: number
	readonly onChange?: ChangeEventHandler<HTMLTextAreaElement>
	readonly readOnly?: boolean
}

const TextArea = forwardRef(({ label, gridSpan, ...rest }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => <FormHeaderLabel label={label} gridSpan={gridSpan}>
	<TArea {...rest} ref={ref}/>
</FormHeaderLabel>)

export default TextArea
