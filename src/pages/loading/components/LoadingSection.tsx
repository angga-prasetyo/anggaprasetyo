import { useCallback, useEffect, useState } from 'react';

import PersonIcon from '@/assets/images/ap-square_person.svg';
import { CTRetroVortex } from '@/components/ct-retro-vortex/component';
import { AnimatedCircularProgressBar } from '@/components/ui/animated-circular-progress-bar';
import { AUDIOS } from '@/constants/audios';
import { preloadHome } from '@/pages/home';
import { preloadProjects } from '@/pages/projects';
import { useComponentStore } from '@/stores/component/store';
import { useLoadingStore } from '@/stores/loading/store';
import {
  preloadAudio,
  preloadGLTF,
  preloadImage,
  preloadPDF,
} from '@/utils/other';

import { SECTIONS } from '../constant';

export const LoadingSection: React.FC = () => {
  const { changeBgm, enableAudio } = useComponentStore((state) => state);
  const { changeSection } = useLoadingStore((state) => state);

  const [progress, setProgress] = useState(0);

  const begin = useCallback(() => {
    changeBgm(AUDIOS.BEGIN);
    changeSection(SECTIONS.BEGIN);
  }, [changeBgm, changeSection]);

  useEffect(() => {
    async function preloadAll() {
      const tasks = [
        // JS chunks
        preloadHome(),
        preloadProjects(),

        // Fonts
        document.fonts.ready,

        // 3D Model
        preloadGLTF('/ap-char_v1.glb'),

        // Images
        preloadImage(PersonIcon),

        // Documents
        preloadPDF('/ap-cv.pdf'),

        // Audio
        ...(enableAudio
          ? [preloadAudio(AUDIOS.BEGIN), preloadAudio(AUDIOS.MAIN)]
          : []),
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
      <CTRetroVortex ringsOnly skipRingIdx={[0, 1, 2]} />
      <AnimatedCircularProgressBar className="absolute" value={progress} />
    </div>
  );
};
