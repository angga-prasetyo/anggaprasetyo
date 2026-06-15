import { useEffect } from 'react';

import { CTLayout } from '@/components/ct-layout';
import { AUDIOS } from '@/constants/audios';
import { useComponentStore } from '@/stores/component/store';

import { pageMeta } from './constant';

const HomePage: React.FC = () => {
  const { changeBgm } = useComponentStore((state) => state);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => changeBgm(AUDIOS.MAIN), []);
  return (
    <CTLayout meta={pageMeta} titlePage="Homepage">
      {/* Overlay blinding fade out */}
      <div
        className="fixed -inset-50 pointer-events-none animate-fadeOut"
        style={
          {
            background: 'var(--background-blinding)',
          } as React.CSSProperties
        }
      />

      {/* Home Content */}
      <div className="flex items-center gap-4">adasdas</div>
    </CTLayout>
  );
};

export default HomePage;
