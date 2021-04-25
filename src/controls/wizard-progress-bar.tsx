/** @jsxImportSource @emotion/react */

import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { times } from 'ramda'

const Container = styled.section`
	display: flex;

	font-family: Inter;
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 1.1875;
`

type StepState = 'completed' | 'current' | 'remaining'

const bubbleStateStyle = (state: StepState) => {
	switch (state) {
		case 'current':
			return css`
				background-color: var(--color-brand-1-400);
				font-family: Roboto;
				font-weight: 700;
				color: var(--color-grays-000);
			`
		case 'completed':
			return css`
				color: var(--color-brand-1-400);
			`
		case 'remaining':
			return css`
				border-color: var(--color-grays-400);
				color: var(--color-grays-500);
			`
	}
}

const Bubble = styled.div<{ readonly state: StepState }>`
	grid-area: bubble;
	box-sizing: border-box;
	width: 2em;
	height: 2em;
	border-radius: 1em;
	border: solid 2px var(--color-brand-1-400);
	display: flex;
	align-items: center;
	justify-content: center;

	${({ state }) => bubbleStateStyle(state)}
`

const Caption = styled.div<{ readonly state: StepState }>`
	grid-area: caption;
	color: ${({ state }) => state === 'current' ? 'var(--color-grays-900)' : 'var(--color-grays-400)'};
`

const Connector = styled.div<{ readonly state: StepState }>`
	height: 2em;
	flex: 1;
	display: flex;
	align-items: center;

	&::before {
		content: "";
		flex: 1;
		height: 2px;
		background-color: ${({ state }) => state === 'completed' ? 'var(--color-brand-1-400)' : 'var(--color-grays-200)'};
	}
`

const IndicatorContainer = styled.div<{ readonly state: StepState }>`
	display: grid;
	grid-template: "line-left bubble  line-right" min-content
						"caption   caption caption   " min-content / 1fr min-content 1fr;
	row-gap: 1.1rem;
	align-items: center;

	&::before {
		content: "";
		grid-area: line-left;
	}

	&:not(:first-of-type)::before {
		background-color: ${({ state }) => state === 'remaining' ? 'var(--color-grays-200)' : 'var(--color-brand-1-400)'};
		height: 2px;
	}

	&::after {
		content: "";
		grid-area: line-right;
	}

	&:not(:last-of-type)::after {
		background-color: ${({ state }) => state === 'completed' ? 'var(--color-brand-1-400)' : 'var(--color-grays-200)'};
		height: 2px;
	}
`

const Indicator = ({ state, idx, caption }: Readonly<{ state: StepState, idx: number, caption: string }>) => <IndicatorContainer state={state}>
	<Bubble state={state}>{idx + 1}</Bubble>
	<Caption state={state}>{caption}</Caption>
</IndicatorContainer>

const WizardProgressBar = ({ steps, currentStep }: Readonly<{ steps: readonly string[], currentStep: number }>) => <Container>
	{times(i => <React.Fragment key={i}>
		<Indicator state="completed" idx={i} caption={steps[i]}/>
		<Connector state="completed"/>
	</React.Fragment>, currentStep)}
	<Indicator state="current" idx={currentStep} caption={steps[currentStep]}/>
	{times(i => <React.Fragment key={i}>
		<Connector state="remaining"/>
		<Indicator state="remaining" idx={i + currentStep + 1} caption={steps[i + currentStep + 1]}/>
	</React.Fragment>, steps.length - currentStep - 1)}
</Container>

export default WizardProgressBar
