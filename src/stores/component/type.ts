import { LANGUAGES } from '@/constants/languages';
import { EnumValues } from '@/types/common';

export interface UseComponentStoreStateProps {
  enableAudio: boolean;
  finishPreload: boolean;
  language: EnumValues<typeof LANGUAGES>;
}

export interface UseComponentStoreFunctionProps {
  changeLanguage: (value: EnumValues<typeof LANGUAGES>) => void;
  resetState: () => void;
}

export type UseComponentStoreProps = UseComponentStoreStateProps &
  UseComponentStoreFunctionProps;
