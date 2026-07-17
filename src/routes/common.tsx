import type { RouteObject } from 'react-router-dom';

import { CTRouteGuard } from '@/components/ct-route-guard/component';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { Error404 } from '@/pages/error/404';
import { Home } from '@/pages/home';
import { Loading } from '@/pages/loading';
import { Projects } from '@/pages/projects';

export const commonRoute: RouteObject[] = [
  {
    path: UIEndpointsCommon.LOADING,
    element: <CTRouteGuard />,
    children: [
      {
        index: true,
        element: <Loading />,
      },
    ],
  },
  {
    element: <CTRouteGuard isPrivate />,
    children: [
      { path: UIEndpointsCommon.HOME, element: <Home /> },
      { path: UIEndpointsCommon.PROJECTS, element: <Projects /> },
    ],
  },
  { path: '*', element: <Error404 /> },
];
