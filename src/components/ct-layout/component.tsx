import { useMemo } from 'react';

import { useLocation } from 'react-router-dom';

import { CTSeoMeta } from '@/components/ct-seo-meta/component';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { cn } from '@/lib/utils';

import { Header } from './components/Header';
import { CTLayoutProps } from './type';

const CTLayoutComponent: React.FC<CTLayoutProps> = ({
  meta,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  titlePage,
  children,
  className,
  ...rest
}) => {
  const { pathname } = useLocation();

  const isLoadingPage = useMemo(
    () => pathname === UIEndpointsCommon.LOADING,
    [pathname],
  );

  const background = useMemo(
    () => (isLoadingPage ? 'var(--vc-background)' : 'var(--home-background)'),
    [isLoadingPage],
  );

  return (
    <div
      id="ct_layout"
      className={cn('h-screen', className)}
      style={{ background }}
      {...rest}>
      <CTSeoMeta meta={meta} />
      {!isLoadingPage && <Header />}
      {children}
    </div>
  );
};

export default CTLayoutComponent;
