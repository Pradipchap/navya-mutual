import { INVESTMENTS } from "@/constants/endpoints";
import {  IPurchaseDetails } from "@/interfaces/dataInterfaces";
import { create } from "zustand";

type Store = {
  investments: IPurchaseDetails[];
  loading: boolean;
  error: string | null;
  pageNo: number;
  hasMore: boolean;
  fetchInvestments: (page?: number) => Promise<void>;
  addInvestment: (investment: IPurchaseDetails) => Promise<void>;
  loadMore: () => void;
};

export const useInvestmentStore = create<Store>((set, get) => ({
  investments: [],
  loading: false,
  error: null,
  pageNo: 1,
  hasMore: true,

  fetchInvestments: async (page = 1) => {
    if (get().loading) return;

    set({ loading: true, error: null });

    try {
      const response = await fetch(`${INVESTMENTS}?_page=${page}&_limit=5`);
      if (!response.ok) {
        throw new Error("Failed to fetch investments");
      }

      const data: IPurchaseDetails[] = await response.json();

      if (data.length === 0) {
        set({ hasMore: false });
        return;
      }

      set((state) => ({
        investments: page === 1 ? data : [...state.investments, ...data],
        pageNo: page,
        hasMore: true,
      }));
    } catch (error) {
      set({ error: "Failed to fetch investments" });
    } finally {
      set({ loading: false });
    }
  },

  addInvestment: async (investment: IPurchaseDetails) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(INVESTMENTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(investment),
      });

      if (!response.ok) {
        throw new Error("Failed to add investment");
      }
      const newInvestment: IPurchaseDetails = await response.json();
      set((state) => ({
        investments: [...state.investments, newInvestment],
      }));
    } catch (error) {
      set({ error: "Failed to add investment" });
    } finally {
      set({ loading: false });
    }
  },

  loadMore: () => {
    if (get().hasMore) {
      get().fetchInvestments(get().pageNo + 1);
    }
  },
}));
