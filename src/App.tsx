import { useState } from 'react';

import RulesButton from './RulesButton';
import RulesModalDesktop from './RulesModalDesktop';

export default function App() {
	const [show, setShow] = useState(false);

	return (
		<div className='relative h-screen w-screen bg-[url(../public/assets/original/main-background.jpg)]'>
			<RulesModalDesktop show={show} setShow={setShow} />
			<div className='absolute bottom-6 w-full flex justify-center lg:justify-end px-6'>
				{' '}
				<RulesButton onClick={setShow} show={show} />
			</div>
		</div>
	);
}
