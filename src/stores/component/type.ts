export interface UseComponentStoreStateProps {
  enableAudio: boolean;
  finishPreload: boolean;
  language: 'en' | 'id';
}

export interface UseComponentStoreFunctionProps {
  resetState: () => void;
}

export type UseComponentStoreProps = UseComponentStoreStateProps &
  UseComponentStoreFunctionProps;
