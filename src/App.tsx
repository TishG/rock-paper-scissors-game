import { useState } from 'react';

import RulesButton from './RulesButton';
import RulesModal from './RulesModal/RulesModalSelecter';
import ScoreBoard from './ScoreBoard';

export default function App() {
	const [show, setShow] = useState(false);
	const [score, setScore] = useState(0);

	return (
		<div className='relative h-screen w-screen overflow-hidden bg-[url(../public/assets/original/main-background.jpg)]'>
			<ScoreBoard score={score} isRulesModalShowing={show} />
			<RulesModal show={show} setShow={setShow} />
			<div className='absolute bottom-6 w-full flex justify-center sm:justify-end px-6'>
				{' '}
				{<RulesButton onClick={setShow} show={show} />}
			</div>
		</div>
	);
}
