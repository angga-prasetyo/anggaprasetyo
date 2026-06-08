import { useEffect } from 'react';

import { useAudio } from '@/hooks/useAudio';

export const LoadingSection: React.FC = () => {
  const { playBgm } = useAudio();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => playBgm(), []);

  return <h1>Loading</h1>;
};
