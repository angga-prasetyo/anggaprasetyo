import { useMemo } from 'react';

import { CTLayout } from '@/components/ct-layout';
import { UseLoadingStore } from '@/stores/loading/store';

import { AudioSection } from './components/AudioSection';
import { LangSection } from './components/LangSection';
import { LoadingSection } from './components/LoadingSection';
import { pageMeta, SECTIONS } from './constant';

const LoadingPage: React.FC = () => {
  const { currentSection } = UseLoadingStore((state) => state);

  const sections = useMemo(() => {
    switch (currentSection) {
      case SECTIONS.LANG:
        return <LangSection />;
      case SECTIONS.AUDIO:
        return <AudioSection />;
      case SECTIONS.LOADING:
        return <LoadingSection />;
      case SECTIONS.BEGIN:
        return <h1>Begin</h1>;
      default:
        return <></>;
    }
  }, [currentSection]);

  return (
    <CTLayout meta={pageMeta} titlePage="LoadingPage">
      {sections}
    </CTLayout>
  );
};

export default LoadingPage;
