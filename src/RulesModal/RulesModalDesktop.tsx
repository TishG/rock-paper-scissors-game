import { MouseEvent } from 'react';

import imageRulesLogo from '../image-rules.svg';
import close from '../icon-close.svg';

type RulesModalDesktopProps = {
	show: boolean;
	setClose: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function RulesModalDesktop({
	show,
	setClose,
}: RulesModalDesktopProps) {
	return show ? (
		//  Background blur layer
		<div className='fixed inset-0 bg-black/30 backdrop-blur-xs z-40'>
			<div className='h-screen w-screen flex justify-center items-center lg:items-start lg:pt-[80px]'>
				<div className='bg-white h-[400px] w-[400px] p-[20px] rounded-sm lg:shadow-lg'>
					<div className='flex justify-between items-center'>
						<h1 className='text-slate-700 text-3xl font-bold'>rules</h1>
						<button
							aria-label='close'
							onClick={setClose}
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
		</div>
	) : null;
}
