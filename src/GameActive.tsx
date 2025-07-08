import { GameButtonValueType } from './constants/gameButtonTypes';

import Choice from './Choice';

type GameActiveProps = {
	userChoice: GameButtonValueType | null;
	houseChoice: GameButtonValueType | null;
};

export default function GameActive({
	userChoice,
	houseChoice,
}: GameActiveProps) {
	return (
		<div
			data-testid='game-active'
			className='text-white flex justify-between md:justify-around w-[85%] md:w-[70%] lg:w-[40%] mx-auto'
		>
			<Choice
				testId={`user-choice-${userChoice}`}
				choice={userChoice}
				title='you picked'
			/>
			<Choice
				testId={`house-choice-${houseChoice}`}
				choice={houseChoice}
				title='the house picked'
			/>
		</div>
	);
}
