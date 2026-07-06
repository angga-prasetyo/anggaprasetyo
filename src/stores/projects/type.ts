import { TOPIC } from '@/pages/projects/constant';
import { EnumValues } from '@/types/common';

export interface UseProjectsStoreStateProps {
  topic: EnumValues<typeof TOPIC>;
}

export interface UseProjectsStoreFunctionProps {
  changeTopic: (topic: UseProjectsStoreStateProps['topic']) => void;
  resetState: () => void;
}

export type UseProjectsStoreProps = UseProjectsStoreStateProps &
  UseProjectsStoreFunctionProps;
