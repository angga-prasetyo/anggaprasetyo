import { useCallback, useEffect, useState } from 'react';

import PersonIcon from '@/assets/images/ap-square_person.svg';
import GHIcon from '@/assets/images/github.svg';
import INIcon from '@/assets/images/linkedin.svg';
import MailIcon from '@/assets/images/mail.svg';
import WAIcon from '@/assets/images/wa.svg';
import { CTRetroCircularLoader } from '@/components/ct-retro-circular-loader/components';
import { CTRetroVortex } from '@/components/ct-retro-vortex/component';
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
  const changeBgm = useComponentStore((state) => state.changeBgm);
  const enableAudio = useComponentStore((state) => state.enableAudio);
  const changeSection = useLoadingStore((state) => state.changeSection);

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
        preloadImage(GHIcon),
        preloadImage(WAIcon),
        preloadImage(MailIcon),
        preloadImage(INIcon),

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
      <div className="absolute">
        <CTRetroCircularLoader />
        <p className="text-center text-xl text-cyan-500">{`${progress}%`}</p>
      </div>
    </div>
  );
};
