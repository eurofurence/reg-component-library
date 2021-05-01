/** @jsxImportSource @emotion/react */

import TextArea from './text-area'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChangeEventHandler } from 'react'
import * as fc from 'fast-check'

describe('TextArea', () => {
	it('renders correctly', () => {
		fc.assert(fc.property(fc.fullUnicodeString(), fc.fullUnicodeString(), (label, placeholder) => {
			const tree = renderer
				.create(<TextArea name="comments" label={label} placeholder={placeholder}/>)
				.toJSON()

			expect(tree).toMatchSnapshot()
		}), { numRuns: 20, seed: 2562346 })
	})

	it('has a label', () => {
		const { queryByLabelText } = render(
			<TextArea name="comments" label="Comments" placeholder=""/>,
		)

		expect(queryByLabelText('Comments')).toBeTruthy()
	})

	it('enters focus when clicked directly', () => {
		const { getByRole } = render(
			<TextArea name="comments" label="Comments" placeholder=""/>,
		)

		const textArea = getByRole('textbox')

		expect(textArea).not.toHaveFocus()

		userEvent.click(textArea)

		expect(textArea).toHaveFocus()
	})

	it('enters focus when clicked through label', () => {
		const { getByRole, getByText } = render(
			<TextArea name="comments" label="Comments" placeholder=""/>,
		)

		const label = getByText('Comments')
		const textArea = getByRole('textbox')

		expect(textArea).not.toHaveFocus()

		userEvent.click(label)

		expect(textArea).toHaveFocus()
	})

	it('can handle unicode input', () => {
		fc.assert(fc.property(fc.fullUnicodeString({ minLength: 1 }), (input) => {
			const onChange = jest.fn() as jest.MockedFunction<ChangeEventHandler<HTMLTextAreaElement>>
			const { getByRole } = render(
				<TextArea name="comments" label="Comments" placeholder="" onChange={onChange}/>,
			)

			const textArea = getByRole('textbox')

			userEvent.type(textArea, input)

			expect(onChange.mock.calls[onChange.mock.calls.length - 1]![0].target.value).toEqual(input)
		}))
	})

	it('can display unicode', () => {
		fc.assert(fc.property(fc.fullUnicodeString({ minLength: 1 }), (input) => {
			const onChange = jest.fn() as jest.MockedFunction<ChangeEventHandler<HTMLTextAreaElement>>
			const { getByRole } = render(
				<TextArea name="comments" label="Comments" placeholder="" value={input} onChange={onChange}/>,
			)

			const textArea = getByRole('textbox')

			userEvent.type(textArea, input)

			expect(textArea).toHaveValue(input)
		}))
	})

	describe('when controlled', () => {
		it('reflects the input value at all times (true)', () => {
			const onChange = jest.fn() as jest.MockedFunction<ChangeEventHandler<HTMLTextAreaElement>>
			const { getByRole } = render(
				<TextArea name="comments" label="Comments" value="test" placeholder="" onChange={onChange}/>,
			)

			const textArea = getByRole('textbox')

			expect(textArea).toHaveValue('test')

			userEvent.type(textArea, 'I will be bringing a fursuit.')

			expect(textArea).toHaveValue('test')
		})

		it('raises onChange events when typed in', () => {
			const onChange = jest.fn() as jest.MockedFunction<ChangeEventHandler<HTMLTextAreaElement>>
			const { getByRole } = render(
				<TextArea name="comments" label="Comments" value="test" placeholder="" onChange={onChange}/>,
			)

			const textArea = getByRole('textbox')

			userEvent.type(textArea, 'I will be bringing a fursuit.')

			expect(onChange).toHaveBeenCalled()
		})

		it('supports readOnly fields', () => {
			const { getByRole } = render(
				<TextArea name="comments" label="Comments" value="test" placeholder="" readOnly/>,
			)

			const textArea = getByRole('textbox')

			userEvent.type(textArea, 'I will be bringing a fursuit.')

			expect(textArea).toHaveValue('test')
		})
	})

	describe('when uncontrolled', () => {
		it('reflects the typed value', () => {
			const { getByRole } = render(
				<TextArea name="comments" label="Comments" placeholder=""/>,
			)

			const textArea = getByRole('textbox')

			userEvent.type(textArea, 'I will be bringing a fursuit.')

			expect(textArea).toHaveValue('I will be bringing a fursuit.')
		})

		it('reflects the defaultValue value originally', () => {
			const { getByRole } = render(
				<TextArea name="comments" label="Comments" placeholder="" defaultValue="uwu"/>,
			)

			expect(getByRole('textbox')).toHaveValue('uwu')
		})

		it('raises onChange events when typed in', () => {
			const onChange = jest.fn() as jest.MockedFunction<ChangeEventHandler<HTMLTextAreaElement>>
			const { getByRole } = render(
				<TextArea name="comments" label="Comments" placeholder="" onChange={onChange}/>,
			)

			const textArea = getByRole('textbox')

			userEvent.type(textArea, 'I will be bringing a fursuit.')

			expect(onChange).toHaveBeenCalled()
		})
	})
})
