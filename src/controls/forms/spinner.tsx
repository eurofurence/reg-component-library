/** @jsxImportSource @emotion/react */

import { ChangeEventHandler, forwardRef, ForwardedRef, useRef, useCallback, MutableRefObject } from 'react'
import styled from '@emotion/styled'
import FormHeaderLabel from './form-header-label'
import spinnerMinus from '../../assets/spinner-minus.svg'
import spinnerPlus from '../../assets/spinner-plus.svg'

const Input = styled.input`
	width: 100%;
	height: 3em;
	border: 2px solid var(--color-grays-300);
	border-radius: 0.1875em;
	padding: 0.75em 1em;

	color: var(--color-grays-900);

	&::placeholder {
		color: var(--color-grays-300);
	}

	text-align: center;
`

const Container = styled.div`
	position: relative;
`

const Control = styled.button<{ side: 'left' | 'right' }>`
	position: absolute;
	top: 0em;
	${({ side }) => side === 'left' ? 'left' : 'right'}: 0em;
	width: 3em;
	height: 3em;

	display: flex;
	align-items: center;
	justify-content: space-around;
`

export interface SpinnerProps {
	readonly name: string
	readonly label: string
	readonly placeholder: string
	readonly value?: string
	readonly defaultValue?: string
	readonly gridSpan?: number
	readonly onChange?: ChangeEventHandler<HTMLInputElement>
	readonly readOnly?: boolean
}

// If someone knows a better way feel free to change because I feel dirty writing this...
// eslint-disable-next-line func-style
function useRefTap<T>(ref: ForwardedRef<T>): [((instance: T | null) => void) | MutableRefObject<T | null>, () => T | null] {
	if (ref == null) {
		const newRef = useRef<T>(null)

		return [newRef, () => newRef.current]
	} else if (ref instanceof Function) {
		let current: T | null = null

		const newRef = useCallback((node: T | null) => {
			current = node

			ref(node)
		}, [])

		return [newRef, () => current]
	} else {
		return [ref, () => ref.current]
	}
}

const Spinner = forwardRef(({ label, gridSpan, ...rest }: SpinnerProps, ref: ForwardedRef<HTMLInputElement>) => {
	const [newRef, getCurrent] = useRefTap(ref)

	return <FormHeaderLabel label={label} gridSpan={gridSpan}>
		<Container>
			<Input type="number" {...rest} ref={newRef}/>
			<Control type="button" side="left" onClick={() => getCurrent()?.stepDown()}><img src={spinnerMinus}/></Control>
			<Control type="button" side="right" onClick={() => getCurrent()?.stepUp()}><img src={spinnerPlus}/></Control>
		</Container>
	</FormHeaderLabel>
})

export default Spinner
