import { create } from 'zustand';

import { UseComponentStoreProps, UseComponentStoreStateProps } from './type';

const initialState: UseComponentStoreStateProps = {
  enableAudio: true,
  language: 'en',
  finishPreload: false,
};

export const useComponentStore = create<UseComponentStoreProps>((set) => ({
  ...initialState,
  resetState() {
    set(() => initialState);
  },
}));
