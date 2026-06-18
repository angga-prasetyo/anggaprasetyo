import { CONTACT_KEYS } from '@/pages/home/constant';
import { EnumValues } from '@/types/common';

export interface UseHomeStoreStateProps {
  chatTopic: EnumValues<typeof CONTACT_KEYS> | null
}

export interface UseHomeStoreFunctionProps {
  changeTopic: (chatTopic: UseHomeStoreStateProps['chatTopic']) => void;
  resetState: () => void;
}

export type UseHomeStoreProps = UseHomeStoreStateProps &
  UseHomeStoreFunctionProps;
