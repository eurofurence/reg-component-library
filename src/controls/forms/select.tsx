/** @jsxImportSource @emotion/react */

import { forwardRef, ForwardedRef } from 'react'
import ReactSelect, { Options } from 'react-select'
import FormHeaderLabel from './form-header-label'

declare module 'react' {
	/* eslint-disable */
	function forwardRef<T, P = {}>(
	  render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
	): (props: P & React.RefAttributes<T>) => React.ReactElement | null
	/* eslint-enable */
}

interface SelectProps<Option> {
	readonly name: string
	readonly label: string
	readonly gridSpan?: number
	readonly isMulti?: boolean
	readonly options: Options<Option>
}

const Select = forwardRef(<Option,>({ name, label, gridSpan, isMulti, options }: SelectProps<Option>, _ref: ForwardedRef<HTMLInputElement>) => <FormHeaderLabel label={label} gridSpan={gridSpan}>
	<ReactSelect
		name={name}
		isMulti={isMulti}
		isClearable={false}
		// onChange={onChange}
		options={options} // eslint-disable-line @typescript-eslint/no-unsafe-assignment
		// innerRef={ref}
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
