import { ReactNode } from 'react';

import { ChevronDown } from 'lucide-react';

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
  const { topic } = useProjectsStore((state) => state);

  if (!list[topic].length) {
    return (
      <div className="w-full h-[81%] bg-black flex items-center justify-center overflow-scroll">
        <div />
        <p className="rotate-45 font-mono text-red-500 text-6xl">No Data</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[81%] overflow-scroll">
      {list[topic].map(({ id, companyName, projectName }) => {
        return (
          <div
            key={id}
            className="flex justify-between items-center w-full py-1.5 px-2 mb-2 bg-[#403f3f]">
            {/* Company Name */}
            <div className="flex gap-2">
              <ChevronDown className="text-amber-300 animate-pulse" />
              <h5 className="text-sm text-[#a5a4a4]">{companyName}</h5>
            </div>

            {/* Project Name  */}
            <h5 className="text-md text-white">{projectName}</h5>
          </div>
        );
      })}
    </div>
  );
};
