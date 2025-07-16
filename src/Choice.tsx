import { GameButtonValueType } from './constants/gameButtonTypes';

import Option from './Option';

function ChoicePlaceholder() {
	return (
		<div
			data-testid='choice-placeholder'
			className='flex justify-center items-center max-xs:size-[120px]  size-[150px] rounded-full bg-gray-900 sm:order-2 animate-pulse'
		></div>
	);
}

type ChoiceProps = {
	testId: string;
	choice: GameButtonValueType | null;
	title: string;
};

export default function Choice({ testId, choice, title }: ChoiceProps) {
	return (
		<div
			className='flex flex-col items-center sm:whitespace-nowrap'
			data-testid={testId}
		>
			{choice ? (
				<Option type={choice} isButton={false} />
			) : (
				<ChoicePlaceholder />
			)}
			<div className='text-white text-xl my-4 sm:order-1 text-center w-full'>
				{title}
			</div>
		</div>
	);
}
