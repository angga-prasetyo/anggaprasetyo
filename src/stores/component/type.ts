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
  changeLanguage: (language: UseComponentStoreStateProps['language']) => void;
  changeEnableAudio: (
    enableAudio: UseComponentStoreStateProps['enableAudio'],
  ) => void;
  changeBgm: (bgm: UseComponentStoreStateProps['bgm']) => void;
  changeFinishPreload: (
    finishPreload: UseComponentStoreStateProps['finishPreload'],
  ) => void;
  resetState: () => void;
}

export type UseComponentStoreProps = UseComponentStoreStateProps &
  UseComponentStoreFunctionProps;
