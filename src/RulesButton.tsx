type RulesProps = {
	show: boolean;
	onClick: () => void;
};

export default function Rules({ onClick, show }: RulesProps) {
	return (
		<button
			onClick={onClick}
			className={`text-white border-1 border-white rounded-sm py-2 px-10 cursor-pointer ${
				show ? 'hidden' : 'block'
			} sm:block`}
		>
			rules
		</button>
	);
}
