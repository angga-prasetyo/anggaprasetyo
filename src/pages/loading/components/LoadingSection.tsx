import { useCallback, useEffect, useState } from 'react';

import { useGLTF } from '@react-three/drei';

import { CTRetroVortex } from '@/components/ct-retro-vortex/component';
import { AnimatedCircularProgressBar } from '@/components/ui/animated-circular-progress-bar';
import { AUDIOS } from '@/constants/audios';
import { preloadHome } from '@/pages/home';
import { useComponentStore } from '@/stores/component/store';
import { useLoadingStore } from '@/stores/loading/store';
import { preloadAudio } from '@/utils/other';

import { SECTIONS } from '../constant';

export const LoadingSection: React.FC = () => {
  const { changeBgm, enableAudio } = useComponentStore((state) => state);
  const { changeSection } = useLoadingStore((state) => state);

  const [progress, setProgress] = useState(0);

  const begin = useCallback(() => {
    changeSection(SECTIONS.BEGIN);
  }, [changeSection]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => changeBgm(AUDIOS.LOADING), []);

  useEffect(() => {
    async function preloadAll() {
      const tasks = [
        // JS chunks
        preloadHome(),

        // Fonts
        document.fonts.ready,

        // Audio
        ...(enableAudio
          ? [preloadAudio(AUDIOS.BEGIN), preloadAudio(AUDIOS.MAIN)]
          : []),

        // 3D Model
        useGLTF.preload('/ap-char_v1.glb'),
      ];

      // Progress Calculation
      let done = 0;
      await Promise.all(
        tasks.map((t) =>
          Promise.resolve(t).then(() => {
            done++;
            setProgress(Math.round((done / tasks.length) * 100));
          }),
        ),
      );

      begin();
    }

    preloadAll();
  }, [enableAudio, begin]);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <CTRetroVortex ringsOnly skipRingIdx={[0, 1, 2, 3]} />
      <AnimatedCircularProgressBar className="absolute" value={progress} />
    </div>
  );
};
