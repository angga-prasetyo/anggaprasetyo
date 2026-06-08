import { useCallback, useMemo } from 'react';

import { useComponentStore } from '@/stores/component/store';

// <audio
//   id="background_music"
//   src={BackgroundMusic}
//   controls
//   loop
//   style={{ display: 'none' }}
// />
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

  const playBgm = useCallback(() => {
    if (enableAudio) {
      const bgmEl = document.getElementById('bgm') as HTMLAudioElement;
      bgmEl.play();
    }
  }, [enableAudio]);

  const stopBgm = useCallback(() => {
    if (enableAudio) {
      const bgmEl = document.getElementById('bgm') as HTMLAudioElement;
      bgmEl.pause();
    }
  }, [enableAudio]);

  return { bgmHTML, playBgm, stopBgm };
}
