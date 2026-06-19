import { useEffect, useRef } from 'react';

import { useComponentStore } from '@/stores/component/store';

export function useAudio() {
  const { bgm, enableAudio } = useComponentStore((state) => state);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create element once, never recreate
  useEffect(() => {
    const el = new Audio();
    el.loop = true;
    el.style.display = 'none';
    audioRef.current = el;

    return () => {
      el.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !enableAudio || !bgm) return;

    el.src = bgm;
    el.load();
    el.play().catch((_err) => {
      // Autoplay policy block — silently ignore
    });
  }, [bgm, enableAudio]);
}
