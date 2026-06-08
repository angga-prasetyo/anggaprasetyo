import { create } from 'zustand';

import { LANGUAGES } from '@/constants/languages';

import { UseComponentStoreProps, UseComponentStoreStateProps } from './type';

const initialState: UseComponentStoreStateProps = {
  enableAudio: false,
  language: LANGUAGES.ENG,
  finishPreload: false,
};

export const useComponentStore = create<UseComponentStoreProps>((set) => ({
  ...initialState,
  changeLanguage(language) {
    set((state) => ({ ...state, language }));
  },
  changeEnableAudio(enableAudio) {
    set((state) => ({ ...state, enableAudio }));
  },
  changeBgm(bgm) {
    set((state) => ({ ...state, bgm }));
  },
  resetState() {
    set(() => initialState);
  },
}));
