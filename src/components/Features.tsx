import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./ui/SectionHeader";
import { HandText, ArrowRight } from "./ui/Hand";
import { Screenshot, SIDE_LABEL, type Side } from "./ui/Screenshot";

interface View {
  image: string;
  alt: string;
}

interface TabContent {
  label: string;
  badgeIcon: string;
  heading: string;
  description: string;
  you: View;
  client: View;
  accentClass: string;
}

const TAB_DATA: TabContent[] = [
  {
    label: "Overview",
    badgeIcon: "🏠",
    heading: "One home for you. One link for your client.",
    description: "Your dashboard shows what needs you. Your client gets a portal in your brand, with no account or password.",
    you: { image: "/freelancer_dashboard.png", alt: "Your Pactrel dashboard: what needs you today, every project with what's been paid, upcoming payments and the kickoff call" },
    client: { image: "/client_portal.png", alt: "Your client's portal home for a coffee company's website redesign: a design round waiting for review, project phases, the deposit paid directly to the studio, and recent files" },
    accentClass: "from-indigo-500/20 to-blue-400/20",
  },
  {
    label: "Sign Agreement",
    badgeIcon: "✍️",
    heading: "Signed online, with a full audit trail. No printing, no scanning.",
    description: "Your contract or ours. Your client signs online, and both sides get a signed PDF with a full audit trail.",
    you: { image: "/freelancer_agreement.png", alt: "Your agreement with Northwind Coffee in Pactrel: eight parts already filled in from Pactrel's starter, with the option to use your own" },
    client: { image: "/sign_contract.png", alt: "Your client's portal: reading and signing the agreement" },
    accentClass: "from-blue-500/20 to-teal-400/20",
  },
  {
    label: "Get Paid",
    badgeIcon: "💳",
    heading: "Paid before work starts. Straight to you.",
    description: "Your client pays you directly by bank transfer or your own payment link. No fees, and Pactrel never touches the money.",
    you: { image: "/freelancer_payments.png", alt: "Setting the payment schedule in Pactrel: a $2,400 deposit and a $5,600 balance" },
    client: { image: "/deposit_collection.png", alt: "Your client's portal: paying the deposit straight to you by bank transfer" },
    accentClass: "from-purple-500/20 to-indigo-400/20",
  },
  {
    label: "Brief & Kickoff",
    badgeIcon: "👋",
    heading: "Everything you need, and the first call booked.",
    description: "Your client sends what you need, then books the kickoff from the times you've opened.",
    you: { image: "/freelancer_brief.png", alt: "The checklist for Northwind Coffee in Pactrel: what the client sends you, with due dates tied to project stages" },
    client: { image: "/client_intake.png", alt: "Your client's portal: answering the brief and booking the kickoff call" },
    accentClass: "from-pink-500/20 to-orange-400/20",
  },
  {
    label: "Run the Project",
    badgeIcon: "📊",
    heading: "The whole project, in the same portal.",
    description: "Updates, files, messages and approvals in one portal, right through to the final invoice.",
    you: { image: "/freelancer_project.png", alt: "Your project in Pactrel: deliverables approved, changes requested, and round 2 waiting for the client" },
    client: { image: "/project_tracking.png", alt: "Your client's portal: reviewing round 2 of the homepage design, with approve or ask for changes" },
    accentClass: "from-emerald-500/20 to-teal-400/20",
  },
];

// Preload all feature images so tab switches are instant
if (typeof window !== "undefined") {
  TAB_DATA.forEach((tab) => {
    for (const view of [tab.you, tab.client]) {
      const img = new Image();
      img.src = view.image;
    }
  });
}

export function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const [side, setSide] = useState<Side>("client");
  const duration = 6000; // 6 seconds per tab

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((current) => (current + 1) % TAB_DATA.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [activeTab, side]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const currentTab = TAB_DATA[activeTab];
  const currentView = currentTab[side];

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
                  className={`relative flex-1 shrink-0 last:col-span-2 md:last:col-span-1 py-2.5 rounded-xl md:rounded-full text-[13px] md:text-sm font-medium text-center cursor-pointer transition-colors overflow-hidden select-none outline-none px-2 md:px-0 whitespace-nowrap ${
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

        {/* Which side of the portal to show */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div role="tablist" aria-label="Whose screen" className="inline-flex p-1 rounded-full border border-white/10 bg-[#0A0A0A]">
            {(["client", "you"] as Side[]).map((s) => (
              <button
                key={s}
                role="tab"
                aria-selected={side === s}
                onClick={() => setSide(s)}
                className={`relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors cursor-pointer ${
                  side === s ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {side === s && (
                  <motion.span
                    layoutId="side-pill"
                    className={`absolute inset-0 rounded-full ${s === "client" ? "bg-[#312e81]" : "bg-white/[0.12]"}`}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{SIDE_LABEL[s]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full aspect-[4/3] sm:aspect-[16/9] bg-[#0A0A0A] rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden relative shadow-2xl z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentView.image}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full flex items-center justify-center p-0"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Background image to fill space with matching colors/gradient */}
              <img
                src={currentView.image}
                alt=""
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 pointer-events-none select-none rounded-3xl"
              />

              {/* Sharp foreground image displayed in full */}
              <Screenshot
                key={currentView.image}
                src={currentView.image}
                alt={currentView.alt}
                className="w-full h-full py-2 md:py-4 z-10"
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
                <HandText className="text-[20px] leading-none -rotate-[3deg]">
                  {currentTab.label}
                </HandText>
                <ArrowRight width={32} className="text-[#e5c1a5] order-first mt-1" />
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
