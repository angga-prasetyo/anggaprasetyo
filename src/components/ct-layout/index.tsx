import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components/ct-error-boundary/component';

import { CTLayoutLoader } from './loader';
import type { CTLayoutProps } from './type';

const CTLayoutComponent = lazy(() => import('./component'));

export const CTLayout: React.FC<CTLayoutProps> = (props) => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutLoader />}>
        <CTLayoutComponent {...props} />
      </Suspense>
    </CTErrorBoundary>
  );
};
