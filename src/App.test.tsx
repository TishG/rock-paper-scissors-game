import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

// beforeEach(() => {
// 	render(<App />);
// });

test('renders rules button', () => {
	render(<App />);
	const rulesButton = screen.getByRole('button', { name: /rules/i });
	userEvent.click(rulesButton);
});

test('does not show rules modal by default', () => {
	render(<App />);
	const rulesModal = screen.queryByTestId('rules-modal');
	expect(rulesModal).not.toBeInTheDocument();
});

test('toggles rules modal on rules button/close button click', async () => {
	render(<App />);
	const rulesButton = screen.getByRole('button', { name: /rules/i });
	await userEvent.click(rulesButton);

	const rulesModal = await screen.findByTestId('rules-modal');
	expect(rulesModal).toBeInTheDocument();

	// there are 2 modals, mobile and desktop
	const closeButtons = screen.getAllByRole('button', { name: /close/i });
	expect(closeButtons).toHaveLength(2);
	await userEvent.click(closeButtons[0]);
	// assert rules modal is closed
	expect(screen.queryByTestId('rules-modal')).not.toBeInTheDocument();
});

test('renders scoreboard', () => {
	render(<App />);
	const gameLogo = screen.getByTestId('game-logo');
	expect(gameLogo).toBeInTheDocument();

	const scoreTitle = screen.getByText(/score/i);
	expect(scoreTitle).toBeInTheDocument();
	// initial score should be 0
	const score = screen.getByText('0');
	expect(score).toBeInTheDocument();
});

test('sets user choice and house choice on paper option click', async () => {
	render(<App />);
	const paperButton = screen.getByRole('button', { name: /paper/i });

	await userEvent.click(paperButton);
	const userChoice = await screen.findByTestId('user-choice-paper');
	expect(userChoice).toBeInTheDocument();
	waitFor(() => {
		expect(screen.queryByTestId('choice-placeholder')).not.toBeInTheDocument();
	});

	const houseChoice = await screen.findByTestId(
		/house-choice-(rock|paper|scissors)/i
	);
	expect(houseChoice).toBeInTheDocument();
});

test('sets user choice and house choice on scissors option click', async () => {
	render(<App />);
	const scissorsButton = screen.getByRole('button', {
		name: /scissors/i,
	});

	await userEvent.click(scissorsButton);
	const userChoice = await screen.findByTestId('user-choice-scissors');
	expect(userChoice).toBeInTheDocument();
	waitFor(() => {
		expect(screen.queryByTestId('choice-placeholder')).not.toBeInTheDocument();
	});

	const houseChoice = await screen.findByTestId(
		/house-choice-(rock|paper|scissors)/i
	);
	expect(houseChoice).toBeInTheDocument();
});

test('sets user choice and house choice on rock option click', async () => {
	render(<App />);
	const rockButton = screen.getByRole('button', { name: /rock/i });
	await userEvent.click(rockButton);

	const userChoice = await screen.findByTestId('user-choice-rock');
	expect(userChoice).toBeInTheDocument();
	waitFor(() => {
		expect(screen.queryByTestId('choice-placeholder')).not.toBeInTheDocument();
	});

	const houseChoice = await screen.findByTestId(
		/house-choice-(rock|paper|scissors)/i
	);
	expect(houseChoice).toBeInTheDocument();
});

test('it display "you lose" when user is rock and house is paper', () => {});
