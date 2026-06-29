import { SectionHeader } from "./ui/SectionHeader";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const para1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1, 1, 0.3, 0.3]);
  const para2Opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.3, 0.3, 1, 1]);

  return (
    <section className="py-24 md:py-32 px-6 flex justify-center relative bg-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFF3F0]/20 to-transparent max-w-6xl mx-auto" />
      <div className="max-w-6xl w-full">
        <SectionHeader
          badge="The problem"
          title={
            <>
              Your onboarding process is{" "}
              <span className="text-white/65">costing you money and clients.</span>
            </>
          }
        />

        <div className="mt-20 w-full flex flex-col md:flex-row gap-12 md:gap-24 mb-20 items-start">
          <div className="flex-1 text-4xl sm:text-5xl md:text-[52px] font-medium text-white leading-[1.1] tracking-tight">
            Every new client means the same exhausting loop.
          </div>
          <div className="flex-1 text-lg text-white/65 leading-relaxed md:pt-4">
            Proposal in Gmail. Contract as a PDF attachment. Invoice in a separate app. Deposit chased on WhatsApp. Brief scattered across a Google Doc and three emails. By the time work actually starts, you've spent 3-5 hours on administration, not the work you're paid for.
          </div>
        </div>

        <div ref={containerRef} className="w-full space-y-12 border-t border-white/10 pt-16">
          <motion.p 
            style={{ opacity: para1Opacity }}
            className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white/90 leading-[1.3] tracking-tight max-w-5xl transition-colors duration-200"
          >
            Pactrel replaces that chaos with a single branded link. Your client lands on a clean page with your logo, reviews the proposal, signs the contract, pays their deposit, and submits a brief, all in one place, in one sitting. No logins. No passwords. No back-and-forth.
          </motion.p>
          <motion.p 
            style={{ opacity: para2Opacity }}
            className="text-3xl sm:text-4xl md:text-[40px] font-medium text-white leading-[1.2] tracking-tight transition-colors duration-200"
          >
            Stop chasing. Start working.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
