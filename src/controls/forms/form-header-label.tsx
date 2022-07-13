/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { ReactNode } from 'react'
import FormHeader from './form-header'
import formControlStyle from './form-control'
import type { DeepReadonly } from 'ts-essentials'

const Label = styled.label<{ gridSpan?: number }>`
	${formControlStyle}
`

const FormHeaderLabel = ({ label, gridSpan, children }: DeepReadonly<{ label: string, gridSpan?: number, children: ReactNode }>) => <Label gridSpan={gridSpan}>
	<FormHeader>{label}</FormHeader>
	{children}
</Label>

export default FormHeaderLabel
