import { create } from 'zustand';

export interface IScheme {
  id: number;
  name: string;
  pricePerUnit: number;
  minimumInvestment: number;
}

interface SchemeStore {
  schemes: IScheme[];
  addScheme: (scheme: IScheme) => void;
  updateScheme: (id: number, updatedScheme: Partial<IScheme>) => void;
  removeScheme: (id: number) => void;
  getSchemeById: (id: number) => IScheme | undefined;
}

const useSchemeStore = create<SchemeStore>((set, get) => ({
  schemes: [],
  addScheme: (scheme) => set((state) => ({ schemes: [...state.schemes, scheme] })),
  updateScheme: (id, updatedScheme) =>
    set((state) => ({
      schemes: state.schemes.map((scheme) =>
        scheme.id === id ? { ...scheme, ...updatedScheme } : scheme
      ),
    })),

  removeScheme: (id) =>
    set((state) => ({
      schemes: state.schemes.filter((scheme) => scheme.id !== id),
    })),

  getSchemeById: (id) => {
    const { schemes } = get();
    return schemes.find((scheme) => scheme.id === id);
  },
}));

export default useSchemeStore;

export const useSchemeList=useSchemeStore(state=>state.schemes)
export const useAddScheme=useSchemeStore(state=>state.addScheme)
export const useDeleteScheme=useSchemeStore(state=>state.addScheme)
export const useUpdateScheme=useSchemeStore(state=>state.updateScheme)