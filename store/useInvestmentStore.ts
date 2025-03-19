import { IPurchaseDetails } from "@/interfaces/dataInterfaces";
import { create } from "zustand";

interface InvestmentStore {
  investments: IPurchaseDetails[];
  addInvestment: (investment: IPurchaseDetails) => void;
  updateInvestment: (id: number, updatedInvestment: Partial<IPurchaseDetails>) => void;
  removeInvestment: (id: number) => void;
  getInvestmentById: (id: number) => IPurchaseDetails | undefined;
}

const useInvestmentStore = create<InvestmentStore>((set, get) => ({
  investments: [],

  addInvestment: (investment) =>
    set((state) => ({ investments: [...state.investments, investment] })),

  updateInvestment: (id, updatedInvestment) =>
    set((state) => ({
      investments: state.investments.map((investment) =>
        investment.id === id ? { ...investment, ...updatedInvestment } : investment
      ),
    })),

  removeInvestment: (id) =>
    set((state) => ({
      investments: state.investments.filter((investment) => investment.id !== id),
    })),

  getInvestmentById: (id) => {
    const { investments } = get();
    return investments.find((investment) => investment.id === id);
  },
}));

export default useInvestmentStore;


export const useInvestmentList = useInvestmentStore((state) => state.investments);
export const useAddInvestment = useInvestmentStore((state) => state.addInvestment);
export const useUpdateInvestment = useInvestmentStore((state) => state.updateInvestment);
export const useDeleteInvestment = useInvestmentStore((state) => state.removeInvestment);
