/** @jsxImportSource @emotion/react */

import { ForwardedRef, useState } from 'react'
import styled from '@emotion/styled'
import { startOfYear, endOfYear } from 'date-fns'
import FormHeaderLabel from './form-header-label'
import formControlStyle from './form-control'
import ReactDatePicker from 'react-datepicker'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'
// import 'react-datepicker/dist/react-datepicker.css'

const RangeContainer = styled.section`
	${formControlStyle}

	position: relative;
`

const Inputs = styled.section`
	display: flex;
	gap: 24px;

	> * {
		flex: 1;
	}
`

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
`

type CommonProps = {
	readonly gridSpan: number
}

type InputProps = {
	readonly inputRef: ForwardedRef<HTMLInputElement>
	readonly label: string
	readonly value: string
	readonly placeholder?: string
}

type Prefixed<P extends string, Type> = {
	readonly [K in keyof Type as `${P}${Capitalize<string & K>}`]: Type[K]
}

type RangeDatePickerProps = CommonProps & Prefixed<'start' | 'end', InputProps>
type SimpleDatePickerProps = CommonProps & InputProps

export type DatePickerProps
	= { readonly range: true } & RangeDatePickerProps
	| { readonly range: false } & SimpleDatePickerProps

const Overlay = styled.section`
	position: absolute;
	left: 0px;
	top: 100%;
	width: 100%;
	margin-top: 12px;

	.react-datepicker {
		width: 100%;
		border: 2px solid var(--color-grays-300);
		border-radius: 0.1875em;
		user-select: none;
		line-height: 1.171875;
	}

	.react-datepicker__current-month {
		display: none;
	}

	.react-datepicker__navigation {
		position: absolute;
	}

	.react-datepicker__navigation--previous {
		top: 36px;
		left: 24px;
		z-index: 1;
	}

	.react-datepicker__navigation--next {
		top: 36px;
		right: 24px;
		z-index: 1;
	}

	.react-datepicker__navigation-icon--previous {
		content: url("${leftArrow}")
	}

	.react-datepicker__navigation-icon--next {
		content: url("${rightArrow}")
	}

	.react-datepicker__month-year-dropdown-container {
		color: var(--color-brand-2-900);
		position: relative;
		margin-bottom: 36px;
	}

	.react-datepicker__month-year-dropdown {
		border: 2px solid var(--color-grays-300);
		border-radius: 0.1875em;
		position: absolute;
		left: 50%;
		top: 0px;
		transform: translate(-50%);
		background-color: var(--color-grays-000);
	}

	.react-datepicker__month-container {
		margin: 36px 24px;
		text-align: center;
		cursor: pointer;
	}

	.react-datepicker__header {
	}

	.react-datepicker__day-names, .react-datepicker__week {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}

	.react-datepicker__week {
		justify-items: stretch;
		align-items: stretch;

		margin: 13.375px 0px;
	}

	.react-datepicker__day-names {
		justify-items: center;
		align-items: center;

		font-weight: 700;
		border-bottom: solid 1px var(--color-brand-2-100);
		padding-bottom: 0.5em;
	}

	.react-datepicker__month {
	}

	.react-datepicker__day-text {
		width: 2em;
		height: 2em;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.react-datepicker__day {
		display: flex;
		align-items: center;
		justify-content: space-around;

		position: relative;
	}

	.react-datepicker__day--outside-month {
		color: var(--color-grays-300);
	}

	.react-datepicker__day--in-range {
		&::before {
			content: "";

			background-color: var(--color-semantic-info);
			opacity: 0.2;

			position: absolute;
			top: 50%;
			z-index: -1;
			transform: translateY(-50%);

			height: 24px;
		}

		&:not(.react-datepicker__day--range-start):not(.react-datepicker__day--range-end)::before {
			left: 0px;
			width: 100%;
		}

		&.react-datepicker__day--range-start::before {
			right: 0px;
			width: 50%;
		}

		&.react-datepicker__day--range-end::before {
			left: 0px;
			width: 50%;
		}
	}

	.react-datepicker__day--selected, .react-datepicker__day--range-start, .react-datepicker__day--range-end {
		.react-datepicker__day-text {
			width: 2em;
			height: 2em;
			background-color: var(--color-semantic-info);
			border-radius: 1em;
			color: var(--color-grays-000);
		}
	}
`

const RangeDatePicker = ({
	gridSpan,
	startInputRef,
	startLabel,
	startValue,
	startPlaceholder,
	endInputRef,
	endLabel,
	endValue,
	endPlaceholder,
}: RangeDatePickerProps) => {
	const [startDate, setStartDate] = useState<Date | null>(new Date())
	const [endDate, setEndDate] = useState<Date | null>(null)

	const onChange = ([start, end]: readonly [Readonly<Date>, Readonly<Date>]) => {
	  setStartDate(start)
	  setEndDate(end)
	}

	return <RangeContainer gridSpan={gridSpan}>
		<Inputs>
			<FormHeaderLabel label={startLabel}>
				<Input value={startValue} placeholder={startPlaceholder} ref={startInputRef}/>
			</FormHeaderLabel>
			<FormHeaderLabel label={endLabel}>
				<Input value={endValue} placeholder={endPlaceholder} ref={endInputRef}/>
			</FormHeaderLabel>
		</Inputs>
		<Overlay>
			<ReactDatePicker
				inline
				formatWeekDay={(d: string) => d.slice(0, 1)}
				minDate={startOfYear(new Date())}
				maxDate={endOfYear(new Date())}
				selectsRange
				selected={startDate}
				startDate={startDate}
				endDate={endDate}
				onChange={onChange}
				showMonthYearDropdown
				renderDayContents={(day: number) => <span className="react-datepicker__day-text">{day}</span>}
			/>
		</Overlay>
	</RangeContainer>
}

const SimpleDatePicker = ({
	gridSpan,
	inputRef,
	label,
	...rest
}: SimpleDatePickerProps) => <FormHeaderLabel label={label} gridSpan={gridSpan}>
	<Input {...rest} ref={inputRef}/>
</FormHeaderLabel>

const DatePicker = (props: DatePickerProps) =>
	props.range
		? <RangeDatePicker {...props}/>
		: <SimpleDatePicker {...props}/>


export default DatePicker