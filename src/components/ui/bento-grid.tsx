import { cn } from "../../lib/utils";
import React from "react";
import { CardSpotlight } from "./card-spotlight";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <CardSpotlight
      className={cn(
        "row-span-1 rounded-3xl transition duration-200 p-6 bg-[#0a0a0a] border border-white/5 hover:bg-[#111] hover:border-white/10 justify-between flex flex-col space-y-4 group/bento",
        className,
      )}
    >
      <div className="flex-1 w-full relative z-20 min-h-[6rem]">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-20">
        <div className="flex items-center gap-3 mb-2 mt-2">
          {icon && <div className="text-[#FFF3F0]/60">{icon}</div>}
          <div className="font-sans font-medium text-lg text-[#FFF3F0]">
            {title}
          </div>
        </div>
        <div className="font-sans font-normal text-[#7A7A7A] text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </CardSpotlight>
  );
};
