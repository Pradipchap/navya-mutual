import { useGetChildren, useIsModalOpen,useSetIsModalOpen } from "@/store/useModal";
import { ReactNode } from "react";

export const useModalHandler = () => {
  const isModalOpen = useIsModalOpen();
  const setIsModalOpen = useSetIsModalOpen();
  const childrenToRender = useGetChildren();

  const handleOpen = (children: ReactNode) => {
    setIsModalOpen({ isOpen: true, children });
  };
  const handleClose = () => {
    if(isModalOpen){
      setIsModalOpen({ isOpen: false, children: null });
      return true
    }
    return false
  };

  const toggleCommonModal = (state: boolean) => {
    setIsModalOpen({ isOpen: state, children: null });
  };
  return { isModalOpen, childrenToRender, toggleCommonModal, setIsModalOpen, handleClose, handleOpen };
};
