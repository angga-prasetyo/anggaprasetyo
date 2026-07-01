import { useEffect } from 'react';

import { CTGlossyButton } from '@/components/ct-glossy-btn/component';
import { CTLayout } from '@/components/ct-layout';
import { WORDS, words } from '@/constants/languages';
import { useComponentStore } from '@/stores/component/store';
import { useHomeStore } from '@/stores/home/store';

import { Character } from './components/Char';
import { ChatBubble } from './components/ChatBubble';
import { Contacts } from './components/Contacts';
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
    <CTLayout meta={pageMeta} className="overflow-hidden" showNav>
      {/* Overlay blinding fade out */}
      <div
        className="fixed -inset-50 animate-fadeOut pointer-events-none"
        style={
          {
            background: 'var(--background-blinding)',
          } as React.CSSProperties
        }
      />

      {/* Home Content */}
      <section className="pt-15 flex flex-col items-end justify-end">
        {/* Name & Role */}
        <div className="relative bg-[#596266]/30 w-[50dvw] md:w-60 md:mr-8">
          <h2 className="absolute text-[#E8E8DC] text-lg font-bold -top-4 left-3 md:text-xl">
            Angga Prasetyo
          </h2>
          <h2 className="text-[#E8E8DC] text-md font-bold pt-4 pb-2 pl-3 md:text-lg md:pt-5 md:pb-3">
            Frontend Engineer
          </h2>
        </div>

        {/* Divider */}
        <div className="p-px bg-[#00c9d4] opacity-30 my-0.5 w-[50dvw] md:w-60 md:mr-8 md:my-1" />

        {/* Specialization */}
        <div className="flex justify-between gap-1 mr-0.5 w-[50dvw] md:w-60 md:mr-8">
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

        {/* Contact */}
        <div className="absolute top-34 md:top-38">
          <div className="relative bg-black/60 w-[45dvw] mt-2 mb-0.5 md:w-55 md:mr-8">
            <h3 className="text-white text-center text-sm md:text-md">
              {words[WORDS.CONTACT][language]}
            </h3>
          </div>
          <Contacts />
        </div>

        {/* Download Button */}
        <div className="absolute top-60 right-2 md:top-70 md:right-10">
          <a
            href="/ap-cv.pdf"
            download="Angga Prasetyo - Remote Frontend Developer">
            <CTGlossyButton>
              {words[WORDS.DOWNLOAD_CV][language]}
            </CTGlossyButton>
          </a>
        </div>
      </section>

      <Character />
      <div
        className="absolute top-10 left-2 w-[55dvw] z-1 md:w-[45dvw] md:translate-x-[50%] md:top-15"
      >
        <ChatBubble
          show={Boolean(chatTopic)}
          message={chatTopic ? words[chatTopic][language] : ''}
        />
      </div>
    </CTLayout>
  );
};

export default HomePage;
