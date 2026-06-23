import { useLocation } from 'react-router-dom';

import { CTSeoMeta } from '@/components/ct-seo-meta/component';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { cn } from '@/lib/utils';

import { Header } from './components/Header';
import { CTLayoutProps } from './type';

const CTLayoutComponent: React.FC<CTLayoutProps> = ({
  meta,
  children,
  className,
  ...rest
}) => {
  const { pathname } = useLocation();

  const isLoadingPage = pathname === UIEndpointsCommon.LOADING;

  const background = isLoadingPage ? 'var(--vc-background)' : 'var(--home-background)';

  return (
    <div
      id="ct_layout"
      className={cn('h-screen relative', className)}
      style={{ background }}
      {...rest}>
      <CTSeoMeta meta={meta} />
      {!isLoadingPage && <Header />}
      {children}
    </div>
  );
};

export default CTLayoutComponent;
