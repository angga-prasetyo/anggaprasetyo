import { CTLayoutDashboard } from '@/components/ct-layout';
import { Skeleton } from '@/components/ui/skeleton';

import { pageMeta } from './constant';

const HomePage: React.FC = () => {
  return (
    <CTLayoutDashboard meta={pageMeta} titlePage="Homepage">
      <div className="flex items-center gap-4">
        <h1>Home</h1>
        <Skeleton className="h-4 w-62.5" />
      </div>
    </CTLayoutDashboard>
  );
};

export default HomePage;
