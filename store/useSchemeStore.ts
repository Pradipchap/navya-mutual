import { SCHEMES } from "@/constants/endpoints";
import { IScheme } from "@/interfaces/dataInterfaces";
import { create } from "zustand";

export interface IApiResponse<T> {
  first: number;
  prev: null | number;
  next: null | number;
  last: number;
  pages: number;
  items: number;
  data: T[];
}

export type ISchemeResponse = IApiResponse<IScheme>;

type Store = {
  schemes: IScheme[];
  loading: boolean;
  error: string | null;
  pageNo: number;
  hasMore: boolean;
  totalItems: number; 
  totalPages: number; 
  fetchSchemes: (page?: number) => Promise<void>;
  loadMore: () => void;
};

export const useSchemeStore = create<Store>((set, get) => ({
  schemes: [],
  loading: false,
  error: null,
  pageNo: 1,
  hasMore: true,
  totalItems: 0,
  totalPages: 0,

  fetchSchemes: async (page = 1) => {
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${SCHEMES}?_page=${page}&_per_page=5`);
      if (!response.ok) {
        throw new Error("Failed to fetch schemes");
      }
      const result: ISchemeResponse = await response.json();

      //update the hasMore if result.next is not null
      set({
        totalItems: result.items,
        totalPages: result.pages,
        hasMore: result.next !== null,
      });

      set((state) => ({
        schemes: page === 1 ? result.data : [...state.schemes, ...result.data],
        pageNo: page,
      }));
    } catch (error) {
      set({ error: "Failed to fetch schemes" });
    } finally {
      set({ loading: false });
    }
  },

  loadMore: () => {
    const { hasMore, pageNo } = get();
    if (hasMore) {
      get().fetchSchemes(pageNo + 1);
    }
  },
}));