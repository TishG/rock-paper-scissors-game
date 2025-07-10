import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
	GAME_BUTTON_TYPES,
	GameButtonValueType,
} from './constants/gameButtonTypes';

import App from './App';

const { ROCK, PAPER, SCISSORS } = GAME_BUTTON_TYPES;

// Mock Math.random() to return choice
function mockHouseChoice(choice: GameButtonValueType) {
	let returnValue = choice === PAPER ? 0.4 : choice === SCISSORS ? 0.7 : 0;
	jest.spyOn(Math, 'random').mockReturnValue(returnValue);
}

// clicks rock, paper, or scissors button and displays as the user choice
async function clickAndDisplayUserChoice(choice: GameButtonValueType) {
	const buttonName = new RegExp(choice, 'i');
	const button = await screen.findByRole('button', { name: buttonName });
	await userEvent.click(button);

	const userChoice = await screen.findByTestId(`user-choice-${choice}`);
	expect(userChoice).toBeInTheDocument();

	waitFor(() =>
		expect(screen.queryByTestId('choice-placeholder')).not.toBeInTheDocument()
	);
}

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

test('it displays "you lose" when user is rock and house is paper', async () => {
	mockHouseChoice(PAPER);
	render(<App />);

	await clickAndDisplayUserChoice(ROCK);

	const houseChoice = await screen.findByTestId(
		/house-choice-paper/i,
		{},
		{ timeout: 5000 }
	);
	expect(houseChoice).toBeInTheDocument();

	expect(screen.getAllByText(/you lose/i)[0]).toBeInTheDocument();
});

test('it displays "you lose" when user is paper and house is scissors', async () => {
	mockHouseChoice(SCISSORS);
	render(<App />);

	await clickAndDisplayUserChoice(PAPER);

	const houseChoice = await screen.findByTestId(
		/house-choice-scissors/i,
		{},
		{ timeout: 2500 }
	);
	expect(houseChoice).toBeInTheDocument();

	expect(screen.getAllByText(/you lose/i)[0]).toBeInTheDocument();
});

test('it displays "you lose" when user is scissors and house is rock', async () => {
	mockHouseChoice(ROCK);
	render(<App />);

	await clickAndDisplayUserChoice(SCISSORS);

	const houseChoice = await screen.findByTestId(
		/house-choice-rock/i,
		{},
		{ timeout: 2500 }
	);
	expect(houseChoice).toBeInTheDocument();

	expect(screen.getAllByText(/you lose/i)[0]).toBeInTheDocument();
});

test('it displays "you win" when user is rock and house is scissors', async () => {
	mockHouseChoice(SCISSORS);
	render(<App />);

	await clickAndDisplayUserChoice(ROCK);

	const houseChoice = await screen.findByTestId(
		/house-choice-scissors/i,
		{},
		{ timeout: 2500 }
	);
	expect(houseChoice).toBeInTheDocument();

	expect(screen.getAllByText(/you win/i)[0]).toBeInTheDocument();
});

test('it displays "you win" when user is paper and house is rock', async () => {
	mockHouseChoice(ROCK);
	render(<App />);

	await clickAndDisplayUserChoice(PAPER);

	const houseChoice = await screen.findByTestId(
		/house-choice-rock/i,
		{},
		{ timeout: 2500 }
	);
	expect(houseChoice).toBeInTheDocument();

	expect(screen.getAllByText(/you win/i)[0]).toBeInTheDocument();
});

test('it displays "you win" when user is scissors and house is paper', async () => {
	mockHouseChoice(PAPER);
	render(<App />);

	await clickAndDisplayUserChoice(SCISSORS);

	const houseChoice = await screen.findByTestId(
		/house-choice-paper/i,
		{},
		{ timeout: 5000 }
	);
	expect(houseChoice).toBeInTheDocument();

	expect(screen.getAllByText(/you win/i)[0]).toBeInTheDocument();
});

test('it displays "draw" when user is rock and house is rock', async () => {
	mockHouseChoice(ROCK);
	render(<App />);

	await clickAndDisplayUserChoice(ROCK);

	const houseChoice = await screen.findByTestId(
		/house-choice-rock/i,
		{},
		{ timeout: 2500 }
	);
	expect(houseChoice).toBeInTheDocument();

	expect(screen.getAllByText(/draw/i)[0]).toBeInTheDocument();
});

test('it displays "draw" when user is paper and house is paper', async () => {
	mockHouseChoice(PAPER);
	render(<App />);

	await clickAndDisplayUserChoice(PAPER);

	const houseChoice = await screen.findByTestId(
		/house-choice-paper/i,
		{},
		{ timeout: 2500 }
	);
	expect(houseChoice).toBeInTheDocument();

	expect(screen.getAllByText(/draw/i)[0]).toBeInTheDocument();
});

test('it displays "draw" when user is scissors and house is scissors', async () => {
	mockHouseChoice(SCISSORS);
	render(<App />);

	await clickAndDisplayUserChoice(SCISSORS);

	const houseChoice = await screen.findByTestId(
		/house-choice-scissors/i,
		{},
		{ timeout: 2500 }
	);
	expect(houseChoice).toBeInTheDocument();

	expect(screen.getAllByText(/draw/i)[0]).toBeInTheDocument();
});

test('restarts game on "play again" button click', async () => {
	mockHouseChoice(PAPER);
	render(<App />);

	await clickAndDisplayUserChoice(SCISSORS);

	const houseChoice = await screen.findByTestId(/house-choice-paper/i);
	expect(houseChoice).toBeInTheDocument();

	const playAgainButton = screen.getAllByRole('button', {
		name: /play again/i,
	})[0];
	await userEvent.click(playAgainButton);

	expect(screen.getByTestId('game-starter')).toBeInTheDocument();
});

test('increases score when user beats house', async () => {
	mockHouseChoice(PAPER);
	render(<App />);
	// assert initial score of 0
	const score = await screen.findByTestId('score');
	expect(score).toHaveTextContent('0');

	await clickAndDisplayUserChoice(SCISSORS);

	const houseChoice = await screen.findByTestId(/house-choice-paper/i);
	expect(houseChoice).toBeInTheDocument();
	// assert score is 1 since scissors beats paper
	expect(await screen.findByTestId('score')).toHaveTextContent('1');

	const playAgainButton = screen.getAllByRole('button', {
		name: /play again/i,
	})[0];
	await userEvent.click(playAgainButton);

	mockHouseChoice(ROCK);

	await clickAndDisplayUserChoice(PAPER);

	expect(await screen.findByTestId(/house-choice-rock/i)).toBeInTheDocument();
	// assert score is 2 since paper beats rock
	expect(await screen.findByTestId('score')).toHaveTextContent('2');
});
