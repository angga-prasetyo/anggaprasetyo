import GH from '@/assets/images/github.svg?react';
import IN from '@/assets/images/linkedin.svg?react';
import Mail from '@/assets/images/mail.svg?react';
import WA from '@/assets/images/wa.svg?react';
import { CONTACT_KEYS } from '@/constants/others';
import { cn } from '@/lib/utils';
import { useHomeStore } from '@/stores/home/store';
import { EnumValues } from '@/types/common';
import { capitalize } from '@/utils/string';

export interface ContactItem {
  key: EnumValues<typeof CONTACT_KEYS>;
  label: string;
  href: string;
  fill: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const SOCIALS: ContactItem[] = [
  {
    key: CONTACT_KEYS.WA,
    label: capitalize(CONTACT_KEYS.WA),
    href: 'https://api.whatsapp.com/send?phone=+6285894979242',
    fill: '#128c7e',
    icon: WA,
  },
  {
    key: CONTACT_KEYS.IN,
    label: capitalize(CONTACT_KEYS.IN, { split: '-', join: '' }),
    href: 'https://linkedin.com/in/angga-prasetyo-68b5a21bb',
    fill: '#0a66c2',
    icon: IN,
  },
  {
    key: CONTACT_KEYS.GITHUB,
    label: capitalize(CONTACT_KEYS.GITHUB),
    href: 'https://github.com/angga-prasetyo',
    fill: '#333',
    icon: GH,
  },
  {
    key: CONTACT_KEYS.EMAIL,
    label: capitalize(CONTACT_KEYS.EMAIL),
    href: 'mailto:angga.flavoring448@passinbox.com',
    fill: '#ea4335',
    icon: Mail,
  },
];

export const Contacts: React.FC = () => {
  const chatTopic = useHomeStore((state) => state.chatTopic);
  const changeTopic = useHomeStore((state) => state.changeTopic);

  return (
    <ul className="flex justify-end gap-2 list-none p-0 mr-1 w-full md:mr-8">
      {SOCIALS.map(({ key, label, href, fill, icon: Icon }) => {
        const isActive = key === chatTopic;
        return (
          <li
            key={key}
            className="flex justify-center items-center group/item gap-2 cursor-icon"
            onClick={() => changeTopic(key)}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'relative overflow-hidden flex items-center justify-center size-8 rounded-full bg-white text-[#4d4d4d] transition-[color,box-shadow] duration-300 ease-in-out hover:text-white hover:shadow-[3px_2px_45px_0px_rgb(0_0_0/12%)] md:size-12',
                isActive && 'text-white',
              )}>
              {/* Fill layer — slides up from bottom on hover */}
              <span
                className={cn(
                  'absolute bottom-0 left-0 w-full h-0 transition-[height] duration-300 ease-in-out group-hover/item:h-full',
                  isActive && 'h-full',
                )}
                style={{ background: fill }}
                aria-hidden="true"
              />
              <Icon className="relative z-10 size-4.5 md:size-6.5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
