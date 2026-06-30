import { useMemo } from 'react';

import { CTLayout } from '@/components/ct-layout';
import { useLoadingStore } from '@/stores/loading/store';

import { AudioSection } from './components/AudioSection';
import { BeginSection } from './components/BeginSection';
import { ConfigurationSection } from './components/configuration-section/component';
import { LoadingSection } from './components/LoadingSection';
import { pageMeta, SECTIONS } from './constant';

const LoadingPage: React.FC = () => {
  const { currentSection } = useLoadingStore((state) => state);

  const sections = useMemo(() => {
    switch (currentSection) {
      case SECTIONS.LANG:
        return <ConfigurationSection />;
      case SECTIONS.AUDIO:
        return <AudioSection />;
      case SECTIONS.LOADING:
        return <LoadingSection />;
      case SECTIONS.BEGIN:
        return <BeginSection />;
      default:
        return <></>;
    }
  }, [currentSection]);

  return <CTLayout meta={pageMeta}>{sections}</CTLayout>;
};

export default LoadingPage;
