import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components/ct-error-boundary/component';
import { CTLayoutLoader } from '@/components/ct-layout/loader';

const ProjectsPage = lazy(() => import('./page'));

export const Projects = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutLoader />}>
        <ProjectsPage />
      </Suspense>
    </CTErrorBoundary>
  );
};

export const preloadProjects = () => import('./page');
