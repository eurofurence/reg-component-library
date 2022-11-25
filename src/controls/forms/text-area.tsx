/** @jsxImportSource @emotion/react */

import { ChangeEventHandler, forwardRef } from 'react'
import styled from '@emotion/styled'
import { withFormHeaderLabel, WithFormHeaderLabelProps } from './form-header-label'

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

interface PlainTextAreaProps {
	readonly name: string
	readonly height?: string
	readonly placeholder: string
	readonly value?: string
	readonly defaultValue?: string
	readonly onChange?: ChangeEventHandler<HTMLTextAreaElement>
	readonly readOnly?: boolean
}

export type TextAreaProps = WithFormHeaderLabelProps<PlainTextAreaProps>

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TextArea = withFormHeaderLabel<HTMLInputElement, PlainTextAreaProps>(forwardRef<HTMLTextAreaElement, PlainTextAreaProps>((props, ref) =>
	<TArea {...props} ref={ref}/>,
))

export default TextArea
