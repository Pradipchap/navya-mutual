import { SCHEMES } from "@/constants/endpoints";
import { IScheme } from "@/interfaces/dataInterfaces";
import {create} from "zustand";



type Store = {
  schemes: IScheme[];
  loading: boolean;
  error: string | null;
  pageNo: number;
  hasMore: boolean;
  fetchSchemes: (page?: number) => Promise<void>;
  loadMore: () => void;
};

export const useSchemeStore = create<Store>((set, get) => ({
  schemes: [],
  loading: false,
  error: null,
  pageNo: 1,
  hasMore: true, 

  fetchSchemes: async (page = 1) => {
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
      const  response= await fetch(`${SCHEMES}?_page=${page}&_limit=5`);
      if(!response.ok){
        throw ""
      }
      const data:IScheme[]=await response.json()
      // If no new data, set hasMore to false
      if (data.length === 0) {
        set({ hasMore: false });
        return;
      }
      set((state) => ({
        schemes: page === 1 ? data : [...state.schemes, ...data],
        pageNo: page,
        hasMore: true,
      }));
    } catch (error) {
      set({ error: "Failed to fetch schemes" });
    } finally {
      set({ loading: false });
    }
  },

  loadMore: () => {
    if (get().hasMore) {
      get().fetchSchemes(get().pageNo + 1);
    }
  },
}));