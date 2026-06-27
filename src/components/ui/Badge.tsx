import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-[#FFF3F0]/40 animate-blink" />
      <span className="text-sm font-medium text-white/80">{children}</span>
    </div>
  );
}

{/* Add keyframes in a style tag or a global stylesheet if not already available */}
<style>{`
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .animate-blink {
    animation: blink 1.5s ease-in-out infinite;
  }
`}</style>
