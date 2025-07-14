import { MouseEvent } from 'react';
import { imageRulesLogo, close } from '../constants/imagePaths';

type RulesModalMobileProps = {
	show: boolean;
	setClose: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function RulesModalMobile({
	show,
	setClose,
}: RulesModalMobileProps) {
	return show ? (
		<div
			data-testid='rules-modal'
			className='h-screen w-screen bg-white flex flex-col items-center'
		>
			<h1 className='text-slate-700 text-3xl font-bold pt-10'>rules</h1>
			<div className='flex-grow flex justify-center items-center'>
				<img src={imageRulesLogo} alt='game rules' />
			</div>
			<div className='flex justify-center items-center'>
				<button
					aria-label='close'
					onClick={setClose}
					className='cursor-pointer pb-[40px] mb-[40px]'
				>
					<img src={close} alt='close' />
				</button>
			</div>
		</div>
	) : null;
}
