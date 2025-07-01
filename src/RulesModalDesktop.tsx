import imageRulesLogo from './image-rules.svg';
import close from './icon-close.svg';

type RulesModalProps = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RulesModalDesktop({ show, setShow }: RulesModalProps) {
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
					onClick={() => setShow(false)}
					className='cursor-pointer pb-[40px] mb-[40px]'
				>
					<img src={close} alt='close' />
				</button>
			</div>
		</div>
	) : null;
}
