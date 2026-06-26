import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { WORDS } from '@/constants/languages';
import { CONTACT_KEYS } from '@/constants/others';
import { EnumValues } from '@/types/common';

export interface UseHomeStoreStateProps {
  chatTopic: EnumValues<typeof CONTACT_KEYS> | WORDS.CHAT__NO_PAGES | null;
  gltf: GLTF | null;
}

export interface UseHomeStoreFunctionProps {
  changeTopic: (chatTopic: UseHomeStoreStateProps['chatTopic']) => void;
  changeGltf: (gltf: UseHomeStoreStateProps['gltf']) => void;
  resetState: () => void;
}

export type UseHomeStoreProps = UseHomeStoreStateProps &
  UseHomeStoreFunctionProps;
