import { ReactNode } from 'react';

import { ChevronRight } from 'lucide-react';

import { WORDS, words } from '@/constants/languages';
import { useComponentStore } from '@/stores/component/store';
import { useProjectsStore } from '@/stores/projects/store';
import { EnumValues } from '@/types/common';

import { TOPIC } from '../constant';

const list: Record<
  EnumValues<typeof TOPIC>,
  (
    | {
        id: string;
        companyLogo?: ReactNode;
        companyName: string;
        projectName: string;
      }
    | never
  )[]
> = {
  [TOPIC.KODA]: [
    {
      id: 'koda-trimegah',
      companyName: 'Koda',
      projectName: 'TrimaPlus',
    },
    {
      id: 'koda-hukumku',
      companyName: 'Koda',
      projectName: 'Hukumku',
    },
    {
      id: 'koda-infinid',
      companyName: 'Koda',
      projectName: 'infinId',
    },
    {
      id: 'koda-last-mile',
      companyName: 'Koda',
      projectName: 'Kargo Last Mile TMS',
    },
  ],
  [TOPIC.PERSONAL]: [],
};
export const List: React.FC = () => {
  const { language } = useComponentStore((state) => state);
  const { topic } = useProjectsStore((state) => state);

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
      {list[topic].map(({ id, companyName, projectName }) => {
        return (
          <details
            key={id}
            className="group [&_summary::-webkit-details-marker]:hidden details-content:max-h-0 details-content:opacity-0 details-content:-translate-y-5 details-content:overflow-hidden details-content:transition-[max-height,opacity,content-visibility,translate] details-content:duration-500 details-content:ease-in-out details-content:transition-discrete open:details-content:max-h-[50%] open:details-content:opacity-100 open:details-content:translate-y-0">
            <summary className="flex justify-between items-center w-full py-1.5 px-2 mb-2 transition-[margin-bottom] duration-500 bg-[#403f3f] group-open:mb-0">
              {/* Company Name */}
              <div className="flex gap-2">
                <ChevronRight className="text-amber-300 animate-pulse transition-transform duration-300 group-open:rotate-90" />
                <h5 className="text-sm text-[#a5a4a4]">{companyName}</h5>
              </div>

              {/* Project Name  */}
              <h5 className="text-md text-white font-bold">{projectName}</h5>
            </summary>
            {/* Collapsible Content */}
            <div className="w-full bg-black overflow-y-auto mb-2 ml-0 mr-5 px-1 py-2 pl-4">
              <p className="text-md text-[#00c9d4]">
                Laborum voluptate enim proident nulla nisi dolor laborum commodo
                officia pariatur velit culpa quis. Consectetur excepteur mollit
                labore eu fugiat ipsum ullamco duis culpa commodo. Ullamco eu
                Lorem eiusmod do labore nisi sit voluptate nisi labore mollit
                minim. Aliquip incididunt eiusmod Lorem elit deserunt. Sunt non
                consequat consequat irure ullamco eiusmod sit qui minim sint
                elit. Dolor nisi commodo commodo consectetur culpa aliquip velit
                laboris. Irure nostrud id eu elit non.
              </p>
            </div>
          </details>
        );
      })}
    </div>
  );
};
