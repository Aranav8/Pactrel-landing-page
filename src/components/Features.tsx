import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./ui/SectionHeader";

interface TabContent {
  label: string;
  badgeIcon: string;
  heading: string;
  description: string;
  image: string;
  accentClass: string;
}

const TAB_DATA: TabContent[] = [
  {
    label: "Sign Agreement",
    badgeIcon: "✍️",
    heading: "Legally binding. No printing, no scanning, no screenshots.",
    description: "Upload your own contract (PDF or Word) or use the built-in wording. Clients type their signature, and Pactrel records the time, IP and a full audit trail. Both sides can download the signed agreement as a PDF.",
    image: "/sign_contract.png",
    accentClass: "from-blue-500/20 to-teal-400/20",
  },
  {
    label: "Get Paid",
    badgeIcon: "💳",
    heading: "Paid before work starts. Straight to you.",
    description: "After signing, the client sees a clear step to pay your deposit by bank transfer or your own payment link (Stripe, PayPal.me, Wise). The money goes straight to you, never through Pactrel. Split big projects into instalments, send the final invoice from the same portal, and mark each payment received. No transaction fees.",
    image: "/deposit_collection.png",
    accentClass: "from-purple-500/20 to-indigo-400/20",
  },
  {
    label: "Client Brief",
    badgeIcon: "👋",
    heading: "Get everything you need, before the first call.",
    description: "After the deposit, clients fill in your custom brief with goals, references, and brand assets all in one place. No more hunting through email threads to find a logo.",
    image: "/client_intake.png",
    accentClass: "from-pink-500/20 to-orange-400/20",
  },
  {
    label: "Run the Project",
    badgeIcon: "📊",
    heading: "The whole project, in the same link.",
    description: "After kickoff, the portal becomes the project: files, messages, deliverables your client approves, and a shared calendar. Scope changed? Send a change order they sign. Clients always know where things stand without asking.",
    image: "/project_tracking.png",
    accentClass: "from-emerald-500/20 to-teal-400/20",
  },
];

// Preload all feature images so tab switches are instant
if (typeof window !== "undefined") {
  TAB_DATA.forEach((tab) => {
    const img = new Image();
    img.src = tab.image;
  });
}

export function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const duration = 6000; // 6 seconds per tab

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((current) => (current + 1) % TAB_DATA.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const currentTab = TAB_DATA[activeTab];

  return (
    <section id="features" className="py-24 md:py-32 px-6 flex justify-center bg-black">
      <div className="max-w-7xl w-full">
        <div className="mb-16">
          <SectionHeader
            badge="Core Features"
            title="From proposal to final invoice in one place."
            description="Pactrel handles the whole client journey, from the first proposal to the last payment, so you can skip the admin and get to the work."
          />
        </div>

        {/* Feature Nav */}
        <div className="w-full mb-8 md:mb-12">
          <div className="grid grid-cols-2 md:flex items-center w-full gap-1 md:gap-0 border border-white/10 rounded-2xl md:rounded-full p-1.5 bg-[#171717] shadow-sm">
            {TAB_DATA.map((tab, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={tab.label}
                  onClick={() => handleTabClick(idx)}
                  className={`relative flex-1 shrink-0 py-2.5 rounded-xl md:rounded-full text-[13px] md:text-sm font-medium text-center cursor-pointer transition-colors overflow-hidden select-none outline-none px-2 md:px-0 whitespace-nowrap ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-white/[0.08] rounded-xl md:rounded-full" />
                      <motion.div
                        key={activeTab}
                        className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-white/60"
                        initial={{ width: "5%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: duration / 1000, ease: "linear" }}
                      />
                    </>
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full aspect-[4/3] sm:aspect-[16/9] bg-[#0A0A0A] rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden relative shadow-2xl z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentTab.image}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full flex items-center justify-center p-0"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Background image to fill space with matching colors/gradient */}
              <img
                src={currentTab.image}
                alt=""
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 pointer-events-none select-none rounded-3xl"
              />
              
              {/* Sharp foreground image displayed in full */}
              <img
                src={currentTab.image}
                alt={currentTab.label}
                decoding="async"
                className="relative w-full h-full object-contain rounded-2xl py-2 md:py-4 px-0 z-10"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature Copy */}
        <div className="mt-8 max-w-3xl mx-auto text-center h-48 sm:h-40 md:h-32 px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4 relative right-4">
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 45 35" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="text-[#e5c1a5] rotate-180 -scale-y-100"
                >
                  <path d="M42 4 C 30 12 20 28 4 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20 L 4 28 L 12 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#e5c1a5] font-mono text-[11px] font-medium tracking-tight -rotate-2">
                  {currentTab.label}
                </span>
              </div>
              <h3 className="text-2xl font-medium text-white mb-3">
                {currentTab.heading}
              </h3>
              <p className="text-white/65 text-[15px] leading-relaxed">
                {currentTab.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
