import { CTLayout } from '@/components/ct-layout';
import { WORDS, words } from '@/constants/languages';
import { useComponentStore } from '@/stores/component/store';

import { pageMeta } from './constant';

const ProjectsPage: React.FC = () => {
  const { language } = useComponentStore((state) => state);

  return (
    <CTLayout
      meta={pageMeta}
      className="overflow-hidden"
      title={words[WORDS.WORKS][language]}
      showNav>
      <></>
    </CTLayout>
  );
};

export default ProjectsPage;
