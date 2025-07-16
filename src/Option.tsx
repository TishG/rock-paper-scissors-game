import { rock, paper, scissors } from './constants/imagePaths';

type OptionProps = {
	type: string;
	isButton: boolean;
};

export default function Option({ type, isButton }: OptionProps) {
	// buttonClassAddOns - adds additional classNames to specific button for custom style  (button > div)

	const types = {
		paper: {
			src: paper,
			alt: 'Paper',
			marginRight: 'mr-[6px]',
			buttonStyle: 'top-[1/28] left-[30px] -translate-x-1/2 -translate-y-1/2',
			typeStyle: 'border-blue-500 shadow-blue-500/50',
		},
		rock: {
			src: rock,
			alt: 'Rock',
			marginRight: 'mr-[3px]',
			buttonStyle: 'bottom-0 left-1/2 -translate-x-1/2',
			typeStyle: 'border-red-500 shadow-red-500/50',
		},
		scissors: {
			src: scissors,
			alt: 'Scissors',
			marginRight: '',
			buttonStyle: 'top-[1/28] right-[-30px] -translate-y-1/2',
			typeStyle: 'border-yellow-400 shadow-yellow-400/50',
		},
	};
	const { src, alt, marginRight, buttonStyle, typeStyle } =
		types[type as keyof typeof types] || '';

	return (
		<div
			className={`${
				isButton ? `${buttonStyle} cursor-pointer absolute` : 'sm:order-2'
			} flex justify-center items-center z-10 bg-white max-xs:size-[120px] size-[150px] max-xs:border-[14px]  border-[18px] border-solid rounded-full  shadow-xl ${typeStyle}`}
		>
			<div>
				<img
					src={src}
					alt={alt}
					className={`object-contain max-xs:w-[38px] w-[50px] ${marginRight}`}
				/>
			</div>
		</div>
	);
}
