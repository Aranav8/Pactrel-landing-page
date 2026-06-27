import { useState } from "react";
import { Check, X } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

export function ComparisonTable() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      description: "For solo freelancers",
      monthlyPrice: "$11",
      yearlyPrice: "$9",
      monthlyOriginal: "$19",
      yearlyOriginal: "$15",
      badge: "Waitlist price",
      cta: "Claim my spot →",
      description2:
        "5 active portals, e-signature, deposits, and white-label branding.",
      highlight: false,
      monthlyAnnotation: "cheaper than 3 lattes!",
      yearlyAnnotation: "2 months free!",
    },
    {
      name: "Pro",
      description: "For growing freelancers",
      monthlyPrice: "$17",
      yearlyPrice: "$14",
      monthlyOriginal: "$29",
      yearlyOriginal: "$24",
      badge: "Waitlist price",
      cta: "Claim my spot →",
      description2:
        "Unlimited portals, email automations, final invoices, and custom domains.",
      highlight: true,
      monthlyAnnotation: "less than a decent lunch!",
      yearlyAnnotation: "2 months free!",
    },
    {
      name: "Agency",
      description: "For small teams",
      monthlyPrice: "$29",
      yearlyPrice: "$24",
      monthlyOriginal: "$49",
      yearlyOriginal: "$40",
      badge: "Waitlist price",
      cta: "Claim my spot →",
      description2:
        "Everything in Pro plus 3 team seats, priority support, and integrations.",
      highlight: false,
      monthlyAnnotation: "less than a team pizza!",
      yearlyAnnotation: "2 months free!",
    },
  ];

  const categories = [
    {
      name: "Core Features",
      features: [
        {
          name: "Active Portals",
          description: "Number of simultaneous client portals",
          free: "1",
          starter: "5",
          pro: "Unlimited",
          agency: "Unlimited",
        },
        {
          name: "E-signature + proposals",
          description: "Built-in, legally binding",
          free: true,
          starter: true,
          pro: true,
          agency: true,
        },
        {
          name: "Deposit collection",
          description: "Collected automatically at signing",
          free: false,
          starter: true,
          pro: true,
          agency: true,
        },
        {
          name: "White-label branding",
          description: "Your logo. Your colors. Not ours.",
          free: true,
          starter: true,
          pro: true,
          agency: true,
        },
      ],
    },
    {
      name: "Growth & Automation",
      features: [
        {
          name: "Email automations",
          description: "Auto-reminders for pending signatures and payments",
          free: false,
          starter: false,
          pro: true,
          agency: true,
        },
        {
          name: "Final invoice & payments",
          description: "Collect the remaining balance at project close",
          free: false,
          starter: false,
          pro: true,
          agency: true,
        },
        {
          name: "Custom domain",
          description: "Portals run on your own URL",
          free: false,
          starter: false,
          pro: true,
          agency: true,
        },
        {
          name: "Zapier integration",
          description: "Connect to 5,000+ other apps",
          free: false,
          starter: false,
          pro: false,
          agency: true,
        },
      ],
    },
    {
      name: "Team & Support",
      features: [
        {
          name: "Team seats",
          description: "Invite a VA, co-founder, or team member",
          free: "1",
          starter: "1",
          pro: "1",
          agency: "3",
        },
        {
          name: "Analytics dashboard",
          description: "Track revenue, client activity, and conversion",
          free: false,
          starter: false,
          pro: false,
          agency: true,
        },
        {
          name: "Support",
          description: "Get help when you need it",
          free: "Standard",
          starter: "Standard",
          pro: "Standard",
          agency: "Priority",
        },
      ],
    },
  ];

  const renderValue = (val: any) => {
    if (typeof val === "boolean") {
      return val ? (
        <div className="inline-flex items-center justify-center gap-2.5 w-full">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/10 text-green-400">
            <Check className="w-3.5 h-3.5" strokeWidth={3} />
          </span>
          <span className="text-[15px] text-[#FFF3F0]">Included</span>
        </div>
      ) : (
        <div className="inline-flex items-center justify-center gap-2.5 w-full">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/10 text-red-500">
            <X className="w-3.5 h-3.5" strokeWidth={3} />
          </span>
          <span className="text-[15px] text-[#FFF3F0]/60">Not included</span>
        </div>
      );
    }
    if (typeof val === "object" && val.style === "purple") {
      return (
        <div className="inline-flex items-center justify-center px-3 py-1.5 min-h-[32px] rounded-full text-[11px] font-medium tracking-[0.04em] uppercase text-purple-400 bg-purple-500/10 border border-purple-500/10 whitespace-nowrap">
          {val.text}
        </div>
      );
    }
    return (
      <span className="text-[15px] text-[#FFF3F0] font-medium">{val}</span>
    );
  };

  return (
    <section className="w-full bg-black text-[#FFF3F0] py-24 md:py-32 px-6 relative z-10 selection:bg-purple-500/30 selection:text-white border-t border-white/5">
      <div className="max-w-6xl w-full mx-auto grid gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-4">
          <SectionHeader 
            badge="Pricing"
            title="Simple, flat pricing"
            description="No per-user fees, no hidden limits. Secure your spot on the waitlist to lock in early-access pricing."
          />
          <div className="inline-flex items-center gap-1.5 p-1.5 mb-2 rounded-full bg-[#0a0a0a] border border-white/5 shadow-sm">
            <button
              onClick={() => setBilling("monthly")}
              className={`relative min-w-[110px] min-h-[42px] px-4 rounded-full text-[15px] transition-colors duration-200 ${billing === "monthly" ? "font-semibold text-white" : "font-medium text-[#7A7A7A] hover:text-[#FFF3F0]"}`}
            >
              {billing === "monthly" && (
                <div className="absolute inset-0 bg-[#1f1f1f] border border-white/5 rounded-full shadow-[inset_0_1px_rgba(255,255,255,0.05)]" />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`relative min-w-[110px] min-h-[42px] px-4 rounded-full text-[15px] transition-colors duration-200 ${billing === "yearly" ? "font-semibold text-white" : "font-medium text-[#7A7A7A] hover:text-[#FFF3F0]"}`}
            >
              {billing === "yearly" && (
                <div className="absolute inset-0 bg-[#1f1f1f] border border-white/5 rounded-full shadow-[inset_0_1px_rgba(255,255,255,0.05)]" />
              )}
              <span className="relative z-10">Yearly</span>
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="w-full bg-[#0a0a0a] border border-white/5 rounded-3xl p-2.5 overflow-x-auto">
          <div className="min-w-[880px] grid grid-cols-[minmax(260px,1.2fr)_repeat(3,minmax(220px,1fr))] gap-3 items-stretch relative">
            {/* Headers */}
            <div className="p-4 md:px-5 flex flex-col justify-end gap-2.5 relative z-10 h-full">
              <div className="text-[21px] text-[#FFF3F0] tracking-tight font-medium">
                Features
              </div>
              <div className="text-[13px] text-[#7A7A7A] leading-relaxed max-w-[320px]">
                Compare what each plan unlocks at a glance.
              </div>
            </div>

            {plans.map((plan, idx) => (
              <div key={idx} className="relative h-full z-10">
                <div
                  className={`relative min-h-[268px] h-full rounded-2xl p-6 flex flex-col gap-3.5 transition-colors duration-300 ${plan.highlight ? "bg-[#151515] border border-[#2563eb]/60 hover:border-[#2563eb]/80 shadow-[0_0_40px_rgba(37,99,235,0.25)]" : "bg-[#111] border border-white/5"}`}
                >
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    {plan.highlight && (
                      <>
                        <div className="absolute inset-0 opacity-100" style={{ background: "radial-gradient(ellipse at 100% 40%, rgba(37,99,235,0.25) 0%, transparent 75%)" }} />
                        <div className="absolute top-[1px] left-0 right-0 h-[1.5px] rounded-full overflow-hidden">
                          <div className="absolute top-0 bottom-0 left-[-46%] w-[46%] h-full bg-gradient-to-r from-[#2563eb]/0 via-[#2563eb] to-[#2563eb]/0 opacity-100 blur-[1px]" />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[21px] text-[#FFF3F0] tracking-tight">
                        {plan.name}
                      </div>
                      <div className="text-[13px] text-[#7A7A7A] mt-1.5">
                        {plan.description}
                      </div>
                    </div>
                    <div
                      className={`px-3 flex items-center justify-center min-h-[30px] rounded-full text-[11px] font-medium tracking-[0.04em] uppercase whitespace-nowrap ${plan.highlight ? "text-[#60a5fa] bg-[#2563eb]/10 border border-[#2563eb]/20" : "text-[#60a5fa] bg-[#2563eb]/10 border border-[#2563eb]/20"}`}
                    >
                      {plan.badge}
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col mt-2">
                    <span className="text-white/40 line-through text-lg font-medium tracking-tight mb-0.5">
                      {billing === "monthly" ? plan.monthlyOriginal : plan.yearlyOriginal}
                    </span>
                    <div className="flex items-end gap-1.5">
                      <span className="text-[52px] leading-[1.1] tracking-[-0.06em] text-[#FFF3F0] font-medium">
                        {billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      {plan.monthlyPrice !== "Custom" && (
                        <span className="text-[15px] text-[#7A7A7A] mb-2.5 whitespace-nowrap">
                          /mo
                        </span>
                      )}
                    </div>

                    {/* Annotations */}
                    {idx === 0 && (
                      <div className="absolute right-0 top-1 flex-col items-center hidden lg:flex pointer-events-none z-20 w-[90px]">
                        <span className="text-[11px] leading-tight text-center font-medium text-[#e5c1a5] -rotate-[6deg] mb-1 font-mono tracking-tight">
                          {billing === "monthly" ? plan.monthlyAnnotation : plan.yearlyAnnotation}
                        </span>
                        <svg 
                          width="35" 
                          height="28" 
                          viewBox="0 0 45 35" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="text-[#e5c1a5] mr-4 overflow-visible"
                        >
                          <path d="M42 4 C 30 12 20 28 4 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 20 L 4 28 L 12 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="absolute right-0 top-1 flex-col items-center hidden lg:flex pointer-events-none z-20 w-[90px]">
                        <span className="text-[11px] leading-tight text-center font-medium text-[#e5c1a5] -rotate-[8deg] mb-1 font-mono tracking-tight">
                          {billing === "monthly" ? plan.monthlyAnnotation : plan.yearlyAnnotation}
                        </span>
                        <svg 
                          width="35" 
                          height="28" 
                          viewBox="0 0 45 35" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="text-[#e5c1a5] mr-4 overflow-visible"
                        >
                          <path d="M42 4 C 30 12 20 28 4 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 20 L 4 28 L 12 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                    {idx === 2 && (
                      <div className="absolute right-0 top-1 flex-col items-center hidden xl:flex pointer-events-none z-20 w-[90px]">
                        <span className="text-[11px] leading-tight text-center font-medium text-[#e5c1a5] -rotate-[6deg] mb-1 font-mono tracking-tight">
                          {billing === "monthly" ? plan.monthlyAnnotation : plan.yearlyAnnotation}
                        </span>
                        <svg 
                          width="35" 
                          height="28" 
                          viewBox="0 0 45 35" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="text-[#e5c1a5] mr-4 overflow-visible"
                        >
                          <path d="M42 4 C 30 12 20 28 4 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 20 L 4 28 L 12 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 text-[13px] text-[#7A7A7A] leading-relaxed self-start min-h-[40px] mt-2">
                    {plan.description2}
                  </div>

                  <div className="relative z-10 self-end mt-auto w-full pt-4">
                    <a
                      href="#waitlist"
                      onClick={() => window.dispatchEvent(new CustomEvent('selectPlan', { detail: plan.name }))}
                      className={`w-full min-h-[48px] px-4 rounded-full flex items-center justify-center text-[15px] font-medium tracking-tight transition-colors inline-flex ${plan.highlight ? "text-white bg-[#2563eb] border border-[#2563eb]/50 hover:bg-[#1d4ed8]" : "text-black bg-[#E5E5E5] border border-transparent hover:bg-white"}`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Matrix Data */}
            {categories.map((category, cIdx) => (
              <div key={cIdx} className="col-span-4 grid grid-cols-subgrid gap-y-2">
                <div className="col-span-4 mt-6 mb-1 z-10">
                  <div className="h-11 px-6 flex items-center rounded-full bg-[#111] border border-white/5">
                    <span className="text-[11px] font-medium tracking-[0.04em] uppercase text-[#FFF3F0]/60">
                      {category.name}
                    </span>
                  </div>
                </div>

                {category.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="col-span-4 grid grid-cols-subgrid relative group"
                  >
                    <div className="min-h-[72px] rounded-2xl p-4 md:px-5 flex items-center relative z-10 bg-[#0a0a0a] border border-transparent group-hover:bg-[#111] group-hover:border-white/5 transition-colors">
                      <div className="grid gap-1 min-w-0 pr-4">
                        <div className="text-[15px] font-medium text-[#FFF3F0]">
                          {feature.name}
                        </div>
                        <div className="text-[13px] text-[#7A7A7A] mt-0.5 leading-snug">
                          {feature.description}
                        </div>
                      </div>
                    </div>

                    <div className="min-h-[72px] rounded-2xl p-3 flex left items-center justify-center text-center bg-[#111] border border-transparent group-hover:bg-[#151515] group-hover:border-white/5 transition-colors relative z-10">
                      {renderValue(feature.starter)}
                    </div>

                    <div className="min-h-[72px] rounded-2xl p-3 flex items-center justify-center text-center bg-[#111] border border-transparent group-hover:bg-[#151515] group-hover:border-white/5 transition-colors relative z-10">
                      {renderValue(feature.pro)}
                    </div>

                    <div className="min-h-[72px] rounded-2xl p-3 flex items-center justify-center text-center bg-[#111] border border-transparent group-hover:bg-[#151515] group-hover:border-white/5 transition-colors relative z-10">
                      {renderValue((feature as any).agency)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
