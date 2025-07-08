import { MouseEvent } from 'react';

import RulesModalDesktop from './RulesModalDesktop';
import RulesModalMobile from './RulesModalMobile';

type RulesModalProps = {
	show: boolean;
	setClose: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function RulesModal({ show, setClose }: RulesModalProps) {
	return (
		<>
			<div className='sm:hidden'>
				<RulesModalMobile show={show} setClose={setClose} />
			</div>
			<div className='hidden sm:block'>
				<RulesModalDesktop show={show} setClose={setClose} />
			</div>
		</>
	);
}
