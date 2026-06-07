import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components/ct-error-boundary/component';
import { CTLayoutDashboardLoader } from '@/components/ct-layout/loader';

const LoadingPage = lazy(() => import('./page'));

export const Loading = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutDashboardLoader />}>
        <LoadingPage />
      </Suspense>
    </CTErrorBoundary>
  );
};
