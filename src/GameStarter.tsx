import {
	GAME_BUTTON_TYPES,
	GameButtonValueType,
} from './constants/gameButtonTypes';

import BGTriangle from './bg-triangle.svg';
import GameActive from './GameActive';

import OptionButton from './OptionButton';

type GameStarterProps = {
	isGameActive: boolean;
	userChoice: GameButtonValueType | null;
	houseChoice: GameButtonValueType | null;
	handleUserChoice: (choice: GameButtonValueType) => void;
};

export default function GameStarter({
	isGameActive,
	userChoice,
	houseChoice,
	handleUserChoice,
}: GameStarterProps) {
	const { ROCK, PAPER, SCISSORS } = GAME_BUTTON_TYPES;
	return isGameActive ? (
		<GameActive userChoice={userChoice} houseChoice={houseChoice} />
	) : (
		<div className='relative w-[300px] h-[300px] mx-auto'>
			{/* Triangle Background  */}
			<img
				src={BGTriangle}
				alt='triangle background'
				className='absolute top-0 left-0 w-full h-full object-contain z-0'
			/>

			{/* Paper (top left)  */}
			<OptionButton type={PAPER} onClick={() => handleUserChoice(PAPER)} />

			{/* Scissors (top right) */}
			<OptionButton
				type={SCISSORS}
				onClick={() => handleUserChoice(SCISSORS)}
			/>

			{/* Rock (bottom center) */}
			<OptionButton type={ROCK} onClick={() => handleUserChoice(ROCK)} />
		</div>
	);
}
