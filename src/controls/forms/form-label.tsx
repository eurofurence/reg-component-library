import styled from '@emotion/styled'
import formControlStyle from './form-control'

export default styled.label`
	display: flex;
	align-items: center;

	line-height: 0;

	${formControlStyle}

	fieldset > &:not(:last-of-type) {
		margin-bottom: 0.75em;
	}

	fieldset > &:not(:first-of-type) {
		margin-top: 0.75em;
	}

	& > input {
		margin-right: 0.5em;
	}
`
