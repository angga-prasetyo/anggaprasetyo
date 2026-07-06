import { ReactNode, useCallback } from 'react';

import { User } from 'lucide-react';

import Icon from '@/assets/images/ap-square_person.svg?react';
import { WORDS, words } from '@/constants/languages';
import { cn } from '@/lib/utils';
import { useComponentStore } from '@/stores/component/store';
import { useProjectsStore } from '@/stores/projects/store';
import { UseProjectsStoreProps } from '@/stores/projects/type';

import { TOPIC } from '../constant';

export const Tab: React.FC = () => {
  const { language } = useComponentStore((state) => state);
  const { topic, changeTopic } = useProjectsStore((state) => state);

  const renderList = useCallback(() => {
    const list: {
      id: UseProjectsStoreProps['topic'];
      icon?: ReactNode;
      label: string;
    }[] = [
      {
        id: TOPIC.KODA,
        icon: <Icon className="size-3 md:size-4" />,
        label: 'Koda',
      },
      {
        id: TOPIC.PERSONAL,
        icon: <User className="size-3 md:size-4" />,
        label: words[WORDS.PERSONAL][language],
      },
    ];

    return list.map(({ id, icon, label }) => {
      const isActive = id === topic;

      return (
        <div
          key={id}
          className={cn(
            'relative border rounded-t-sm bg-[#b5b4b4] py-2 px-4 cursor',
            isActive &&
              'bg-[radial-gradient(circle_at_50%_100%,#494949_20%,#343434_75%)]',
          )}
          onClick={() => changeTopic(id)}>
          <div
            className={cn(
              'flex gap-2 items-center text-[#596266]',
              isActive && 'text-[#E8E8DC]',
            )}>
            {icon}
            <div
              className={cn(
                'h-4 w-px bg-[#596266]/30 ',
                isActive && 'bg-[#00c9d4] animate-pulse w-0.5',
              )}
            />
            <p className="text-sm md:text-md">{label}</p>
          </div>
        </div>
      );
    });
  }, [changeTopic, language, topic]);

  return <div className="flex gap-0.5">{renderList()}</div>;
};
