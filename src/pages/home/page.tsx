import { useEffect } from 'react';

import { CTLayout } from '@/components/ct-layout';
import { Skeleton } from '@/components/ui/skeleton';
import { AUDIOS } from '@/constants/audios';
import { useComponentStore } from '@/stores/component/store';

import { pageMeta } from './constant';

const HomePage: React.FC = () => {
  const { changeBgm } = useComponentStore((state) => state);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => changeBgm(AUDIOS.MAIN), []);
  return (
    <CTLayout meta={pageMeta} titlePage="Homepage">
      <div className="flex items-center gap-4">
        <h1>Home</h1>
        <Skeleton className="h-4 w-62.5" />
      </div>
    </CTLayout>
  );
};

export default HomePage;
