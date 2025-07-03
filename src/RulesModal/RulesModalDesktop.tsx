import { useEffect } from 'react';

import imageRulesLogo from '../image-rules.svg';
import close from '../icon-close.svg';

type RulesModalDesktopProps = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RulesModalDesktop({
	show,
	setShow,
}: RulesModalDesktopProps) {
	// preload images
	useEffect(() => {
		const img1 = new Image();
		img1.src = imageRulesLogo;

		const img2 = new Image();
		img2.src = close;
	}, []);

	return show ? (
		<div className='h-screen w-screen flex justify-center items-center'>
			<div className='bg-white h-[400px] w-[400px] p-[20px] rounded-sm'>
				<div className='flex justify-between items-center'>
					<h1 className='text-slate-700 text-3xl font-bold'>rules</h1>
					<button
						aria-label='close'
						onClick={() => setShow(false)}
						className='cursor-pointer'
					>
						<img src={close} alt='close' />
					</button>
				</div>
				<div className='flex justify-center items-center mt-[40px]'>
					<img src={imageRulesLogo} alt='game rules' />
				</div>
			</div>
		</div>
	) : null;
}
