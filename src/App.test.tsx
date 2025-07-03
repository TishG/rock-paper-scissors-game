import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RulesModal from './RulesModal/RulesModalSelecter';
import RulesButton from './RulesButton';

function WrapperComponent() {
	const [show, setShow] = React.useState(false);
	return (
		<>
			<RulesButton onClick={setShow} show={show} />
			<RulesModal show={show} setShow={setShow} />
		</>
	);
}

beforeEach(() => {
	render(<WrapperComponent />);
});

test('renders rules button', () => {
	const rulesButton = screen.getByRole('button', { name: /rules/i });
	userEvent.click(rulesButton);
});

test('does not show rules modal by default', () => {
	const rulesModal = screen.queryByTestId('rules-modal');
	expect(rulesModal).not.toBeInTheDocument();
});

test('toggles rules modal on rules button/close button click', async () => {
	const rulesButton = screen.getByRole('button', { name: /rules/i });
	await userEvent.click(rulesButton);

	const rulesModal = screen.getByTestId('rules-modal');
	expect(rulesModal).toBeInTheDocument();
	// there are 2 modals, mobile and desktop
	const closeButtons = screen.getAllByRole('button', { name: /close/i });
	expect(closeButtons).toHaveLength(2);
	await userEvent.click(closeButtons[0]);
	// assert rules modal is closed
	expect(screen.queryByTestId('rules-modal')).not.toBeInTheDocument();
});
