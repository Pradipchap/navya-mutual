import { INVESTMENTS } from "@/constants/endpoints";
import { IInvestmentResponse, IPurchaseDetails } from "@/interfaces/dataInterfaces";
import { create } from "zustand";


type InvestmentStore = {
  investments: IPurchaseDetails[];
  loading: boolean;
  error: string | null;
  pageNo: number;
  hasMore: boolean;
  totalItems: number;
  totalPages: number;

  fetchInvestments: (page?: number) => Promise<void>;
  loadMore: () => void;
  updateInvestments:(newScheme:IPurchaseDetails)=>void
};

export const useInvestmentStore = create<InvestmentStore>((set, get) => ({
  investments: [],
  loading: false,
  error: null,
  pageNo: 1,
  hasMore: true,
  totalItems: 0,
  totalPages: 0,

  fetchInvestments: async (page = 1) => {
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${INVESTMENTS}?_page=${page}&_per_page=5`);
      if (!response.ok) {
        throw new Error("Failed to fetch investments");
      }
      const result: IInvestmentResponse = await response.json();

      set({
        totalItems: result.items,
        totalPages: result.pages,
        hasMore: result.next !== null,
      });


      //conditionally update investments
      set((state) => ({
        investments: page === 1 ? result.data : [...state.investments, ...result.data],
        pageNo: page,
      }));
    } catch (error) {
      set({ error: "Failed to fetch investments" });
    } finally {
      set({ loading: false });
    }
  },


  //function to load more investments : automatic pagination
  loadMore: () => {
    const { hasMore, pageNo } = get();
    if (hasMore) {
      get().fetchInvestments(pageNo + 1);
    }
  },
  updateInvestments:(newInvestment:IPurchaseDetails)=>{
    set({investments:[newInvestment,...get().investments]})
  }
}));