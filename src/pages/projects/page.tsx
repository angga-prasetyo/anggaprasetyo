import { CTLayout } from '@/components/ct-layout';
import { WORDS, words } from '@/constants/languages';
import { useComponentStore } from '@/stores/component/store';

import { List } from './components/List';
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
      <div className="mt-15 mx-2 h-full md:mx-8">
        <Tab />
        <div className="mb-2 w-full bg-white h-1 flex justify-end">
          <div className="w-1 h-1 bg-red-400" />
        </div>
        <List />
      </div>
    </CTLayout>
  );
};

export default ProjectsPage;
