import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components/ct-error-boundary/component';

import { CTLayoutDashboardLoader } from './loader';
import type { CTLayoutProps } from './type';

const CTLayoutDashboardComponent = lazy(() => import('./component'));

export const CTLayoutDashboard: React.FC<CTLayoutProps> = (props) => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutDashboardLoader />}>
        <CTLayoutDashboardComponent {...props} />
      </Suspense>
    </CTErrorBoundary>
  );
};
