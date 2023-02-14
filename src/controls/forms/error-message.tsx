/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { ComponentProps } from 'react'

const Container = styled.div<{ readonly severity?: 'error' | 'warning' }>`
	color: var(--color-semantic-${({ severity = 'error' }) => severity});

	&:empty {
		display: none;
	}
`

export type ErrorMessageProps = Omit<ComponentProps<'div'>, 'defaultValue' | 'defaultChecked' | 'radioGroup' | 'children'> & {
	readonly severity?: 'error' | 'warning'
	readonly children?: string
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const ErrorMessage = (props: ErrorMessageProps) => <Container role="alert" {...props}/>

export default ErrorMessage
