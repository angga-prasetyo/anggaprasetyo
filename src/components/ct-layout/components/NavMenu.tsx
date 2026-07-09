import { useMemo, useState } from 'react';

import {
  User,
  Code2,
  ChevronRight,
  // TODO: Remove eslint disable when ready to show experience
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BriefcaseBusiness,
  type LucideIcon,
  Menu,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import { WORDS, words } from '@/constants/languages';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { ZINDEX } from '@/constants/zIndex';
import { useSwipe } from '@/hooks/useSwipe';
import { cn } from '@/lib/utils';
import { useComponentStore } from '@/stores/component/store';
import { useHomeStore } from '@/stores/home/store';

// TODO: Remove eslint disable when ready to show experience
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NAV_ITEM_ID } from '../constant';

type NavItem = {
  id: string;
  index: string;
  sub: string;
  label: string;
  icon: LucideIcon;
};

interface NavMenuProps {
  onSelect?: (id: NavItem['id']) => void;
}

const ARROW_DELAYS = ['0s', '0.2s', '0.4s'];

export function NavMenu({ onSelect }: NavMenuProps) {
  const { language } = useComponentStore((state) => state);
  const { changeTopic } = useHomeStore((state) => state);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const NAV_ITEMS: NavItem[] = useMemo(
    () => [
      {
        id: UIEndpointsCommon.HOME,
        index: '01',
        sub: words[WORDS.OVERVIEW][language],
        label: words[WORDS.PROFILE][language],
        icon: User,
      },
      {
        id: UIEndpointsCommon.PROJECTS,
        index: '02',
        sub: words[WORDS.WORKS][language],
        label: words[WORDS.PROJECT][language],
        icon: Code2,
      },
      // {
      //   id: NAV_ITEM_ID.EXP,
      //   index: '03',
      //   sub: words[WORDS.RECORD][language],
      //   label: words[WORDS.EXPERIENCE][language],
      //   icon: BriefcaseBusiness,
      // },
    ],
    [language],
  );
  const [active, setActive] = useState(pathname);
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(true);

  const { handleTouchEnd, handleTouchStart } = useSwipe({
    onSwipeLeft() {
      setOpen(true);
    },
    onSwipeRight() {
      setOpen(false);
    },
  });

  function handleSelect(id: NavItem['id']) {
    setActive(id);
    onSelect?.(id);
    changeTopic(null);

    switch (id) {
      case UIEndpointsCommon.HOME:
        return navigate(UIEndpointsCommon.HOME);
      case UIEndpointsCommon.PROJECTS:
        return navigate(UIEndpointsCommon.PROJECTS);
      default:
        return changeTopic(WORDS.CHAT__NO_PAGES);
    }
  }

  return (
    <div className="ct-nav-menu">
      {/* Hamburger Menu When Closed */}
      {!open && (
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => setOpen(true)}
          className={cn(
            'absolute bottom-5 right-0 bg-[#1c1e22] p-2 rounded text-[#00c9d4]',
            ZINDEX.NAVBAR,
          )}>
          <Menu />
        </div>
      )}

      {/* Opened Nav Menu */}
      <div
        className={cn(
          'absolute bottom-0 right-0 animate-slide-left text-xs',
          !open && 'animate-slide-right',
          ZINDEX.NAVBAR,
        )}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        {...(!open && { inert: '' })}>
        <div className={cn('w-full text-end')} onClick={() => setOpen(false)}>
          <span className="text-white/90 bg-[#4d4d4d]/70 rounded-l-sm p-2 px-3">
            {words[WORDS.NAVBAR__MINIMIZE][language]}
            {ARROW_DELAYS.map((delay, i) => (
              <span
                key={`nav-menu-swipe-arrow-${i}`}
                className="inline-block animate-swipe-right text-[#00c9d4] font-bold"
                style={{ animationDelay: delay }}>
                &gt;
              </span>
            ))}
          </span>
        </div>
        <div
          className={cn(
            'bg-[#4d4d4d] py-1 border-4 border-r-0 border-white/50 rounded-md ',
          )}>
          <div className="flex flex-col items-end justify-end">
            <nav
              aria-label="Main navigation"
              className="flex flex-col justify-end items-end gap-2.5 w-55">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                const isHovered = hovered === item.id;
                const Icon = item.icon;

                const tx = isActive && open ? -8 : isHovered ? -6 : 0;
                const ry = isActive && open ? 3 : isHovered && open ? 2 : 0;

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
                            isActive || isHovered
                              ? 'bg-[#00c9d4]'
                              : 'bg-white/15',
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
                        transition:
                          'border-color 0.2s ease, background 0.2s ease',
                      }}>
                      <Icon size={15} />
                    </span>

                    {/* label */}
                    <span className="flex-1 min-w-0">
                      <span className="block text-xs tracking-[2px] mb-2 leading-px text-[rgba(255,255,255,0.38)]">
                        {item.index?.toUpperCase()} / {item.sub?.toUpperCase()}
                      </span>
                      <span
                        className={cn(
                          'block text-md font-extrabold tracking-[1px]',
                          isActive || isHovered
                            ? 'text-white'
                            : 'text-[#aeaea8]',
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
                        className="animate-pulse absolute right-3 top-[50%] -mt-0.75 w-1.5 h-1.5 bg-[#f5c518] rotate-45"
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
