import { useEffect } from 'react';

import { CTLayout } from '@/components/ct-layout';
import { AUDIOS } from '@/constants/audios';
import { useComponentStore } from '@/stores/component/store';

import { pageMeta } from './constant';

const HomePage: React.FC = () => {
  const { changeBgm } = useComponentStore((state) => state);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => changeBgm(AUDIOS.MAIN), []);
  return (
    <CTLayout meta={pageMeta} titlePage="Homepage">
      {/* Overlay blinding fade out */}
      <div
        className="fixed -inset-50 pointer-events-none animate-fadeOut"
        style={
          {
            background: 'var(--background-blinding)',
          } as React.CSSProperties
        }
      />

      {/* Home Content */}
      {/* <div className="bg-[#080C10]">
        <h2 className="text-[#00c9d4] text-2xl font-bold pt-30">
          Enim elit veniam sit ullamco magna.
        </h2>
        <h2 className="text-[#C0392B] text-2xl font-bold">
          Enim elit veniam sit ullamco magna.
        </h2>
        <h2 className="text-[#E8F4F4] text-2xl font-bold">
          Enim elit veniam sit ullamco magna.
        </h2>
         <h2 className="text-[#E8E8DC] text-2xl font-bold">
          Enim elit veniam sit ullamco magna.
        </h2>
      </div> */}
      <section className="pt-15 flex flex-col items-end justify-end">
        <div className="relative bg-[#596266] w-42 mr-3">
          <h2 className="absolute text-[#E8E8DC] text-lg font-bold -top-4 left-3">
            Angga Prasetyo
          </h2>
          <h2 className="text-[#E8E8DC] text-md font-bold pt-4 pb-2 pl-3">
            Frontend Engineer
          </h2>
        </div>
        <div className="p-px bg-[#00c9d4] w-42 mr-3 my-1 opacity-30" />
        <div className="flex justify-between gap-1 w-42 mr-3">
          <div className="bg-[#a9a9a6] rounded w-full">
            <h3 className="text-[#4d4d4d] font-semibold text-center text-sm">
              React
            </h3>
          </div>
          <div className="bg-[#a9a9a6] rounded w-full">
            <h3 className="text-[#4d4d4d] font-semibold text-center text-sm">
              SPA
            </h3>
          </div>
        </div>
      </section>
    </CTLayout>
  );
};

export default HomePage;
