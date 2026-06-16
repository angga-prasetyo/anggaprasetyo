interface ChatBubbleProps {
  message: string;
}

export function ChatBubble({
  message,
}: ChatBubbleProps) {

  return (
    <div className="flex flex-col items-start gap-0.75">
      {/* Bubble */}
      <div
        className="bg-[#1c2333] border border-[#1a5f80] px-3.5 py-2.5 text-[13px] text-[#c9d1d9] leading-relaxed max-w-xs border-l-2 border-l-[#2a9fd6] h-15 overflow-scroll"
        style={{
          clipPath:
            'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
        }}>
        {message}
      </div>

      {/* Ujung lancip — mengarah ke bawah, muncul setelah bubble terakhir */}
      <div className="pl-3]">
        <div
          className=" w-0 h-0 border-x-4 border-x-transparent border-t-10 border-t-[#1a5f80]"
        />
      </div>
    </div>
  );
}
