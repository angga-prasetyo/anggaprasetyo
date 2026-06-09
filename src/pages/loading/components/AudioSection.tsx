import { useCallback } from 'react';

import { CTBeamBorder } from '@/components/ct-beam-border/component';
import { CTPulsatingButton } from '@/components/ct-pulsating-button/component';
import { AUDIOS } from '@/constants/audios';
import { WORDS, words } from '@/constants/languages';
import { useComponentStore } from '@/stores/component/store';
import { useLoadingStore } from '@/stores/loading/store';

import { SECTIONS } from '../constant';

export const AudioSection: React.FC = () => {
  const { language, changeBgm, changeEnableAudio } = useComponentStore(
    (state) => state,
  );
  const { changeSection } = useLoadingStore((state) => state);

  const handleNext = useCallback(() => {
    changeSection(SECTIONS.LOADING);
  }, [changeSection]);

  const handleNextWithAudio = useCallback(() => {
    changeBgm(AUDIOS.LOADING);
    changeEnableAudio(true);
    handleNext();
  }, [changeBgm, changeEnableAudio, handleNext]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-[80vw] max-w-96 h-55 rounded-4xl border-2 pb-3 pt-8 px-8">
        <h2 className="text-center text-[#ddbb88] font-bold mb-4">
          {words[WORDS.POPUP__ENABLE_SOUND_TITLE][language]}
        </h2>
        <p>{words[WORDS.POPUP__ENABLE_SOUND_DESCRIPTION][language]}</p>
        <div className="flex justify-around">
          <CTPulsatingButton
            className="relative mt-10 bg-[#dc322f]"
            variant="ripple"
            onClick={handleNext}>
            <p className="font-semibold text-white">
              {words[WORDS.DENY][language]}
            </p>
          </CTPulsatingButton>
          <CTPulsatingButton
            className="relative mt-10 justify-self-end"
            onClick={handleNextWithAudio}>
            <p className="font-semibold">{words[WORDS.ALLOW][language]}</p>
          </CTPulsatingButton>
        </div>
        <CTBeamBorder borderWidth={4} />
      </div>
    </div>
  );
};
