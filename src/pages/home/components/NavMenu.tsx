import { useState } from 'react';

import {
  User,
  Code2,
  GraduationCap,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';

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
    id: 'education',
    index: '03',
    sub: 'Record',
    label: 'Education',
    icon: GraduationCap,
  },
];

interface NavMenuProps {
  onSelect?: (id: string) => void;
}

export function NavMenu({ onSelect }: NavMenuProps) {
  const [active, setActive] = useState('');
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
      <div className="flex flex-col items-end justify-end mt-10">
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
                className="relative flex items-center gap-3.5 py-3.5 pl-3.5 pr-4.5 cursor-pointer text-left outline-0 w-full"
                key={item.id}
                onClick={() => handleSelect(item.id)}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  background:
                    isActive || isHovered ? 'rgba(245,197,24,0.08)' : '#1c1e22',
                  border: `1px solid ${isActive || isHovered ? 'rgba(245,197,24,0.45)' : 'rgba(255,255,255,0.1)'}`,
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
                  className="absolute left-0 top-1 bottom-1 w-1 bg-[#f5c518]"
                  aria-hidden="true"
                  style={{
                    opacity: isActive ? 1 : 0,
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
                      className="block w-1 h-1 rotate-45"
                      style={{
                        background:
                          isActive || isHovered
                            ? '#f5c518'
                            : 'rgba(255,255,255,0.15)',
                        opacity,
                        transition: 'background 0.2s ease',
                      }}
                    />
                  ))}
                </span>

                {/* icon box */}
                <span
                  className="flex justify-center items-center w-8 h-8 shrink-0"
                  style={{
                    border: `1px solid ${isActive || isHovered ? '#c49a12' : 'rgba(255,255,255,0.1)'}`,
                    background:
                      isActive || isHovered
                        ? 'rgba(245,197,24,0.12)'
                        : 'rgba(255,255,255,0.04)',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                    color:
                      isActive || isHovered
                        ? '#f5c518'
                        : 'rgba(255,255,255,0.45)',
                  }}>
                  <Icon size={15} />
                </span>

                {/* label */}
                <span className="flex-1 min-w-0">
                  <span className="block text-[9px] tracking-[2px] mb-2 leading-px text-[rgba(255,255,255,0.38)]">
                    {item.index?.toUpperCase()} / {item.sub?.toUpperCase()}
                  </span>
                  <span
                    className="block text-[15px] font-extrabold tracking-[1px]"
                    style={{
                      color: isActive || isHovered ? '#ffffff' : '#e8e8e0',
                      transition: 'color 0.2s ease',
                    }}>
                    {item.label?.toUpperCase()}
                  </span>
                </span>

                {/* chevron */}
                <ChevronRight
                  className="w-3.5 h-3.5 shrink-0"
                  aria-hidden="true"
                  style={{
                    color:
                      isActive || isHovered
                        ? '#f5c518'
                        : 'rgba(255,255,255,0.15)',
                    transform:
                      isActive || isHovered
                        ? 'translateX(2px)'
                        : 'translateX(0)',
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
