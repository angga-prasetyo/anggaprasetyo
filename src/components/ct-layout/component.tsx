import { useLocation } from 'react-router-dom';

import { CTSeoMeta } from '@/components/ct-seo-meta/component';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { cn } from '@/lib/utils';
import { useComponentStore } from '@/stores/component/store';
import { EnumValues } from '@/types/common';

import { Character } from './components/Character';
import { Header } from './components/Header';
import NavMenu from './components/NavMenu';
import { pageLayouts } from './constant';
import { CTLayoutProps } from './type';

const CTLayoutComponent: React.FC<CTLayoutProps> = ({
  children,
  className,
  showNav = false,
  showChar = false,
  title,
  ...rest
}) => {
  const { pathname } = useLocation() as {
    pathname: EnumValues<typeof UIEndpointsCommon>;
  };

  const { language } = useComponentStore((state) => state);

  const isLoadingPage = pathname === UIEndpointsCommon.LOADING;

  const background = isLoadingPage
    ? 'var(--vc-background)'
    : 'var(--home-background)';

  const {
    className: currentPageLayoutClassName,
    title: currentPageLayoutTitle,
    showNav: currentPageLayoutShowNav,
    showChar: currentPageLayoutShowChar,
    ...currentPageLayoutRest
  } = pageLayouts(language)?.[pathname]?.layoutProps ?? {};

  return (
    <div
      id="ct_layout"
      className={cn(
        'h-dvh relative overflow-hidden',
        currentPageLayoutClassName,
        className,
      )}
      style={{ background }}
      {...currentPageLayoutRest}
      {...rest}>
      <CTSeoMeta meta={pageLayouts()?.[pathname]?.meta} />
      {!isLoadingPage && (
        <>
          <Header title={currentPageLayoutTitle ?? title} />
        </>
      )}
      {children}
      {!isLoadingPage && (
        <Character showChar={currentPageLayoutShowChar ?? showChar} />
      )}
      {(currentPageLayoutShowNav || showNav) && <NavMenu />}
    </div>
  );
};

export default CTLayoutComponent;
