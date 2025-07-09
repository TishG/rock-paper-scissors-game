import { useEffect } from 'react';

import {
	GAME_BUTTON_TYPES,
	GameButtonValueType,
} from './constants/gameButtonTypes';

import Choice from './Choice';
import GameResult from './GameResult';

type PlayAgainButtonProps = {
	onClick: () => void;
};

function PlayAgainButton({ onClick }: PlayAgainButtonProps) {
	return (
		<button
			onClick={onClick}
			className='text-blue-800 bg-white mx-auto py-3 px-27 rounded-md whitespace-nowrap cursor-pointer'
		>
			play again
		</button>
	);
}

type GameActiveProps = {
	userChoice: GameButtonValueType | null;
	houseChoice: GameButtonValueType | null;
	resetGame: () => void;
	addToScore: () => void;
};

function GameActive({
	userChoice,
	houseChoice,
	resetGame,
	addToScore,
}: GameActiveProps) {
	const { ROCK, PAPER, SCISSORS } = GAME_BUTTON_TYPES;

	const isUserLoser: boolean =
		(userChoice === ROCK && houseChoice === PAPER) ||
		(userChoice === PAPER && houseChoice === SCISSORS) ||
		(userChoice === SCISSORS && houseChoice === ROCK);
	const isUserWinner: boolean =
		(userChoice === ROCK && houseChoice === SCISSORS) ||
		(userChoice === PAPER && houseChoice === ROCK) ||
		(userChoice === SCISSORS && houseChoice === PAPER);
	const isDraw: boolean =
		(userChoice === ROCK && houseChoice === ROCK) ||
		(userChoice === PAPER && houseChoice === PAPER) ||
		(userChoice === SCISSORS && houseChoice === SCISSORS);

	const gameResult: string = isUserLoser
		? 'you lose'
		: isUserWinner
		? 'you win'
		: isDraw
		? 'draw'
		: '...';

	useEffect(() => {
		if (isUserWinner) {
			addToScore();
		}
	}, [isUserWinner]);
	return (
		<div data-testid='game-active'>
			<div
				className={`text-white flex justify-between items-center md:justify-around w-[85%] md:w-[75%] ${
					gameResult ? 'lg:w-[50%]' : 'lg:w-[40%]'
				} mx-auto`}
			>
				<Choice
					testId={`user-choice-${userChoice}`}
					choice={userChoice}
					title='you picked'
				/>
				<div className='hidden lg:block mx-2'>
					<GameResult
						classNameAddOns={`text-5xl ${gameResult ? '' : 'animate-pulse'}`}
						gameResult={gameResult}
					/>
					<PlayAgainButton onClick={resetGame} />
				</div>
				<Choice
					testId={`house-choice-${houseChoice}`}
					choice={houseChoice}
					title='the house picked'
				/>
			</div>
			<div className='lg:hidden'>
				<GameResult
					classNameAddOns={`text-6xl mt-[35px] ${
						gameResult ? '' : 'animate-pulse'
					}`}
					gameResult={gameResult}
				/>
				<div className='flex justify-center'>
					{' '}
					<PlayAgainButton onClick={resetGame} />
				</div>
			</div>
		</div>
	);
}

export default GameActive;
