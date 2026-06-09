import { useCallback, useEffect } from 'react';

import { CTPulsatingButton } from '@/components/ct-pulsating-button/component';
import { AUDIOS } from '@/constants/audios';
import { useComponentStore } from '@/stores/component/store';
import { useLoadingStore } from '@/stores/loading/store';

import { SECTIONS } from '../constant';

export const LoadingSection: React.FC = () => {
  const { changeBgm } = useComponentStore((state) => state);
  const { changeSection } = useLoadingStore((state) => state);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => changeBgm(AUDIOS.LOADING), []);

  const begin = useCallback(() => {
    changeSection(SECTIONS.BEGIN);
  }, [changeSection]);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <CTPulsatingButton onClick={begin}>Begin</CTPulsatingButton>
    </div>
  );
};
