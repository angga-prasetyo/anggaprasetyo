import { SECTIONS } from '@/pages/loading/constant';
import { EnumValues } from '@/types/common';

export interface UseLoadingStoreStateProps {
  currentSection: EnumValues<typeof SECTIONS>;
}

export interface UseLoadingStoreFunctionProps {
  changeSection: (currentSection: UseLoadingStoreStateProps['currentSection']) => void;
  resetState: () => void;
}

export type UseLoadingStoreProps = UseLoadingStoreStateProps &
  UseLoadingStoreFunctionProps;
