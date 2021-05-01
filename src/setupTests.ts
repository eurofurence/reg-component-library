import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import fc from 'fast-check'

fc.configureGlobal({
	afterEach: () => {
		cleanup()
	},
})
