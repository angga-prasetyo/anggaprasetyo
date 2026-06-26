import { CTTypingText } from '@/components/ct-typing-text/component';

interface ChatBubbleProps {
  message: string;
  show: boolean;
}

export function ChatBubble({ message, show }: ChatBubbleProps) {
  if (!show) return null;
  return (
    <div
      className="flex flex-col items-start gap-0.75">
      {/* Bubble */}
      <div
        className="bg-[#1c2333] border-2 border-[#1a5f80] px-2 py-2.5 text-md text-[#c9d1d9] leading-relaxed border-l-3 border-l-[#2a9fd6] max-h-32 w-full overflow-scroll animate-scale-up-center"
        style={{
          clipPath:
            'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
        }}>
        <CTTypingText showCursor={false}>{message}</CTTypingText>
      </div>

      {/* Ujung lancip — mengarah ke bawah, muncul setelah bubble terakhir */}
      <div className="pl-10 pt-2">
        <div className="w-0 h-0 border-x-10 border-x-transparent border-t-15 border-t-[#1a5f80] animate-bounce -rotate-45" />
      </div>
    </div>
  );
}
