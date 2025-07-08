import { useState, useEffect } from 'react';

import {
	GameButtonValueType,
	GAME_BUTTON_TYPES,
} from './constants/gameButtonTypes';

import RulesButton from './RulesButton';
import RulesModal from './RulesModal/RulesModalSelecter';
import ScoreBoard from './ScoreBoard';
import GameStarter from './GameStarter';

export default function App() {
	const [showRulesModal, setShowRulesModal] = useState<boolean>(false);
	const [score, setScore] = useState<number>(0);
	const [userChoice, setUserChoice] = useState<GameButtonValueType | null>(
		null
	);
	const [houseChoice, setHouseChoice] = useState<GameButtonValueType | null>(
		null
	);

	function handleUserChoice(choice: GameButtonValueType) {
		setUserChoice(choice);
	}

	// preload images
	useEffect(() => {
		const img1 = new Image();
		img1.src = './image-rules.svg';

		const img2 = new Image();
		img2.src = './icon-close.svg';
	}, []);

	useEffect(() => {
		if (userChoice != null) {
			const options: GameButtonValueType[] = Object.values(GAME_BUTTON_TYPES);
			const randomIndex = Math.floor(Math.random() * options.length);
			const chosenOption: GameButtonValueType = options[randomIndex];

			setTimeout(() => {
				setHouseChoice(chosenOption);
			}, 1000);
		}
	}, [userChoice]);

	return (
		<div
			className={`relative h-screen w-screen overflow-hidden ${
				showRulesModal ? 'sm:pt-[40px]' : 'pt-[40px]'
			} bg-[url(../public/assets/original/main-background.jpg)]`}
		>
			<ScoreBoard score={score} isRulesModalShowing={showRulesModal} />
			<div className={`mt-30 ${showRulesModal ? 'hidden sm:block' : 'block'}`}>
				<GameStarter
					isGameActive={userChoice != null || houseChoice != null}
					userChoice={userChoice}
					houseChoice={houseChoice}
					handleUserChoice={handleUserChoice}
				/>
			</div>
			<RulesModal
				show={showRulesModal}
				setClose={() => setShowRulesModal(false)}
			/>
			<div className='absolute bottom-6 w-full flex justify-center sm:justify-end px-6'>
				{' '}
				{
					<RulesButton
						onClick={() => setShowRulesModal(true)}
						show={showRulesModal}
					/>
				}
			</div>
		</div>
	);
}
