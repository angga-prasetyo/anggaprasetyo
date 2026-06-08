import { create } from 'zustand';

import { LANGUAGES } from '@/constants/languages';

import { UseComponentStoreProps, UseComponentStoreStateProps } from './type';

const initialState: UseComponentStoreStateProps = {
  enableAudio: true,
  language: LANGUAGES.ENG,
  finishPreload: false,
};

export const useComponentStore = create<UseComponentStoreProps>((set) => ({
  ...initialState,
  changeLanguage(language) {
    set((state) => ({ ...state, language }));
  },
  resetState() {
    set(() => initialState);
  },
}));
