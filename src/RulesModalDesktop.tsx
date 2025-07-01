import imageRulesLogo from './image-rules.svg';
import close from './icon-close.svg';

type RulesModalProps = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RulesModalDesktop({ show, setShow }: RulesModalProps) {
	const conditionalShow = show ? 'block' : 'hidden';

	return (
		<div
			className={`h-screen w-screen bg-white flex flex-col items-center ${conditionalShow}`}
		>
			<h1 className='text-slate-700 text-3xl font-bold pt-10'>rules</h1>
			<div className='flex-grow flex justify-center items-center'>
				<img src={imageRulesLogo} alt='game rules' />
			</div>
			{/* fix close button not working on click, add tests */}
			<div className='pb-10 flex justify-center'>
				<button onClick={() => setShow(!show)}>
					<img src={close} alt='close' />
				</button>
			</div>
		</div>
	);
}
