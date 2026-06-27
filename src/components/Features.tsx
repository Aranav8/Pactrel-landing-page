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
    label: "Sign Contract",
    badgeIcon: "✍️",
    heading: "Legally binding. No printing, no PDFs, no screenshots.",
    description: "Upload your own contract or use a template. Clients review the scope and sign in one click - timestamped, IP-verified, and stored automatically. Legally binding in the US and EU.",
    image: "/sign_contract.png",
    accentClass: "from-blue-500/20 to-teal-400/20",
  },
  {
    label: "Collect Deposit",
    badgeIcon: "💳",
    heading: "Deposits collected automatically. Before work starts.",
    description: "Pactrel collects the deposit the moment the contract is signed - no separate invoice, no follow-up. They pay via card or bank transfer. You get notified when it clears. Work starts only when you're covered.",
    image: "/deposit_collection.png",
    accentClass: "from-purple-500/20 to-indigo-400/20",
  },
  {
    label: "Client Intake",
    badgeIcon: "👋",
    heading: "Get everything you need, before the first call.",
    description: "After payment, clients fill in your custom brief - goals, references, and brand assets all in one place. No more hunting through email threads to find a logo.",
    image: "/client_intake.png",
    accentClass: "from-pink-500/20 to-orange-400/20",
  },
  {
    label: "Project Tracking",
    badgeIcon: "📊",
    heading: "Your client always knows what's happening.",
    description: "Share a live project page that shows exactly where things stand. Add updates in seconds. Clients feel informed without you having to answer 'what's the status?' emails.",
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
    <section className="py-24 md:py-32 px-6 flex justify-center bg-black">
      <div className="max-w-7xl w-full">
        <div className="mb-16">
          <SectionHeader
            badge="Core Features"
            title="From proposal to project - in one place."
            description="Pactrel handles the full client journey so you can skip the admin and get to the work."
          />
        </div>

        {/* Feature Nav - removed backdrop-blur (extremely expensive filter) */}
        <div className="w-full mb-12">
          <div className="flex items-center w-full border border-white/10 rounded-full p-1.5 bg-[#171717] shadow-sm">
            {TAB_DATA.map((tab, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={tab.label}
                  onClick={() => handleTabClick(idx)}
                  className={`relative flex-1 py-2.5 rounded-full text-sm font-medium text-center cursor-pointer transition-colors overflow-hidden select-none outline-none ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-white/[0.08] rounded-full" />
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

        <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-[#0A0A0A] rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden relative shadow-2xl z-0">
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
        <div className="mt-12 max-w-3xl mx-auto text-center h-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-medium text-white mb-4">
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
