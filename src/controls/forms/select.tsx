/** @jsxImportSource @emotion/react */

import { forwardRef, ForwardedRef } from 'react'
import ReactSelect, { OptionsType, OptionTypeBase } from 'react-select'
import FormHeaderLabel from './form-header-label'

interface SelectProps {
	readonly name: string
	readonly label: string
	readonly gridSpan?: number
	readonly isMulti?: boolean
	readonly options: OptionsType<Readonly<OptionTypeBase>>
}

const Select = forwardRef(({ name, label, gridSpan, isMulti, options }: SelectProps, ref: ForwardedRef<HTMLInputElement>) => <FormHeaderLabel label={label} gridSpan={gridSpan}>
	<ReactSelect
		name={name}
		isMulti={isMulti}
		isClearable={false}
		// onChange={onChange}
		options={options}
		innerRef={ref}
		components={{
			DropdownIndicator: null,
		}}
		styles={{
			control: defs => ({
				...defs,
				borderRadius: '3px',
				borderColor: 'var(--color-grays-300)',
				backgroundColor: 'var(--color-grays-000)',
				minHeight: '3em',
			}),
			valueContainer: ({ padding, ...defs }) => ({
				...defs,
			}),
			menu: ({ marginTop, marginBottom, ...defs }) => ({
				...defs,
			}),
			menuList: ({ paddingTop, paddingBottom, ...defs }) => ({
				...defs,
			}),
			multiValue: ({ margin, ...defs }) => ({
				...defs,
				padding: '0.5em 0.75em',
				borderRadius: 'calc(2.8125em / 2)',
			}),
			multiValueLabel: ({ padding, paddingLeft, ...defs }) => ({
				...defs,
				fontSize: '0.875em',
				lineHeight: '1.5',
			}),
			option: defs => ({
				...defs,
				padding: '0.25em 0.75em',
				boxShadow: 'inset 0px -1px 0px var(--color-grays-100)',
			}),
		}}
	/>
</FormHeaderLabel>)

export default Select
