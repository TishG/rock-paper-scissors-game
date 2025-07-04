import GameButton from './GameButton';
import { GAME_BUTTON_TYPES } from './constants/gameButtonTypes';

import BGTriangle from './bg-triangle.svg';
import Rock from './icon-rock.svg';
import Paper from './icon-paper.svg';
import Scissors from './icon-scissors.svg';

export default function GameStarter() {
	return (
		<div className='relative w-[300px] h-[300px] mx-auto'>
			{/* Triangle Background  */}
			<img
				src={BGTriangle}
				alt='triangle background'
				className='absolute top-0 left-0 w-full h-full object-contain z-0'
			/>

			{/* Paper (top left)  */}
			{/* <button className='absolute top-1/28 left-[30px] -translate-x-1/2 -translate-y-1/2 z-10 bg-white size-[160px] rounded-full border-[20px] border-solid border-blue-400 shadow-lg shadow-blue-400/50 cursor-pointer'>
				<div className='flex justify-center items-center'>
					<img
						src={Paper}
						alt='Paper'
						className='w-14 object-contain mt-[8px] mr-[6px]'
					/>
				</div>
			</button> */}
			<GameButton type={GAME_BUTTON_TYPES.PAPER} />

			{/* Scissors (top right) */}
			{/* <button className='absolute top-1/28 right-[-30px] -translate-y-1/2 z-10 bg-white size-[160px] rounded-full border-[20px] border-solid border-yellow-400 shadow-xl shadow-yellow-400/50 cursor-pointer'>
				<div className='flex justify-center items-center'>
					<img
						src={Scissors}
						alt='Scissors'
						className='w-14 object-contain mt-[8px]'
					/>
				</div>
			</button> */}
			<GameButton type={GAME_BUTTON_TYPES.SCISSORS} />

			{/* Rock (bottom center) */}
			{/* <button className='absolute bottom-0 left-1/2 -translate-x-1/2 z-10 bg-white size-[160px] rounded-full border-[20px] border-solid border-red-500 shadow-xl shadow-red-400/50 cursor-pointer'>
				<div className='flex justify-center items-center'>
					<img
						src={Rock}
						alt='Rock'
						className='w-14 object-contain mt-[8px] mr-[3px]'
					/>
				</div>
			</button> */}
			<GameButton type={GAME_BUTTON_TYPES.ROCK} />
		</div>
	);
}
