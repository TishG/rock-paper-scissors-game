import Paper from './icon-paper.svg';
import Rock from './icon-rock.svg';
import Scissors from './icon-scissors.svg';

import Option from './Option';

// buttonClassAddOns - adds additional classNames to specific button for custom style  (button > div)

const types = {
	paper: {
		src: Paper,
		alt: 'Paper',
		marginRight: 'mr-[6px]',
		buttonClassAddOns:
			'top-1/28 left-[30px] -translate-x-1/2 -translate-y-1/2 border-blue-500 shadow-xl shadow-blue-500/50',
	},
	rock: {
		src: Rock,
		alt: 'Rock',
		marginRight: 'mr-[3px]',
		buttonClassAddOns:
			'bottom-0 left-1/2 -translate-x-1/2 border-red-500 shadow-xl shadow-red-500/50',
	},
	scissors: {
		src: Scissors,
		alt: 'Scissors',
		marginRight: '',
		buttonClassAddOns:
			'top-1/28 right-[-30px] -translate-y-1/2 border-yellow-400 shadow-xl shadow-yellow-400/50',
	},
};

type OptionButtonProps = {
	type: string;
	onClick: () => void;
};

export default function OptionButton({ type, onClick }: OptionButtonProps) {
	const { src, alt, marginRight, buttonClassAddOns } =
		types[type as keyof typeof types] || '';

	return (
		<button name={type} onClick={onClick}>
			<Option type={type} isButton={true} />
			{/* <div
				className={`absolute flex justify-center items-center z-10 bg-white size-[150px] rounded-full border-[18px] border-solid shadow-xl cursor-pointer ${buttonClassAddOns}`}
			>
				<div>
					<img
						src={src}
						alt={alt}
						className={`object-contain w-[18] ${marginRight}`}
					/>
				</div>
			</div> */}
		</button>
	);
}
