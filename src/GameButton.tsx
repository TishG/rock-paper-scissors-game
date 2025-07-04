import Paper from './icon-paper.svg';
import Rock from './icon-rock.svg';
import Scissors from './icon-scissors.svg';

// buttonClassAddOns - adds additional classNames to button for custom modifications
const types = {
	paper: {
		src: Paper,
		alt: 'Paper',
		marginRight: 'mr-[6px]',
		buttonClassAddOns:
			'top-1/28 left-[30px] -translate-x-1/2 -translate-y-1/2 border-blue-400 shadow-xl shadow-blue-400/50',
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

type GameButtonProps = {
	type: string;
};

export default function GameButton({ type }: GameButtonProps) {
	const { src, alt, marginRight, buttonClassAddOns } =
		types[type as keyof typeof types] || '';

	return (
		<button
			className={`absolute z-10 bg-white size-[160px] rounded-full border-[20px] border-solid shadow-xl cursor-pointer ${buttonClassAddOns}`}
		>
			<div className='flex justify-center items-center'>
				<img
					src={src}
					alt={alt}
					className={`w-14 object-contain mt-[8px] ${marginRight}`}
				/>
			</div>
		</button>
	);
}
