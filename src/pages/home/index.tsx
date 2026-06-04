import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components/ct-error-boundary/component';
import { CTLayoutDashboardLoader } from '@/components/ct-layout/loader';

const HomePage = lazy(() => import('./page'));

export const Home = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutDashboardLoader />}>
        <HomePage />
      </Suspense>
    </CTErrorBoundary>
  );
};
