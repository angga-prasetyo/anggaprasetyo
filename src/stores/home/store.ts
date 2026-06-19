import { create } from 'zustand';

import { UseHomeStoreProps, UseHomeStoreStateProps } from './type';

const initialState: UseHomeStoreStateProps = {
  chatTopic: null,
  gltf: null,
};

export const useHomeStore = create<UseHomeStoreProps>((set) => ({
  ...initialState,
  changeTopic(chatTopic) {
    set((state) => ({ ...state, chatTopic }));
  },
  changeGltf(gltf) {
    set((state) => ({ ...state, gltf }));
  },
  resetState() {
    set(() => initialState);
  },
}));
