import Person from '@/assets/images/ap-square_person.svg?react';

import { CTLayoutProps } from '../type';

export const Header = ({ title }: { title: CTLayoutProps['title'] }) => {

  return (
    <div className="absolute flex gap-1 items-center p-2">
      <Person className="size-4 md:size-5" />
      <h1 className="font-semibold text-[#4d4d4d] text-sm md:text-md">{`Angga/${title}`}</h1>
    </div>
  );
};
