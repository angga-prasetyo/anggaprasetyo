import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { AUDIOS } from '@/constants/audios';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { useComponentStore } from '@/stores/component/store';

export const BeginSection: React.FC = () => {
  const navigate = useNavigate();
  const { changeBgm, changeFinishPreload } = useComponentStore(
    (state) => state,
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => changeBgm(AUDIOS.BEGIN), []);

  setTimeout(() => {
    changeFinishPreload(true);
    navigate(UIEndpointsCommon.HOME);
  }, 10700);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <h1>Starting!!!</h1>
    </div>
  );
};
