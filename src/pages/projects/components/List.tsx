import { ReactNode } from 'react';

import { ChevronRight, Code2 } from 'lucide-react';

import { WORDS, words } from '@/constants/languages';
import { ZINDEX } from '@/constants/zIndex';
import { cn } from '@/lib/utils';
import { useComponentStore } from '@/stores/component/store';
import { useProjectsStore } from '@/stores/projects/store';
import { EnumValues } from '@/types/common';

import { TOPIC } from '../constant';

export const List: React.FC = () => {
  const { language } = useComponentStore((state) => state);
  const { topic } = useProjectsStore((state) => state);

  const list: Record<
    EnumValues<typeof TOPIC>,
    (
      | {
          id: string;
          companyLogo?: ReactNode;
          companyName: string;
          projectName: string;
          projectDetails?: Record<string, unknown>;
        }
      | never
    )[]
  > = {
    [TOPIC.KODA]: [
      {
        id: 'koda-trimegah',
        companyName: 'Koda',
        projectName: 'TrimaPlus Trading App',
        projectDetails: {
          [words[WORDS.OUTSOURCED][language]]: 'Trimegah',
          [words[WORDS.DURATION][language]]:
            `${words[WORDS.OCTOBER][language]} 2023 - ${words[WORDS.AUGUST][language]} 2024`,
          [words[WORDS.CONTRIBUTIONS][language]]: [
            words[WORDS.TRIMEGAH_TRIMAPLUS_C_1][language],
            words[WORDS.TRIMEGAH_TRIMAPLUS_C_2][language],
            words[WORDS.TRIMEGAH_TRIMAPLUS_C_3][language],
            words[WORDS.TRIMEGAH_TRIMAPLUS_C_4][language],
          ],
        },
      },
      {
        id: 'koda-hukumku',
        companyName: 'Koda',
        projectName: 'Hukumku Web Platform',
        projectDetails: {
          [words[WORDS.OUTSOURCED][language]]: 'Hukumku',
          [words[WORDS.DURATION][language]]:
            `${words[WORDS.JULY][language]} 2023 - ${words[WORDS.OCTOBER][language]} 2023`,
          [words[WORDS.CONTRIBUTIONS][language]]: [
            words[WORDS.HUKUMKU_C_1][language],
            words[WORDS.HUKUMKU_C_2][language],
            words[WORDS.HUKUMKU_C_3][language],
          ],
        },
      },
      {
        id: 'koda-infinid',
        companyName: 'Koda',
        projectName: 'infinID HELOC Web',
        projectDetails: {
          [words[WORDS.OUTSOURCED][language]]: 'infinID',
          [words[WORDS.DURATION][language]]:
            `${words[WORDS.DECEMBER][language]} 2022 - ${words[WORDS.JULY][language]} 2023`,
          [words[WORDS.CONTRIBUTIONS][language]]: [
            words[WORDS.INFINID_C_1][language],
            words[WORDS.INFINID_C_2][language],
            words[WORDS.INFINID_C_3][language],
            words[WORDS.INFINID_C_4][language],
          ],
        },
      },
      {
        id: 'koda-last-mile',
        companyName: 'Koda',
        projectName: 'Kargo Last Mile TMS',
        projectDetails: {
          [words[WORDS.OUTSOURCED][language]]: 'Kargo',
          [words[WORDS.DURATION][language]]:
            `${words[WORDS.JANUARY][language]} 2022 - ${words[WORDS.OCTOBER][language]} 2022`,
          [words[WORDS.CONTRIBUTIONS][language]]: [
            words[WORDS.KARGO_C_1][language],
            words[WORDS.KARGO_C_2][language],
            words[WORDS.KARGO_C_3][language],
            words[WORDS.KARGO_C_4][language],
          ],
        },
      },
    ],
    [TOPIC.PERSONAL]: [],
  };

  if (!list[topic].length) {
    return (
      <div className="w-full h-[81%] bg-black flex items-center justify-center overflow-scroll">
        <div />
        <p className="rotate-45 font-mono text-red-500 text-6xl">
          {words[WORDS.EMPTY][language]}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-[81%] overflow-scroll">
      {list[topic].map(({ id, companyName, projectName, projectDetails }) => {
        return (
          <details
            key={id}
            className="group [&_summary::-webkit-details-marker]:hidden details-content:max-h-0 details-content:opacity-0 details-content:-translate-y-5 details-content:overflow-hidden details-content:transition-[max-height,opacity,content-visibility,translate] details-content:duration-500 details-content:ease-in-out details-content:transition-discrete open:details-content:max-h-[50%] open:details-content:opacity-100 open:details-content:translate-y-0">
            <summary
              className={cn(
                'flex justify-between items-center w-full py-1.5 px-2 mb-2 transition-[margin-bottom] duration-500 bg-[#403f3f] group-open:mb-0 group-open:sticky group-open:top-0',
                ZINDEX.PROJECT_SUMMARY,
              )}>
              {/* Company Name */}
              <div className="flex gap-2">
                <ChevronRight className="text-amber-300 animate-pulse transition-transform duration-300 group-open:rotate-90" />
                <h5 className="text-sm text-[#a5a4a4]">{companyName}</h5>
              </div>

              {/* Project Name  */}
              <h5 className="text-md text-white font-bold">{projectName}</h5>
            </summary>
            {/* Collapsible Content */}
            <div className="w-full bg-black mb-2 ml-0 mr-5 px-1 py-2 pl-4">
              {Object.keys(projectDetails || {})?.map((label, idx) => {
                const detailsId = `${id}-${label}-${idx}`;
                const isValueArr = Array.isArray(projectDetails?.[label]);
                const value = String(projectDetails?.[label]) || '-';
                return (
                  <div
                    key={detailsId}
                    className="w-full mb-2 md:grid md:grid-cols-24 md:gap-2 md:m-0">
                    {/* Label */}
                    <div className="w-full md:col-span-6 md:flex md:justify-between">
                      <label className="text-md font-semibold text-vc-term-bright-cyan">
                        {label}
                      </label>
                      <span className="text-md font-semibold text-vc-func-arg opacity-0 md:opacity-100">
                        :
                      </span>
                    </div>
                    {/* Value */}
                    {isValueArr ? (
                      <ul className="md:col-span-24">
                        {(projectDetails?.[label] as string[])?.map((el, i) => {
                          return (
                            <div
                              key={`${detailsId}-${i}`}
                              className="flex gap-2 md:items-center">
                              <Code2 className="size-15 text-[#C0392B] md:size-7" />
                              <li className="mb-1">
                                <p className="w-full text-md text-white">
                                  {el}
                                </p>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    ) : (
                      <p className="w-full text-md text-white md:col-span-18">
                        {value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </details>
        );
      })}
    </div>
  );
};
