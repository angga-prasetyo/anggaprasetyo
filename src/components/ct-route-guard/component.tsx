import { Navigate, Outlet } from 'react-router-dom';

import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { useComponentStore } from '@/stores/component/store';

import { CTLayout } from '../ct-layout';

import type { CTRouteGuardProps } from './type';

export const CTRouteGuard: React.FC<CTRouteGuardProps> = ({
  isPrivate = false,
}) => {
  const isAuthenticated = useComponentStore((state) => state.finishPreload);

  if (isPrivate)
    return isAuthenticated ? (
      <CTLayout>
        <Outlet />
      </CTLayout>
    ) : (
      <Navigate to={UIEndpointsCommon.LOADING} replace />
    );

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={UIEndpointsCommon.HOME} replace />
  );
};
