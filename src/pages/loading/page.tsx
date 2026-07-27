import { useMemo } from 'react';

import { useLoadingStore } from '@/stores/loading/store';

import { BeginSection } from './components/BeginSection';
import { ConfigurationSection } from './components/configuration-section/component';
import { LoadingSection } from './components/LoadingSection';
import { SECTIONS } from './constant';

const LoadingPage: React.FC = () => {
  const currentSection = useLoadingStore((state) => state.currentSection);

  const sections = useMemo(() => {
    switch (currentSection) {
      case SECTIONS.LANG:
        return <ConfigurationSection />;
      case SECTIONS.LOADING:
        return <LoadingSection />;
      case SECTIONS.BEGIN:
        return <BeginSection />;
      default:
        return <></>;
    }
  }, [currentSection]);

  return sections;
};

export default LoadingPage;
