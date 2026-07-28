import { CTGlossyButton } from '@/components/ct-glossy-btn/component';
import { WORDS, words } from '@/constants/languages';
import { ZINDEX } from '@/constants/zIndex';
import { cn } from '@/lib/utils';
import { useComponentStore } from '@/stores/component/store';
import { useHomeStore } from '@/stores/home/store';

import { ChatBubble } from './components/ChatBubble';
import { Contacts } from './components/Contacts';

const HomePage: React.FC = () => {
  const language = useComponentStore((state) => state.language);
  const chatTopic = useHomeStore((state) => state.chatTopic);
  const bgAnimation = useHomeStore((state) => state.bgAnimation);

  return (
    <>
      {bgAnimation && (
        <div
          className="fixed -inset-50 animate-fade-out pointer-events-none"
          style={
            { background: 'var(--background-blinding)' } as React.CSSProperties
          }
        />
      )}

      {/* Profile Content */}
      <section className="relative pt-15 flex flex-col items-end justify-end gap-3">
        {/* Name & Role */}
        <div className="relative bg-[#596266]/30 w-[50dvw] md:w-60 md:mr-8">
          <h2 className="absolute text-[#E8E8DC] text-lg font-bold -top-4 left-3 md:text-xl">
            Angga Prasetyo
          </h2>
          <h2 className="text-[#E8E8DC] text-md font-bold pt-4 pb-2 pl-3 md:text-lg md:pt-5 md:pb-3">
            Frontend Engineer
          </h2>
        </div>

        <div className="-mt-3 p-px bg-[#00c9d4] opacity-30 w-[50dvw] md:w-60 md:mr-8" />

        <div className="flex justify-between -mt-1 gap-1 mr-0.5 w-[50dvw] md:w-60 md:mr-8">
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

        {/* Contact Info */}
        <div className="flex flex-col items-end gap-2">
          <div className="relative bg-black/60 w-[45dvw] md:w-55 md:mr-8">
            <h3 className="text-white text-center text-sm md:text-md">
              {words[WORDS.CONTACT][language]}
            </h3>
          </div>
          <Contacts />
        </div>

        <a
          href="/ap-cv.pdf"
          download="Angga Prasetyo - Remote Frontend Developer"
          className="mt-5 mr-1 md:mr-8">
          <CTGlossyButton>{words[WORDS.DOWNLOAD_CV][language]}</CTGlossyButton>
        </a>
      </section>

      {/* Chat Bubble */}
      <div
        className={cn(
          'absolute top-10 left-2 w-[55dvw] md:w-[45dvw] md:translate-x-[50%] md:top-15',
          ZINDEX.NAVBAR,
        )}>
        <ChatBubble
          show={Boolean(chatTopic)}
          message={chatTopic ? words[chatTopic][language] : ''}
        />
      </div>
    </>
  );
};

export default HomePage;
