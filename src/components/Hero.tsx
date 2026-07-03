import { useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";
import { GrainGradient } from "@paper-design/shaders-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

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
  const mockupX = useTransform(smoothMouseX, (v) => v * -5);
  const mockupRotateX = useTransform(smoothMouseY, (v) => v * -10);
  const mockupRotateY = useTransform(smoothMouseX, (v) => v * 10);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onScroll={handleScroll}
      className="relative pt-30 pb-20 overflow-hidden flex flex-col items-center min-h-[1200px] bg-black font-sans"
    >
      {/* Animated Noise Gradient Background (Optimized WebGL) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90 ph-no-capture">
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
        <div className="absolute -top-[100px] sm:-top-[110px] md:-top-[90px] lg:-top-6 left-[12%] sm:left-[15%] md:left-[8%] lg:-left-32 flex flex-col items-center gap-0 -rotate-[6deg] md:-rotate-[8deg] lg:-rotate-[10deg] pointer-events-none z-20 scale-[0.6] sm:scale-75 md:scale-[0.85] lg:scale-100 origin-bottom-left opacity-90 md:opacity-100">
          <span className="text-[#e5c1a5] font-mono text-[13px] font-medium tracking-tight max-w-[180px] text-center leading-relaxed">
            the Dubsado that takes 30 mins to set up, not 2 weeks
          </span>
          <svg 
            width="70" 
            height="70" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="text-[#e5c1a5] translate-x-12 md:translate-x-20 lg:translate-x-24 translate-y-[-15px] md:translate-y-[-5px]"
          >
            <path d="M 10 20 Q 70 -10, 85 90" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M 65 75 L 85 90 L 95 65" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-[56px] text-[#FFF3F0] mb-6 leading-[1.3em] tracking-[-0.04em] font-medium">
          Stop losing hours to client onboarding chaos.
        </h1>

        <p className="text-[15px] sm:text-[16px] text-white/65 max-w-2xl mb-8 md:mb-12 font-normal text-center mx-auto px-2 md:px-0">
          Send one link. Your client signs the contract, pays the deposit, and submits their brief without creating an account. Setup takes 30 minutes, not two weeks.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24 w-full">
          <a 
            href="#waitlist" 
            onClick={(e) => { e.preventDefault(); document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="w-full sm:w-auto px-8 py-3 rounded-[20px] bg-[#FAE6E1] text-[#000000] text-[14px] font-semibold hover:bg-[#E8D5CC] transition-colors inline-block text-center"
          >
            Claim my spot
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="w-full sm:w-auto px-6 py-3 rounded-[20px] border border-white/20 bg-transparent flex items-center justify-center gap-2 text-white text-[14px] font-semibold hover:bg-white/10 transition-colors"
          >
            See how it works ↓
          </a>
        </div>

        {/* Hero Mockup */}
        <motion.div
          style={{ y: yMockup, x: mockupX, rotateX: mockupRotateX, rotateY: mockupRotateY, willChange: "transform" }}
          className="w-full max-w-[960px] rounded-t-[12px] shadow-2xl relative overflow-hidden z-20 border-t border-l border-r border-[#171717]"
        >
          <img
            src="/hero.png"
            alt="Hero Interface"
            className="w-full h-auto object-cover"
            decoding="async"
          />
          {/* Fade over the mockup bottom so it fades into darkness */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent pointer-events-none z-0" />
        </motion.div>
      </div>
    </section>
  );
}
