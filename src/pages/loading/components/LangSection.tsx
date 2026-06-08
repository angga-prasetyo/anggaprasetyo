import { useCallback, useMemo } from 'react';

import { CTBeamBorder } from '@/components/ct-beam-border/component';
import { CTPulsatingButton } from '@/components/ct-pulsating-button/component';
import { CTRadioGroup } from '@/components/ct-radio-group/component';
import { CTRadioGroupProps } from '@/components/ct-radio-group/type';
import { LANGUAGES, words } from '@/constants/languages';
import { useComponentStore } from '@/stores/component/store';
import { UseLoadingStore } from '@/stores/loading/store';
import { EnumValues } from '@/types/common';

import { SECTIONS } from '../constant';

export const LangSection: React.FC = () => {
  const { language, changeLanguage } = useComponentStore((state) => state);
  const { changeSection } = UseLoadingStore((state) => state);
  const languageOptions: CTRadioGroupProps<
    EnumValues<typeof LANGUAGES>
  >['options'] = useMemo(
    () => [
      {
        label: words.english[language],
        value: LANGUAGES.ENG,
      },
      {
        label: words.indonesia[language],
        value: LANGUAGES.IDN,
      },
    ],
    [language],
  );

  const handleNext = useCallback(() => {
    changeSection(SECTIONS.AUDIO);
  }, [changeSection]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-[80vw] max-w-96 h-75 rounded-4xl border-2 pb-3 pt-8 px-8">
        <h2 className="text-center text-[#ddbb88] font-bold mb-4">
          {words.popup__choose_language_title[language]}
        </h2>
        <CTRadioGroup<LANGUAGES>
          className="items-center"
          defaultValue={language}
          options={languageOptions}
          onValueChange={(value) => changeLanguage(value)}
        />
        <CTPulsatingButton
          className="relative mt-10 justify-self-end"
          onClick={handleNext}>
          <p className="font-semibold">{words.next[language]}</p>
        </CTPulsatingButton>
        <CTBeamBorder borderWidth={4} />
      </div>
    </div>
  );
};
