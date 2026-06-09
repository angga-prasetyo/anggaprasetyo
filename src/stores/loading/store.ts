import { create } from 'zustand';

import { SECTIONS } from '@/pages/loading/constant';

import { UseLoadingStoreProps, UseLoadingStoreStateProps } from './type';

const initialState: UseLoadingStoreStateProps = {
  currentSection: SECTIONS.LANG,
};

export const useLoadingStore = create<UseLoadingStoreProps>((set) => ({
  ...initialState,
  changeSection(currentSection) {
    set((state) => ({ ...state, currentSection }));
  },
  resetState() {
    set(() => initialState);
  },
}));
