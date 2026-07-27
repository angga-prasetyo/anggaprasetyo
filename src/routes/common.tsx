import { Outlet, type RouteObject } from 'react-router-dom';

import { CTLayout } from '@/components/ct-layout';
import { CTRouteGuard } from '@/components/ct-route-guard/component';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { Error404 } from '@/pages/error/404';
import { Home } from '@/pages/home';
import { Loading } from '@/pages/loading';
import { Projects } from '@/pages/projects';

export const commonRoute: RouteObject[] = [
  {
    element: (
      <CTLayout>
        <Outlet />
      </CTLayout>
    ),
    children: [
      {
        element: <CTRouteGuard />,
        children: [{ path: UIEndpointsCommon.LOADING, element: <Loading /> }],
      },
      {
        element: <CTRouteGuard isPrivate />,
        children: [
          { path: UIEndpointsCommon.HOME, element: <Home /> },
          { path: UIEndpointsCommon.PROJECTS, element: <Projects /> },
        ],
      },
      { path: '*', element: <Error404 /> },
    ],
  },
];
