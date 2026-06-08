import { useEffect, useMemo } from 'react';

import { useComponentStore } from '@/stores/component/store';

export function useAudio() {
  const { bgm, enableAudio } = useComponentStore((state) => state);

  const bgmHTML = useMemo(() => {
    if (!enableAudio) {
      return <></>;
    }

    return (
      <audio id="bgm" src={bgm} controls loop style={{ display: 'none' }} />
    );
  }, [bgm, enableAudio]);

  useEffect(() => {
    if (!enableAudio) return;
    const bgmEl = document.getElementById('bgm') as HTMLAudioElement | null;
    if (!bgmEl) return;

    bgmEl.load();
    bgmEl.play();
  }, [bgm, enableAudio]);

  return { bgmHTML };
}
