import { create } from 'zustand';

import { UseComponentStoreProps } from './type';

const initialState: Partial<UseComponentStoreProps> = {};

export const useComponentStore = create<UseComponentStoreProps>((set) => ({
  resetState() {
    set(() => initialState);
  },
}));
