import { useLocation } from 'react-router-dom';

import { CTSeoMeta } from '@/components/ct-seo-meta/component';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { cn } from '@/lib/utils';
import { SECTIONS } from '@/pages/loading/constant';
import { useComponentStore } from '@/stores/component/store';
import { useLoadingStore } from '@/stores/loading/store';
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

  const language = useComponentStore((state) => state.language);
  const loadingCurrSection = useLoadingStore((state) => state.currentSection);

  const isLoadingPage = pathname === UIEndpointsCommon.LOADING;
  const renderChar =
    !isLoadingPage || (isLoadingPage && loadingCurrSection === SECTIONS.BEGIN);

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
      {renderChar && (
        <Character showChar={currentPageLayoutShowChar ?? showChar} />
      )}
      {(currentPageLayoutShowNav || showNav) && <NavMenu />}
    </div>
  );
};

export default CTLayoutComponent;
