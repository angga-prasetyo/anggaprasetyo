import { create } from 'zustand';

import { TOPIC } from '@/pages/projects/constant';

import { UseProjectsStoreProps, UseProjectsStoreStateProps } from './type';

const initialState: UseProjectsStoreStateProps = {
  topic: TOPIC.KODA,
};

export const useProjectsStore = create<UseProjectsStoreProps>((set) => ({
  ...initialState,
  changeTopic(topic) {
    set((state) => ({ ...state, topic }));
  },
  resetState() {
    set(() => initialState);
  },
}));
