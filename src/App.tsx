import { useState } from 'react';

import RulesButton from './RulesButton';
import RulesModal from './RulesModal/RulesModalSelecter';
import ScoreBoard from './ScoreBoard';
import GameStarter from './GameStarter';

export default function App() {
	const [show, setShow] = useState(false);
	const [score, setScore] = useState(0);

	return (
		<div
			className={`relative h-screen w-screen overflow-hidden ${
				show ? 'sm:pt-[40px]' : 'pt-[40px]'
			} bg-[url(../public/assets/original/main-background.jpg)]`}
		>
			<ScoreBoard score={score} isRulesModalShowing={show} />
			<div className={`mt-30 ${show ? 'hidden sm:block' : 'block'}`}>
				<GameStarter />
			</div>
			<RulesModal show={show} setShow={setShow} />
			<div className='absolute bottom-6 w-full flex justify-center sm:justify-end px-6'>
				{' '}
				{<RulesButton onClick={setShow} show={show} />}
			</div>
		</div>
	);
}
