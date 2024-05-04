import ModalBackdrop from "./ModalBackdrop";
import CloseIcon from "../../icons/CloseIcon";

import "./modal.css";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children?: React.ReactNode;
}

const Modal = (modalProps: ModalProps) => {
	if (!modalProps.isOpen) return null;

	return (
		<ModalBackdrop onClose={modalProps.onClose}>
			<div
				className="bg-zinc-800 text-white cursor-default
        flex flex-col items-center justify-normal gap-8
        rounded-lg w-full sm:w-fit sm:min-w-80 p-4"
				onClick={(e) => e.stopPropagation()}>
				<div className="flex items-center justify-between w-full">
					<h3 className="text-xl">{modalProps.title}</h3>

					<button onClick={modalProps.onClose}>
						<CloseIcon />
					</button>
				</div>

				<div className="w-full">{modalProps.children}</div>
			</div>
		</ModalBackdrop>
	);
};

export default Modal;
