interface ModalBackdropProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalBackdrop = (modalBackdropProps: ModalBackdropProps) => {
  return (
    <div
      className="bg-black/50 fixed inset-0 flex items-center justify-center z-10 p-4"
      onClick={modalBackdropProps.onClose}
    >
      {modalBackdropProps.children}
    </div>
  );
};

export default ModalBackdrop;
