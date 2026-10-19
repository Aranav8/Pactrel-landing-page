import { useRef, useCallback, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
} from "motion/react";
import { GrainGradient } from "@paper-design/shaders-react";
import { HandText, ArrowSweep } from "./ui/Hand";
import { signupLinkProps } from "../lib/links";

// Drop the files into /public with these names
const LAUNCH_VIDEO = "/launch.mp4";
const LAUNCH_POSTER = "/launch-poster.jpg";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const isGradientInView = useInView(containerRef, { margin: "400px 0px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Cache the bounding rect to avoid layout thrashing on every mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    if (!rectRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
    const rect = rectRef.current;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  // Invalidate rect cache on scroll
  const handleScroll = useCallback(() => {
    rectRef.current = null;
  }, []);

  // Scroll parallax
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yMockup = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yFore = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Optimized separate motion values for native Framer Motion styling
  const midX = useTransform(smoothMouseX, (v) => v * 20);
  const foreX = useTransform(smoothMouseX, (v) => v * -10);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onScroll={handleScroll}
      className="relative pt-30 pb-20 overflow-hidden flex flex-col items-center min-h-[1200px] bg-black font-sans"
    >
      {/* Animated Noise Gradient Background (Optimized WebGL) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90 ph-no-capture">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/30 via-[#e5c1a5]/10 to-[#4f46e5]/30" />
        {isGradientInView && (
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
              scale={1.2}
              rotation={0}
              speed={1.2}
              colors={["#2563eb", "#e5c1a5", "#4f46e5"]}
            />
          </div>
        )}
        {/* Fade gradient out at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      </div>

      <style>{`
        @keyframes hero-gradient-spin {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="relative flex flex-col items-center text-center max-w-4xl px-6 z-10 w-full mt-10">
        {/* Small screens: annotation sits above the headline, no arrow */}
        <HandText className="lg:hidden mb-3 text-[20px] leading-none -rotate-2">
          set up in 30 minutes, not two weeks
        </HandText>

        <div className="relative inline-block mb-6">
          {/* Large screens: hand-drawn note to the left, arrow pointing at the headline */}
          <div className="hidden lg:flex absolute right-full -top-16 mr-1 flex-col items-end pointer-events-none z-20">
            <HandText className="text-[22px] leading-[1.05] w-[170px] text-left -rotate-[4deg]">
              set up in 30 minutes, not two weeks
            </HandText>
            <ArrowSweep width={80} className="text-[#e5c1a5] -mt-0.5" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[56px] text-[#FFF3F0] leading-[1.1] tracking-[-0.04em] font-medium text-balance">
            From “yes” to deposit paid,<br className="hidden sm:block" /> in one link.
          </h1>
        </div>

        <p className="text-[15px] sm:text-[17px] text-white/65 max-w-[720px] mb-8 md:mb-12 font-normal text-center text-balance mx-auto px-2 md:px-0 leading-relaxed">
          Your client accepts, signs, pays the deposit and books the kickoff. No login needed. The money goes straight to you, and the same portal runs the project to the final invoice.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24 w-full">
          <a 
            {...signupLinkProps()}
            className="w-full sm:w-auto px-8 py-3 rounded-[20px] bg-[#2563eb] text-white text-[14px] font-semibold hover:bg-[#1d4ed8] transition-colors inline-block text-center"
          >
            Start free
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="w-full sm:w-auto px-6 py-3 rounded-[20px] border border-[#2563eb]/60 bg-transparent flex items-center justify-center gap-2 text-white text-[14px] font-semibold hover:bg-[#2563eb]/15 hover:border-[#2563eb] transition-colors"
          >
            See how it works ↓
          </a>
        </div>

        {/* Launch video: click to play, with sound and controls */}
        <motion.div
          style={{ y: yMockup, willChange: "transform" }}
          className="w-full max-w-[960px] aspect-video rounded-[16px] shadow-2xl relative overflow-hidden z-20 border border-white/10 bg-[#0A0A0A]"
        >
          <video
            ref={videoRef}
            src={LAUNCH_VIDEO}
            poster={LAUNCH_POSTER}
            controls={playing}
            playsInline
            preload="metadata"
            onEnded={() => setPlaying(false)}
            className="w-full h-full object-cover"
          />
          {!playing && (
            <button
              type="button"
              onClick={() => { setPlaying(true); videoRef.current?.play(); }}
              aria-label="Play the Pactrel launch video"
              className="group absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <span className="w-20 h-20 rounded-full bg-[#2563eb] flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.5)] group-hover:scale-105 group-hover:bg-[#1d4ed8] transition-transform">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true" className="ml-1">
                  <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
                </svg>
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
