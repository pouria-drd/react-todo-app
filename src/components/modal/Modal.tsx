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
        className="bg-white text-zinc-800 cursor-default
        flex flex-col items-center justify-normal gap-4
        rounded w-full sm:w-fit sm:min-w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-2 w-full">
          <h3 className="text-xl">{modalProps.title}</h3>

          <button onClick={modalProps.onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="p-4 w-full">{modalProps.children}</div>
      </div>
    </ModalBackdrop>
  );
};

export default Modal;
