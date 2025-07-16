import { gameTitle } from './constants/imagePaths';

type ScoreBoardProps = {
	score: number;
	isRulesModalShowing: boolean;
};

export default function ScoreBoard({
	score,
	isRulesModalShowing,
}: ScoreBoardProps) {
	return (
		<div
			className={`${
				isRulesModalShowing ? 'hidden sm:flex' : 'flex'
			} min-w-[280px] w-[85%] md:w-[75%] lg:w-[45%] mx-auto lg:flex justify-between border-solid border-[3px] border-white/50 rounded-lg lg:rounded-xl p-[25px]`}
		>
			<div>
				<img
					className='h-[70px] lg:h-[100px] object-contain'
					data-testid='game-logo'
					src={gameTitle}
					alt='rock paper scissors game logo'
				/>
			</div>
			<div className='bg-white size-[70px] lg:h-[100px] lg:w-[140px] rounded-lg flex flex-col justify-center items-center p-[10px]'>
				<div className='text-sm lg:text-base text-blue-800 font-bold tracking-wider '>
					score
				</div>
				<div
					data-testid='score'
					className='font-bold text-4xl lg:text-6xl text-slate-700'
				>
					{score}
				</div>
			</div>
		</div>
	);
}
