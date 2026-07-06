import { CTLayout } from '@/components/ct-layout';
import { WORDS, words } from '@/constants/languages';
import { useComponentStore } from '@/stores/component/store';

import { Tab } from './components/Tab';
import { pageMeta } from './constant';

const ProjectsPage: React.FC = () => {
  const { language } = useComponentStore((state) => state);

  return (
    <CTLayout
      meta={pageMeta}
      className="overflow-hidden"
      title={words[WORDS.WORKS][language]}
      showNav>
      <div className="mt-15 mx-2">
        <Tab />
      </div>
    </CTLayout>
  );
};

export default ProjectsPage;
