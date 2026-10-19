import { useState } from "react";

export type Side = "you" | "client";

export const SIDE_LABEL: Record<Side, string> = {
  you: "Your workspace",
  client: "What your client sees",
};

// A product screenshot. Until the file exists in /public, it shows a
// placeholder naming the missing file.
export function Screenshot({ src, alt, className = "" }: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {missing ? (
        <div className="w-full h-full min-h-[160px] rounded-xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center gap-1 text-center px-4">
          <span className="text-white/50 text-[13px]">Screenshot coming soon</span>
          <span className="text-white/30 font-mono text-[11px]">public{src}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          decoding="async"
          loading="lazy"
          onError={() => setMissing(true)}
          className="w-full h-full object-contain rounded-xl"
        />
      )}
    </div>
  );
}
