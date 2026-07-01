import { useMemo } from 'react';

import { useLocation } from 'react-router-dom';

import Person from '@/assets/images/ap-square_person.svg?react';
import { WORDS, words } from '@/constants/languages';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { useComponentStore } from '@/stores/component/store';

export const Header = () => {
  const location = useLocation();
  const { language } = useComponentStore((state) => state);
  const title = useMemo(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case UIEndpointsCommon.HOME:
        return (
          <h1 className="font-semibold text-[#4d4d4d] text-sm md:text-md">{`Angga/${words[WORDS.OVERVIEW][language]}`}</h1>
        );
      default:
        return <></>;
    }
  }, [location, language]);
  return (
    <div className="absolute flex gap-1 items-center p-2">
      <Person height={30} width={30} />
      {title}
    </div>
  );
};
