import { motion } from "motion/react";
import { GrainGradient } from "@paper-design/shaders-react";

export function CTA() {
  return (
    <section className="relative pt-32 pb-64 overflow-hidden flex flex-col items-center border-t border-white/5 bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
      </div>

      {/* Hero-type Grain Gradient Background (Optimized) */}
      <div className="absolute bottom-0 left-0 right-0 z-0 h-[400px] pointer-events-none opacity-60">
        <div className="absolute top-0 left-0 w-[50%] h-[50%] origin-top-left scale-[200%]">
          <GrainGradient
            style={{ height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}
            colorBack="#000000"
            softness={0.85}
            intensity={0.4}
            noise={0.035}
            shape="corners"
            offsetX={0}
            offsetY={0}
            scale={1.5}
            rotation={0}
            speed={1.0}
            colors={["#2563eb", "#e5c1a5", "#4f46e5"]}
          />
        </div>
        {/* Fade gradient out at the top to blend into the black background */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black to-transparent z-10" />
      </div>
    </section>
  );
}
