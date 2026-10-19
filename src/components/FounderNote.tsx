import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const text = "Freelance work starts with a strange tax. A proposal in one app, a contract as a PDF attachment, a deposit chased over WhatsApp, a brief scattered across a Google Doc. Half a day is gone before the real work begins. I built Pactrel so all of it happens in one place your client actually finishes.";

const words = text.split(" ");

// Pre-compute word ranges at module level (never changes)
const wordRanges = words.map((_, i) => ({
  start: i / words.length,
  end: (i + 1) / words.length,
}));

// Individual word component to properly call hooks at top level
function AnimatedWord({ word, scrollYProgress, start, end }: {
  word: string;
  scrollYProgress: any;
  start: number;
  end: number;
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="text-white">
      {word}
    </motion.span>
  );
}

export function FounderNote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"],
  });

  const footerOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <section className="py-32 md:py-48 px-6 flex justify-center relative bg-black">
      <div ref={containerRef} className="max-w-4xl w-full flex flex-col items-start text-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-8">
          Why we built this
        </div>

        <p className="text-2xl sm:text-3xl md:text-[40px] font-medium leading-[1.4] tracking-tight mb-12 w-full text-justify">
          {words.map((word, i) => (
            <span key={i}>
              <AnimatedWord
                word={word}
                scrollYProgress={scrollYProgress}
                start={wordRanges[i].start}
                end={wordRanges[i].end}
              />
              {i < words.length - 1 && " "}
            </span>
          ))}
        </p>

        <motion.div
          style={{ opacity: footerOpacity }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-white/20" />
          <p className="text-lg text-white/80 font-medium tracking-tight">
            Aranav, Founder of Pactrel
          </p>
        </motion.div>
      </div>
    </section>
  );
}
