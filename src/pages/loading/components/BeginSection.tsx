import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { CTRetroVortex } from '@/components/ct-retro-vortex/component';
import { AUDIOS } from '@/constants/audios';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { useComponentStore } from '@/stores/component/store';

const maxAnimationDuration = 10700;
const particlesIncrementIntervals = 3000;

export const BeginSection: React.FC = () => {
  const navigate = useNavigate();
  const { changeBgm, changeFinishPreload } = useComponentStore(
    (state) => state,
  );

  const [particles, setParticles] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => changeBgm(AUDIOS.BEGIN), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((c) => c + 55);
    }, particlesIncrementIntervals);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeFinishPreload(true);
      changeBgm(AUDIOS.LOADING);
      navigate(UIEndpointsCommon.HOME);
    }, maxAnimationDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [changeBgm, changeFinishPreload, navigate]);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <CTRetroVortex particleCount={particles} />
    </div>
  );
};
