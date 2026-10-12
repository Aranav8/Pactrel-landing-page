import { cn } from "../lib/utils";
import React from "react";
import { SectionHeader } from "./ui/SectionHeader";

const items = [
  {
    title: "The 5-email loop",
    description:
      "Proposal. Contract. Invoice. Deposit reminder. Every new client means the same chain, and every email is a chance for the deal to go cold.",
    className: "lg:col-span-7 md:col-span-6 col-span-12",
    bgClass: "bg-[#0A0A0E] bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.15)_0%,rgba(0,0,0,0)_70%)]",
    image: "/prob1.png",
  },
  {
    title: `"So what's the status?"`,
    description:
      "Without a shared dashboard, clients message you 3-5 times a week just to check in. You become a customer support rep instead of doing the work.",
    className: "lg:col-span-5 md:col-span-6 col-span-12",
    bgClass: "bg-[#0A0C10] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_70%)]",
    image: "/prob2.png",
  },
  {
    title: "Deposits that never arrive",
    description:
      "Asking for money buried in an email is awkward. Clients forget, you hesitate, and work starts before payment clears.",
    className: "lg:col-span-5 md:col-span-6 col-span-12",
    bgClass: "bg-[#0B0E14] bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_70%)]",
    image: "/prob3.png",
  },
  {
    title: "Tools that cost more than they solve",
    description:
      "Most client tools cover only part of the job, take days to set up, or charge extra for basics like your own domain. You end up paying for several and still gluing them together.",
    className: "lg:col-span-7 md:col-span-6 col-span-12",
    bgClass: "bg-[#0A0A0E] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08)_0%,rgba(0,0,0,0)_70%)]",
    image: "/prob4.png",
  },
];

export function Problem() {
  return (
    <section className="w-full bg-black py-24 md:py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-[1216px] w-full mb-16 relative z-10">
        <SectionHeader
          badge="Sound familiar?"
          title="Every freelancer knows this feeling."
          description="Four things that are quietly killing your business and your sanity."
        />
      </div>

      <div className="w-full max-w-[1216px] z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "relative min-h-[340px] md:h-[384px] rounded-[24px] border border-white/5 bg-clip-border overflow-hidden group hover:border-white/10",
                "transition-[border-color] duration-300",
                item.className,
                item.bgClass
              )}
            >
              {item.image && (
                <div 
                  className="absolute inset-x-0 top-0 bottom-[130px] md:bottom-[150px] z-10 pointer-events-none overflow-hidden rounded-t-[24px]"
                  style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              <div className="relative z-20 flex h-full w-full flex-col justify-end p-8 lg:p-10 pointer-events-none">
                <h3 className="text-xl md:text-[22px] font-medium leading-tight tracking-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] font-normal leading-relaxed tracking-wide text-white/60 md:mt-4">
                  {item.description}
                </p>
              </div>

              {/* Abstract hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background radial glow - using box-shadow instead of blur filter for GPU performance */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" 
        style={{ 
          boxShadow: "0 0 200px 200px rgba(88, 28, 135, 0.1)",
          willChange: "transform"
        }}
      />
    </section>
  );
}
