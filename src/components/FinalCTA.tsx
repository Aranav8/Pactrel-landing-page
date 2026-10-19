import { useRef } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { useInView } from "motion/react";
import { signupLinkProps } from "../lib/links";

function GradientBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "400px 0px" });

  return (
    <div ref={ref} className="absolute inset-0 z-0 ph-no-capture overflow-hidden rounded-2xl md:rounded-[32px]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#222222]/80 via-[#111111]/80 to-[#1a1a1a]/80" />
      {isInView && (
        <div className="w-full h-full absolute inset-0">
          <GrainGradient
            style={{ height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}
            colorBack="#000000"
            softness={0.76}
            intensity={0.45}
            noise={0.03}
            shape="corners"
            offsetX={0}
            offsetY={0}
            scale={1}
            rotation={0}
            speed={1.2}
            colors={["#222222", "#111111", "#1a1a1a"]}
          />
        </div>
      )}
    </div>
  );
}

// Closing call to action above the footer.
export function FinalCTA() {
  return (
    <section id="get-started" className="flex flex-col items-center justify-center py-24 md:py-32 px-6">
      <div className="max-w-6xl w-full border border-white/5 rounded-2xl md:rounded-[32px] p-6 py-16 md:p-20 relative overflow-hidden flex flex-col items-center z-0 bg-[#0a0a0a]/50">
        <GradientBackground />

        <div className="flex w-full flex-col items-center max-w-2xl relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[56px] leading-[1.1] tracking-[-0.04em] text-[#FFF3F0] mb-5 text-balance">
            Your next client could sign and pay this week.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-white/65 mb-10 text-balance">
            Set up in 30 minutes. Free for your first 3 projects, no card needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              {...signupLinkProps()}
              className="w-full sm:w-auto px-8 py-3 rounded-[20px] bg-[#2563eb] text-white text-[14px] font-semibold hover:bg-[#1d4ed8] transition-colors inline-block text-center"
            >
              Start free
            </a>
            <a
              href="mailto:hello@pactrel.com"
              className="w-full sm:w-auto px-6 py-3 rounded-[20px] border border-[#2563eb]/60 bg-transparent flex items-center justify-center text-white text-[14px] font-semibold hover:bg-[#2563eb]/15 hover:border-[#2563eb] transition-colors"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
