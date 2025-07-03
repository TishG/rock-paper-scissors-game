import RulesModalDesktop from './RulesModalDesktop';
import RulesModalMobile from './RulesModalMobile';

type RulesModalProps = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RulesModal({ show, setShow }: RulesModalProps) {
	return (
		<>
			<div className='sm:hidden'>
				<RulesModalMobile show={show} setShow={setShow} />
			</div>
			<div className='hidden sm:block'>
				<RulesModalDesktop show={show} setShow={setShow} />
			</div>
		</>
	);
}
