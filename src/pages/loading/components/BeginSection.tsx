import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { CTRetroVortex } from '@/components/ct-retro-vortex/component';
import { AUDIOS } from '@/constants/audios';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { useComponentStore } from '@/stores/component/store';

const maxAnimationWithBgmDuration = 11700;
const maxAnimationWithoutBgmDuration = 5000;
const particlesIncrementIntervals = 3500;

export const BeginSection: React.FC = () => {
  const navigate = useNavigate();
  const changeBgm = useComponentStore((state) => state.changeBgm);
  const changeFinishPreload = useComponentStore(
    (state) => state.changeFinishPreload,
  );
  const enableAudio = useComponentStore((state) => state.enableAudio);

  const [particles, setParticles] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((c) => c + 55);
    }, particlesIncrementIntervals);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeFinishPreload(true);
      changeBgm(AUDIOS.MAIN);
      navigate(UIEndpointsCommon.HOME);
    }, enableAudio ? maxAnimationWithBgmDuration : maxAnimationWithoutBgmDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [changeBgm, changeFinishPreload, navigate, enableAudio]);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <CTRetroVortex particleCount={particles} />
    </div>
  );
};
