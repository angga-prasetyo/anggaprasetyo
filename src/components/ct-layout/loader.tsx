import { Skeleton } from '../ui/skeleton';

export const CTLayoutDashboardLoader: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Skeleton />
      <Skeleton />
    </div>
  );
};
