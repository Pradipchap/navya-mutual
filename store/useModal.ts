import { ReactNode } from "react";
import { create } from "zustand";

interface IModalArgs {
  isOpen: boolean;
  children: ReactNode;
}

export interface IModalInterface {
  isModalOpen: boolean;
  setIsModalOpen: (props: IModalArgs) => void;
	children: ReactNode;
}
export const useModalStore = create<IModalInterface>()((set) => ({
  isModalOpen: false,
	children:null,
  setIsModalOpen: ({isOpen,children}:IModalArgs) => set({ isModalOpen: isOpen,children }),
}));

export const useIsModalOpen =()=> useModalStore(
  (state) => state.isModalOpen
);

export const useSetIsModalOpen =()=> useModalStore(
  (state) => state.setIsModalOpen
);

export const useGetChildren=()=>useModalStore(state=>state.children)