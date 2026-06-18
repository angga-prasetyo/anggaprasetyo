import { create } from 'zustand';

import { UseHomeStoreProps, UseHomeStoreStateProps } from './type';

const initialState: UseHomeStoreStateProps = {
  chatTopic: null,
};

export const useHomeStore = create<UseHomeStoreProps>((set) => ({
  ...initialState,
  changeTopic(chatTopic) {
    set(() => ({ ...initialState, chatTopic }));
  },
  resetState() {
    set(() => initialState);
  },
}));
