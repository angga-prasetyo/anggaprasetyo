import Person from '@/assets/images/ap-square_person.svg?react';

export const Header = () => {
  return (
    <div className="absolute flex gap-1 items-center p-2">
      <Person height={30} width={30} />
      <h1 className="font-semibold text-[#4d4d4d]">Angga/Overview</h1>
    </div>
  );
};
