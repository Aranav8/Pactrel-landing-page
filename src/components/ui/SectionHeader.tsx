import { ReactNode } from "react";
import { Badge } from "./Badge";

export function SectionHeader({ badge, title, description }: {
  badge: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="self-start">
        <Badge>{badge}</Badge>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 w-full">
        <h2 className="text-4xl md:text-[56px] font-normal tracking-[-0.04em] text-[#FFFFFF] leading-[1.3em] max-w-2xl">
          {title}
        </h2>
        {description && (
          <p className="text-[#888] text-lg leading-relaxed max-w-md pb-1.5">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
