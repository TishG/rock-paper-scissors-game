import { useEffect } from 'react';

import RulesModalDesktop from './RulesModalDesktop';
import RulesModalMobile from './RulesModalMobile';
import imageRulesLogo from '../image-rules.svg';
import close from '../icon-close.svg';

type RulesModalProps = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RulesModal({ show, setShow }: RulesModalProps) {
	// preload images
	useEffect(() => {
		const img1 = new Image();
		img1.src = imageRulesLogo;

		const img2 = new Image();
		img2.src = close;
	}, []);

	return (
		<>
			<div className='sm:hidden'>
				<RulesModalMobile show={show} setShow={setShow} />
			</div>
			<div className='hidden sm:block'>
				<RulesModalDesktop show={show} setShow={setShow} />
			</div>
		</>
	);
}
