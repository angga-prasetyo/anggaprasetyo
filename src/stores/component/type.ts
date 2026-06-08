import { AUDIOS } from '@/constants/audios';
import { LANGUAGES } from '@/constants/languages';
import { EnumValues } from '@/types/common';

export interface UseComponentStoreStateProps {
  bgm?: EnumValues<typeof AUDIOS>;
  enableAudio: boolean;
  finishPreload: boolean;
  language: EnumValues<typeof LANGUAGES>;
}

export interface UseComponentStoreFunctionProps {
  changeLanguage: (value: EnumValues<typeof LANGUAGES>) => void;
  changeEnableAudio: (value: boolean) => void;
  changeBgm: (value: EnumValues<typeof AUDIOS>) => void;
  resetState: () => void;
}

export type UseComponentStoreProps = UseComponentStoreStateProps &
  UseComponentStoreFunctionProps;
