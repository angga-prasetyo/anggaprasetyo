import { useEffect } from 'react';

import { CTLayout } from '@/components/ct-layout';
import { CTPulsatingButton } from '@/components/ct-pulsating-button/component';
import { WORDS, words } from '@/constants/languages';
import { useComponentStore } from '@/stores/component/store';
import { useHomeStore } from '@/stores/home/store';

import { Character } from './components/Char';
import { ChatBubble } from './components/ChatBubble';
import { Contacts } from './components/Contacts';
import NavMenu from './components/NavMenu';
import { pageMeta } from './constant';

const HomePage: React.FC = () => {
  const { language } = useComponentStore((state) => state);
  const { chatTopic, changeTopic } = useHomeStore((state) => state);
  useEffect(() => {
    return () => {
      changeTopic(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CTLayout meta={pageMeta} className="overflow-hidden">
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
      <section className="pt-15 flex flex-col items-end justify-end">
        <div className="relative bg-[#596266]/30 w-42 mr-3">
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
        <div className="absolute top-35">
          <div className="relative bg-black/60 w-37 mt-2 mb-1">
            <h3 className="text-white text-center">
              {words[WORDS.CONTACT][language]}
            </h3>
          </div>
          <Contacts />
        </div>
        <div className="absolute top-105 right-3">
          <a
            href="/ap-cv.pdf"
            download="Angga Prasetyo - Remote Frontend Developer">
            <CTPulsatingButton>Download CV</CTPulsatingButton>
          </a>
        </div>
      </section>
      <Character />
      <div className="absolute top-15 left-2 w-55">
        <ChatBubble
          show={Boolean(chatTopic)}
          message={chatTopic ? words[chatTopic][language] : ''}
        />
      </div>
      <div className="absolute bottom-5 right-0 bg-[#4d4d4d] py-1 border-4 border-white/50 rounded-md">
        <NavMenu />
      </div>
    </CTLayout>
  );
};

export default HomePage;
