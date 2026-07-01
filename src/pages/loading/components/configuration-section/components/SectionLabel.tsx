export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-2 flex items-center gap-2 md:mb-2.5">
      <span className="h-3 w-0.5 shrink-0 bg-amber-400" />
      <span className="font-mono text-sm font-semibold  text-zinc-300 md:text-md">
        {text}
      </span>
      <span className="h-px flex-1 bg-zinc-700" />
    </div>
  );
}
