/** @jsxImportSource @emotion/react */

import ReactSelect, { Props } from 'react-select'
import FormHeaderLabel from './form-header-label'

declare module 'react' {
	/* eslint-disable */
	function forwardRef<T, P = {}>(
	  render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
	): (props: P & React.RefAttributes<T>) => React.ReactElement | null
	/* eslint-enable */
}

type PassthroughProps
	= 'name'
	| 'options'
	| 'isMulti'
	| 'isSearchable'
	| 'inputValue'
	| 'onBlur'
	| 'onChange'
	| 'onFocus'
	| 'onInputChange'
	| 'onKeyDown'
	| 'onMenuOpen'
	| 'onMenuClose'
	| 'onMenuScrollToTop'
	| 'onMenuScrollToBottom'
	| 'tabIndex'
	| 'value'

export type SelectProps<Option, IsMulti extends boolean = false> = Readonly<Pick<Props<Option, IsMulti>, PassthroughProps>> & {
	readonly label: string
	readonly gridSpan?: number
}

// eslint-disable-next-line func-style
function Select<Option = unknown, IsMulti extends boolean = false>({ label, gridSpan, ...passthroughProps }: SelectProps<Option, IsMulti>) {
	return <FormHeaderLabel label={label} gridSpan={gridSpan}>
		<ReactSelect
			{...passthroughProps}
			isClearable={false}
			components={{
				DropdownIndicator: null,
			}}
			styles={{
				control: ({ boxShadow, '&:hover': hoverCSS, ...defs }, state) => ({
					...defs,
					borderRadius: state.menuIsOpen ? '3px 3px 0px 0px' : '3px',
					borderWidth: '2px',
					borderColor: 'var(--color-grays-300)',
					backgroundColor: 'var(--color-grays-000)',
					minHeight: '3em',
				}),
				valueContainer: ({ padding, ...defs }) => ({
					...defs,
					gap: '0.5em',
					margin: '0em 0.375em',
					top: '-1px',
				}),
				menu: ({ marginTop, marginBottom, boxShadow, ...defs }) => ({
					...defs,
					borderRadius: '0px 0px 3px 3px',
					border: 'solid 2px var(--color-grays-300)',
					borderTopStyle: 'none',
				}),
				menuList: ({ paddingTop, paddingBottom, ...defs }) => ({
					...defs,
				}),
				multiValue: ({ margin, ...defs }) => ({
					...defs,
					padding: '0.5em 0.75em',
					borderRadius: 'calc(2.8125em / 2)',
					backgroundColor: 'var(--color-grays-100)',
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
	</FormHeaderLabel>
}

export default Select
