import { useMemo } from 'react';

import { CTBeamBorder } from '@/components/ct-beam-border/component';
import { CTLayout } from '@/components/ct-layout';
import { CTRadioGroup } from '@/components/ct-radio-group/component';
import { CTRadioGroupProps } from '@/components/ct-radio-group/type';
import { LANGUAGES, words } from '@/constants/languages';
import { useComponentStore } from '@/stores/component/store';
import { EnumValues } from '@/types/common';

import { pageMeta } from './constant';

const LoadingPage: React.FC = () => {
  const { language, changeLanguage } = useComponentStore((state) => state);
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
  return (
    <CTLayout meta={pageMeta} titlePage="LoadingPage">
      <div className="flex justify-center items-center h-full">
        <div className="relative w-[80vw] h-52.5 rounded-4xl border-2 p-4">
          <h2 className="text-center text-[#ddbb88] font-bold mb-4">
            {words.popup__choose_language_title[language]}
          </h2>
          <CTRadioGroup<LANGUAGES>
            className="items-center"
            defaultValue={language}
            options={languageOptions}
            onValueChange={(value) => changeLanguage(value)}
          />
          <CTBeamBorder borderWidth={4} />
        </div>
      </div>
    </CTLayout>
  );
};

export default LoadingPage;
