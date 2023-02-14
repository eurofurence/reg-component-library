/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styled from '@emotion/styled'
import { withFormHeaderLabel, WithFormHeaderLabelProps, WithFormHeaderLabelWrappedComponentProps } from './form-header-label'

const TArea = styled.textarea<{ readonly height?: string, readonly warn?: boolean, readonly invalid?: boolean }>`
	min-width: 100%;
	max-width: 100%;
	height: ${({ height }) => height != null ? height : '6.25em'};
	border: 2px solid ${({ invalid = false, warn = false }) => invalid ? 'var(--color-semantic-error)' : warn ? 'var(--color-semantic-warning)' : 'var(--color-grays-300)'};
	border-radius: 0.1875em;
	padding: 0.75em 1em 1em 1em;

	color: var(--color-grays-900);

	&::placeholder {
		color: var(--color-grays-300);
	}

	&:invalid {
		border-color: var(--color-semantic-error);
	}

	&:disabled {
		background-color: var(--color-grays-200);
	}

	&:focus {
		border-width: 3px;
	}
`

type PlainTextAreaProps = Omit<ComponentPropsWithoutRef<'textarea'>, 'cols' | 'rows' | 'wrap' | 'defaultChecked' | 'radioGroup' | 'children'> & {
	readonly height?: string
}

export type TextAreaProps = WithFormHeaderLabelProps<PlainTextAreaProps>

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TextArea = withFormHeaderLabel<HTMLInputElement, PlainTextAreaProps>(forwardRef<HTMLTextAreaElement, WithFormHeaderLabelWrappedComponentProps<PlainTextAreaProps>>((props, ref) =>
	<TArea {...props} ref={ref}/>,
))

export default TextArea
