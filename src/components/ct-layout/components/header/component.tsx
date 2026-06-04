import { useCallback, useMemo, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

import CompanyLogo from '@/assets/images/img__company_logo.svg?react';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';

import { HeaderProps } from './type';

export const Header: React.FC<HeaderProps> = ({ titlePage }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const headerRef = useRef(null);

  const [showSearch, setShowSearch] = useState(false);

  const _toggleShowSearch = useCallback(() => {
    setShowSearch((state) => !state);
  }, []);

  const dynamicLeftComponent = useMemo(() => {
    if (!isDesktop) {
      // render mobile version of left component
      return <img className="clickable menu_trigger" onClick={() => {}} />;
    }
    return (
      <Link to={UIEndpointsCommon.HOME}>
        <CompanyLogo />
      </Link>
    );
  }, [isDesktop]);

  const dynamicCenterComponent = useMemo(() => {
    // const width = isDesktop ? '50dvw' : '45dvw';
    if (showSearch) {
      return <search autoFocus />;
    }
    const title =
      typeof titlePage === 'string' ? <h4>{titlePage}</h4> : titlePage;
    return title;
  }, [showSearch, titlePage]);

  return (
    <div className="ct_layout_dashboard__header" ref={headerRef}>
      <div className="left_container">{dynamicLeftComponent}</div>
      <div className="w-full pl-5">
        <div className="center_container">{dynamicCenterComponent}</div>
        <div className="right_container pt--1"></div>
      </div>
    </div>
  );
};
