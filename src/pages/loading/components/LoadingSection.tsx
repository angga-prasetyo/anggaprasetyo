import { useCallback, useEffect } from 'react';

import { AUDIOS } from '@/constants/audios';
import { useComponentStore } from '@/stores/component/store';

export const LoadingSection: React.FC = () => {
  const { changeBgm } = useComponentStore((state) => state);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => changeBgm(AUDIOS.LOADING), []);

  const switchBGM = useCallback(() => {
    changeBgm(AUDIOS.BEGIN);
  }, [changeBgm]);

  return <button onClick={switchBGM}>Switch BGM</button>;
};
