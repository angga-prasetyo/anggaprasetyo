import { CTBeamBorder } from '@/components/ct-beam-border/component';
import { CTLayout } from '@/components/ct-layout';

import { pageMeta } from './constant';

const LoadingPage: React.FC = () => {
  return (
    <CTLayout meta={pageMeta} titlePage="LoadingPage">
      <div className="flex justify-center items-center h-full">
        <div className="relative w-[80vw] h-[20vh] rounded-4xl border-2">
          <CTBeamBorder borderWidth={4} />
        </div>
      </div>
    </CTLayout>
  );
};

export default LoadingPage;
