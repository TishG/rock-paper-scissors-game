import Option from './Option';

type OptionButtonProps = {
	type: string;
	onClick: () => void;
};

export default function OptionButton({ type, onClick }: OptionButtonProps) {
	return (
		<button name={type} onClick={onClick}>
			<Option type={type} isButton={true} />
		</button>
	);
}
