import { useModalHandler } from "@/hooks/componentHooks/useModal";
import ModalContent from "./ModalContent";

export const Modal = () => {
  const { isModalOpen, childrenToRender, handleClose } = useModalHandler();
	
  if (!isModalOpen) {
    return null;
  }

  return (
    <ModalContent isVisible={isModalOpen} onClose={handleClose}>
      {childrenToRender}
    </ModalContent>
  );
};
