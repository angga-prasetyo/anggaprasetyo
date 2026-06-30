import { useEffect, useState } from 'react';

import { Volume2, VolumeX, Check } from 'lucide-react';

import { CTCubicLoader } from '@/components/ct-cubic-loader/component';
import { CTRevealButton } from '@/components/ct-reveal-btn/component';
import { AUDIOS } from '@/constants/audios';
import { LANGUAGES, WORDS, words } from '@/constants/languages';
import { cn } from '@/lib/utils';
import { useComponentStore } from '@/stores/component/store';
import { useLoadingStore } from '@/stores/loading/store';
import { EnumValues } from '@/types/common';
import { preloadAudio } from '@/utils/other';

import { SECTIONS } from '../../constant';

import { AudioModeCard } from './components/AudioModeCard';
import { SectionLabel } from './components/SectionLabel';

export function ConfigurationSection() {
  const { language, changeLanguage, enableAudio, changeEnableAudio, changeBgm } =
    useComponentStore((state) => state);
  const { changeSection } = useLoadingStore((state) => state);
  const [loading, setLoading] = useState(false);

  const languageOptions: {
    label: string;
    value: EnumValues<typeof LANGUAGES>;
    icon?: string;
  }[] = [
    {
      label: words.english[language],
      value: LANGUAGES.ENG,
      icon: '🇺🇸',
    },
    {
      label: words.indonesia[language],
      value: LANGUAGES.IDN,
      icon: '🇮🇩',
    },
  ];

  const handleLanguageSelect = (code: EnumValues<typeof LANGUAGES>) => {
    changeLanguage(code);
  };

  const handleNext = () => {
    if (!enableAudio) {
      return changeSection(SECTIONS.LOADING);
    }
    setLoading(true);
  };

  // preload audio for loading section
  useEffect(() => {
    async function preload() {
      const tasks = [preloadAudio(AUDIOS.LOADING)];
      let done = 0;
      await Promise.all(
        tasks.map((t) =>
          Promise.resolve(t).then(() => {
            done++;
          }),
        ),
      );
      if (done === tasks.length) {
        changeBgm(AUDIOS.LOADING);
        changeSection(SECTIONS.LOADING);
      }
    }
    if (loading) {
      preload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);


  return (
    <div className="h-full flex justify-center items-center">
      {/* Main Content */}
      <div
        className={cn(
          'relative w-full max-w-3xl overflow-hidden bg-zinc-950',
          'border-2 border-cyan-500/40',
          // Corner cut size scales: 8px on SE-width screens, 12px from md up
          '[clip-path:polygon(0_8px,8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]',
          'md:[clip-path:polygon(0_12px,12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)]',
        )}>
        {/* Top accent bar */}
        <div className="h-1 w-full bg-linear-to-r from-cyan-500 via-amber-400 to-red-600" />

        {/* Header */}
        <div className="border-b border-cyan-500/20 px-4 py-3 md:px-6 md:py-4">
          <p className="flex items-center gap-4 font-mono text-md tracking-[0.15em] text-cyan-400 md:text-lg md:tracking-[0.2em] md:gap-6">
            <span className="inline-block size-2 shrink-0 animate-pulse bg-cyan-400 md:size-3" />
            {words[WORDS.POPUP__CONFIGURATION_TITLE][language]}
          </p>
        </div>

        {/* Body — sections stack vertically at every breakpoint per spec */}
        <div className="space-y-6 px-4 py-6 md:space-y-8 md:px-6 md:py-6">
          {/* ===== LANGUAGE SECTION ===== */}
          <section>
            <SectionLabel
              text={words[WORDS.POPUP__CHOOSE_LANGUAGE_TITLE][language]}
            />
            <div className="grid grid-cols-2 gap-2.5 md:gap-3">
              {languageOptions.map(({ label, value, icon }, idx) => {
                const selected = language === value;
                return (
                  <button
                    key={`language-${idx}`}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => handleLanguageSelect(value)}
                    className={cn(
                      'group relative overflow-hidden border px-2.5 py-2.5 text-left md:px-3 md:py-3',
                      '[clip-path:polygon(0_6px,6px_0,100%_0,100%_100%,6px_100%,0_calc(100%-6px))]',
                      'md:[clip-path:polygon(0_8px,8px_0,100%_0,100%_100%,8px_100%,0_calc(100%-8px))]',
                      selected
                        ? 'border-cyan-400 bg-cyan-950/40'
                        : 'border-zinc-700 bg-zinc-900/60 hover:border-zinc-500',
                    )}>
                    <span
                      aria-hidden
                      className={cn(
                        'pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/15 to-transparent opacity-0 animate-scanline-sweep',
                        selected && 'opacity-100',
                      )}
                    />

                    <div className="relative flex items-center justify-between gap-1.5">
                      <div className="min-w-0">
                        <p
                          className={cn(
                            'truncate font-mono text-xs font-bold tracking-wide md:text-sm md:tracking-wider',
                            selected ? 'text-cyan-300' : 'text-zinc-300',
                          )}>
                          {label}
                        </p>
                        {icon}
                      </div>
                      <span
                        className={cn(
                          'flex h-3.5 w-3.5 shrink-0 items-center justify-center border md:h-4 md:w-4',
                          selected
                            ? 'border-cyan-400 bg-cyan-400/20'
                            : 'border-zinc-600',
                        )}>
                        {selected && (
                          <Check className="h-2 w-2 text-cyan-300 md:h-2.5 md:w-2.5" />
                        )}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ===== AUDIO SECTION ===== */}
          <section>
            <SectionLabel
              text={words[WORDS.POPUP__ENABLE_SOUND_TITLE][language]}
            />
            <div className="grid grid-cols-2 gap-2.5 md:gap-3">
              <AudioModeCard
                key="audio-1"
                icon={Volume2}
                label={words[WORDS.ALLOW][language]}
                selected={enableAudio}
                recommended
                onSelect={() => changeEnableAudio(true)}
              />
              <AudioModeCard
                key="audio-2"
                icon={VolumeX}
                label={words[WORDS.DENY][language]}
                selected={!enableAudio}
                onSelect={() => changeEnableAudio(false)}
              />
            </div>
          </section>

          <div className="flex justify-end">
            <CTRevealButton onClick={handleNext}>
              {words[WORDS.NEXT][language]}
            </CTRevealButton>
          </div>
        </div>
      </div>

      {/* Loading Overlay Modal */}
      {loading && (
        <div className="absolute h-screen w-screen bg-gray-800/50 flex justify-center items-center">
          <CTCubicLoader text={words[WORDS.LOADING_AUDIO][language]} />
        </div>
      )}
    </div>
  );
}
