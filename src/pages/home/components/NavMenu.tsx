import { useState } from 'react';

import {
  User,
  Code2,
  ChevronRight,
  BriefcaseBusiness,
  type LucideIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';

type NavItem = {
  id: string;
  index: string;
  sub: string;
  label: string;
  icon: LucideIcon;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'profile', index: '01', sub: 'Overview', label: 'Profile', icon: User },
  { id: 'projects', index: '02', sub: 'Works', label: 'Projects', icon: Code2 },
  {
    id: 'experience',
    index: '03',
    sub: 'Record',
    label: 'Experience',
    icon: BriefcaseBusiness,
  },
];

interface NavMenuProps {
  onSelect?: (id: string) => void;
}

export function NavMenu({ onSelect }: NavMenuProps) {
  const [active, setActive] = useState('profile');
  const [hovered, setHovered] = useState<string | null>(null);

  function handleSelect(id: string) {
    setActive(id);
    onSelect?.(id);
  }

  return (
    <>
      <style>{`
        @keyframes ef-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.15; }
        }
        .ef-pulse-dot {
          animation: ef-pulse 1.8s ease-in-out infinite;
        }
      `}</style>
      <div className="flex flex-col items-end justify-end">
        <nav
          aria-label="Main navigation"
          className="flex flex-col justify-end items-end gap-2.5 w-55">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            const isHovered = hovered === item.id;
            const Icon = item.icon;

            const tx = isActive ? -8 : isHovered ? -6 : 0;
            const ry = isActive ? 3 : isHovered ? 2 : 0;

            return (
              <button
                className={cn(
                  'relative flex items-center gap-3.5 py-3.5 pl-3.5 pr-4.5cursor-pointer text-left outline-0 w-full border',
                  isActive || isHovered
                    ? 'bg-[#1D150F]/70 border-[#C0392B]/45'
                    : 'bg-[#1c1e22]',
                )}
                key={item.id}
                onClick={() => handleSelect(item.id)}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  clipPath:
                    'polygon(10px 0%,100% 0%,100% calc(100% - 10px),calc(100% - 10px) 100%,0% 100%,0% 10px)',
                  transform: `translateX(${tx}px) rotateY(${ry}deg)`,
                  transition:
                    'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, filter 0.2s ease',
                  filter: isActive
                    ? 'brightness(1.25)'
                    : isHovered
                      ? 'brightness(1.12)'
                      : 'brightness(1)',
                }}>
                {/* active left bar */}
                <span
                  className={cn(
                    'absolute left-0 top-1 bottom-1 w-1 bg-[#C0392B] opacity-0',
                    isActive && 'opacity-100',
                  )}
                  aria-hidden="true"
                  style={{
                    transition: 'opacity 0.2s ease',
                  }}
                />

                {/* rank diamonds */}
                <span
                  className="flex flex-col gap-0.5 shrink-0"
                  aria-hidden="true">
                  {[1, 0.5, 0.25].map((opacity, i) => (
                    <span
                      key={i}
                      className={cn(
                        'block w-1 h-1 rotate-45',
                        isActive || isHovered ? 'bg-[#00c9d4]' : 'bg-white/15',
                      )}
                      style={{
                        opacity,
                        transition: 'background 0.2s ease',
                      }}
                    />
                  ))}
                </span>

                {/* icon box */}
                <span
                  className={cn(
                    'flex justify-center items-center w-8 h-8 shrink-0 border',
                    isActive || isHovered
                      ? 'border-[#C0392B] bg-black/50 text-[#C0392B]'
                      : 'border-white/1 bg-white/4 text-white/45',
                  )}
                  style={{
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}>
                  <Icon size={15} />
                </span>

                {/* label */}
                <span className="flex-1 min-w-0">
                  <span className="block text-[9px] tracking-[2px] mb-2 leading-px text-[rgba(255,255,255,0.38)]">
                    {item.index?.toUpperCase()} / {item.sub?.toUpperCase()}
                  </span>
                  <span
                    className={cn(
                      'block text-[15px] font-extrabold tracking-[1px]',
                      isActive || isHovered ? 'text-white' : 'text-[#aeaea8]',
                    )}
                    style={{
                      transition: 'color 0.2s ease',
                    }}>
                    {item.label?.toUpperCase()}
                  </span>
                </span>

                {/* chevron */}
                <ChevronRight
                  className={cn(
                    'w-3.5 h-3.5 shrink-0',
                    isActive || isHovered
                      ? 'text-[#f5c518] translate-x-0.5'
                      : 'text-white/15 translate-x-0',
                  )}
                  aria-hidden="true"
                  style={{
                    transition: 'color 0.2s ease, transform 0.2s ease',
                  }}
                />

                {/* pulse diamond */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="ef-pulse-dot absolute right-3 top-[50%] -mt-0.75 w-1.5 h-1.5 bg-[#f5c518] rotate-45"
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default NavMenu;
