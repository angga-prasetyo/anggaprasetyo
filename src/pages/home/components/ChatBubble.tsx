import { XIcon } from 'lucide-react';

import { CTTypingText } from '@/components/ct-typing-text/component';
import { useHomeStore } from '@/stores/home/store';

interface ChatBubbleProps {
  message: string;
  show: boolean;
}

export function ChatBubble({ message, show }: ChatBubbleProps) {
  const changeTopic = useHomeStore((state) => state.changeTopic);
  if (!show) return null;
  return (
    <div className="flex flex-col items-start gap-0.75 md:items-center">
      {/* Bubble */}
      <div
        className="bg-[#1c2333] border-2 border-[#1a5f80] px-2 py-2.5 text-md text-[#c9d1d9] leading-relaxed border-l-3 border-l-[#2a9fd6] max-h-32 w-full overflow-scroll animate-scale-up-center"
        style={{
          clipPath:
            'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
        }}>
        <XIcon
          className="absolute right-2 top-2 size-3 md:size-4 md-right-5 cursor-pointer text-red-500"
          onClick={() => changeTopic(null)}
        />
        <CTTypingText showCursor={false}>{message}</CTTypingText>
      </div>

      {/* Triangle Indicator */}
      <div className="translate-x-full pt-2 md:translate-none">
        <div className="w-0 h-0 border-x-10 border-x-transparent border-t-15 border-t-[#1a5f80] animate-bounce -rotate-45 md:rotate-0" />
      </div>
    </div>
  );
}
