/** @jsxImportSource @emotion/react */

import { ReactNode, ChangeEventHandler, forwardRef, ForwardedRef, useEffect, useRef, useState, useImperativeHandle } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Card, { CardProps } from '../../surfaces/card'
import { RadioItem } from './radio-button'
import type { DeepReadonly } from 'ts-essentials'
import { pick } from 'ramda'

export interface RadioCardProps extends CardProps {
	readonly label?: string
	readonly value: string
	readonly checked?: boolean
	readonly defaultChecked?: boolean
	readonly onChange?: ChangeEventHandler<HTMLInputElement>
	readonly readOnly?: boolean
	readonly children?: DeepReadonly<ReactNode>
}

const Header = styled.header`
	display: flex;
	align-items: center;
`

const Label = styled.h1`
	margin-left: 0.4em;
`

const CheckableCard = styled(Card)`
	cursor: pointer;
	user-select: none;

	&[data-checked] {
		border-color: var(--color-semantic-info);

		${({ layout = 'column' }) => layout !== 'column' ? css`` : css`
			> *:not(:first-child) {
				border-top-color: var(--color-semantic-info);
			}
		`}

		> header {
			color: var(--color-semantic-info);

			> h1 {
				color: var(--color-semantic-info);
			}
		}
	}
`

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const RadioCard = forwardRef(({ label, children, checked, defaultChecked, height, width, layout, ...rest }: RadioCardProps, ref: ForwardedRef<HTMLInputElement>) => {
	if (checked == null) {
		/*
		* All this is to make the highlight of the Card follow the checked state of the input if it is uncontrolled.
		* This because at the moment the CSS `:has()` pseudoclass is not supported in any browser, so I can't do `:has(> input:checked)`.
		* The `data-checked` prop is to also provide depending CSS (such as items inside the card) the option to follow the checked state.
		*
		* i.e., if you want a contained item to have a semantic info border, you can do
		*
		*     ${RadioCard}[data-checked] {
		*         border-color: var(--color-semantic-info);
		*     }
		*
		* instead of
		*
		*     ${RadioCard}:has(> input:checked) {
		*         border-color: var(--color-semantic-info);
		*     }
		*
		* If anyone has a better idea, feel free to change this.
		*/
		const cardRef = useRef<HTMLLabelElement>(null)
		const inputRef = useRef<HTMLInputElement>(null)
		const [inputChecked, setInputChecked] = useState(defaultChecked ?? false)

		useImperativeHandle(ref, () => inputRef.current!)

		useEffect(() => {
			cardRef.current!.closest('form')!.addEventListener('change', e => setInputChecked(e.target === inputRef.current!))
		}, [])

		return <CheckableCard as="label" {...inputChecked ? { 'data-checked': '' } : {}} {...pick(['aria-description', 'aria-describedby', 'aria-details'], rest)} width={width} height={height} layout={layout} ref={cardRef}>
			<Header>
				<RadioItem aria-label={label} {...rest} defaultChecked={defaultChecked} ref={inputRef}/>
				<Label>{label}</Label>
			</Header>
			{children}
		</CheckableCard>
	} else {
		return <CheckableCard as="label" {...checked ? { 'data-checked': '' } : {}} {...pick(['aria-description', 'aria-describedby', 'aria-details'], rest)} width={width} height={height} layout={layout}>
			<Header>
				<RadioItem aria-label={label} {...rest} checked={checked} defaultChecked={defaultChecked} ref={ref}/>
				<Label>{label}</Label>
			</Header>
			{children}
		</CheckableCard>
	}
})

export default RadioCard
