type GameResultProps = {
	classNameAddOns: string;
	gameResult: string;
};

export default function GameResult({
	classNameAddOns,
	gameResult,
}: GameResultProps) {
	return (
		<div
			className={`text-white font-bold text-center whitespace-nowrap ${classNameAddOns}`}
		>
			{gameResult}
		</div>
	);
}
