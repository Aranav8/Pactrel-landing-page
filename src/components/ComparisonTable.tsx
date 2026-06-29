import { useState } from "react";
import { Check, X } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

export function ComparisonTable() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      description: "For solo freelancers",
      monthlyPrice: "$13",
      yearlyPrice: "$108",
      monthlyOriginal: "$19",
      yearlyOriginal: "$190",
      badge: "Waitlist price",
      cta: "Claim my spot →",
      description2: "5 active portals, e-signature, deposits, and white-label branding.",
      highlight: false,
      monthlySave: "Save $6/mo, rate locked at signup, pay at launch",
      yearlySave: "Save $82 vs launch price",
      yearlyCalc: "($9/mo · 2 months free)",
      finePrint: "Rate locked forever. Pay nothing until launch."
    },
    {
      name: "Pro",
      description: "For growing freelancers",
      monthlyPrice: "$19",
      yearlyPrice: "$162",
      monthlyOriginal: "$29",
      yearlyOriginal: "$290",
      badge: "Waitlist price",
      cta: "Claim my spot →",
      description2: "Unlimited portals, email automations, final invoices, and custom domains.",
      highlight: true,
      monthlySave: "Save $10/mo, rate locked at signup, pay at launch",
      yearlySave: "Save $128 vs launch price",
      yearlyCalc: "($13.50/mo · 2 months free)",
      copilotCallout: "✦ Copilot charges $149/mo for custom domain alone.",
      finePrint: "Rate locked forever. Pay nothing until launch."
    },
    {
      name: "Agency",
      description: "For small teams",
      monthlyPrice: "$32",
      yearlyPrice: "$270",
      monthlyOriginal: "$49",
      yearlyOriginal: "$490",
      badge: "Waitlist price",
      cta: "Claim my spot →",
      description2: "Everything in Pro plus 3 team seats, priority support, and integrations.",
      highlight: false,
      monthlySave: "Save $17/mo, rate locked at signup, pay at launch",
      yearlySave: "Save $220 vs launch price",
      yearlyCalc: "($22.50/mo · 2 months free)",
      finePrint: "Rate locked forever. Pay nothing until launch."
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
          description: "Competitors charge up to $149/mo for this",
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
    <section id="pricing" className="w-full bg-black text-[#FFF3F0] py-24 md:py-32 px-6 relative z-10 selection:bg-purple-500/30 selection:text-white border-t border-white/5">
      <div className="max-w-6xl w-full mx-auto grid gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-4">
          <div className="flex flex-col">
            <SectionHeader 
              badge="Pricing"
              title="Simple, flat pricing"
              description="No per-user fees, no hidden limits. Lock in your rate today. Prices go up permanently at launch. Pay nothing until we're live."
            />
            <p className="mt-5 text-[14px] text-[#7A7A7A] font-medium tracking-tight">
              Yearly plan includes 2 months free on top of the locked rate.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 p-1.5 mb-2 rounded-full bg-[#0a0a0a] border border-white/5 shadow-sm shrink-0">
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

        {/* Pricing Cards Full Width */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, idx) => (
            <div key={idx} className="relative h-full z-10 flex flex-col">
              <div
                className={`relative flex-1 rounded-2xl p-6 md:p-8 flex flex-col transition-colors duration-300 ${plan.highlight ? "bg-[#151515] border border-[#2563eb]/60 hover:border-[#2563eb]/80 shadow-[0_0_40px_rgba(37,99,235,0.25)]" : "bg-[#111] border border-white/5"}`}
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

                <div className="relative z-10 flex items-start justify-between gap-3 mb-6">
                  <div>
                    <div className="text-[21px] text-[#FFF3F0] tracking-tight font-semibold">
                      {plan.name}
                    </div>
                    <div className="text-[13px] text-[#7A7A7A] mt-1.5">
                      {plan.description}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 -rotate-[6deg] pt-1">
                    <span className={`font-mono text-[12px] font-medium tracking-tight ${plan.highlight ? 'text-[#e5c1a5]' : 'text-[#e5c1a5]/70'}`}>
                      {plan.badge}
                    </span>
                    <svg 
                      width="28" 
                      height="28" 
                      viewBox="0 0 100 100" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${plan.highlight ? 'text-[#e5c1a5]' : 'text-[#e5c1a5]/70'} translate-x-[-10px]`}
                    >
                      <path d="M 80 10 C 80 40 50 70 20 90" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <path d="M 40 90 L 20 90 L 20 70" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white/40 line-through text-[20px] font-medium tracking-tight">
                      {billing === "monthly" ? plan.monthlyOriginal : plan.yearlyOriginal}
                    </span>
                    <span className="text-[13px] text-white/40">
                      {billing === "monthly" ? "/mo" : "/yr"} launch price
                    </span>
                  </div>
                  <div className="flex items-end gap-1.5 mb-1.5">
                    <span className="text-[56px] leading-[1.1] tracking-[-0.06em] text-[#FFF3F0] font-medium">
                      {billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    {plan.monthlyPrice !== "Custom" && (
                      <span className="text-[15px] text-[#7A7A7A] mb-3 whitespace-nowrap">
                        {billing === "monthly" ? "/mo" : "/yr"}
                      </span>
                    )}
                  </div>
                  
                  <span className="text-[14px] font-semibold tracking-wide uppercase text-emerald-400 mb-2">
                    forever locked
                  </span>
                  
                  {billing === "yearly" && plan.yearlyCalc && (
                    <span className="text-[13px] text-[#7A7A7A] mb-2 font-mono">
                      {plan.yearlyCalc}
                    </span>
                  )}
                </div>

                <div className="relative z-10 text-[14px] text-white/70 leading-relaxed self-start min-h-[40px] mb-4">
                  {plan.description2}
                </div>
                
                {plan.copilotCallout && (
                  <div className="relative z-10 pl-4 py-1.5 border-l-2 border-[#e5c1a5]/40 text-[#e5c1a5]/90 text-[13px] leading-relaxed mb-4 italic">
                    {plan.copilotCallout}
                  </div>
                )}

                <div className="relative z-10 mt-auto pt-6 w-full flex flex-col items-center">
                  <a
                    href="#waitlist"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                      window.dispatchEvent(new CustomEvent('selectPlan', { detail: { plan: plan.name, billing: billing } }));
                    }}
                    className={`w-full min-h-[52px] px-4 rounded-full flex items-center justify-center text-[15px] font-semibold tracking-wide transition-colors inline-flex shadow-lg whitespace-nowrap ${plan.highlight ? "text-white bg-[#2563eb] border border-[#2563eb]/50 hover:bg-[#1d4ed8]" : "text-black bg-[#E5E5E5] border border-transparent hover:bg-white"}`}
                  >
                    {plan.cta}
                  </a>
                  <span className="text-[12px] text-[#7A7A7A] mt-4 font-medium text-center">
                    {plan.finePrint}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Matrix Container */}
        <div className="w-full bg-[#0a0a0a] border border-white/5 rounded-3xl p-2 md:p-2.5 overflow-hidden md:overflow-x-auto">
          <div className="w-full md:min-w-[880px] grid grid-cols-1 md:grid-cols-[minmax(260px,1.2fr)_repeat(3,minmax(220px,1fr))] gap-2 md:gap-3 items-stretch relative">
            
            {/* Matrix Column Headers */}
            <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-subgrid mb-2 md:mb-2">
               <div className="p-4 md:px-5 flex flex-col justify-end gap-2.5 relative z-10">
                 <div className="text-[21px] text-[#FFF3F0] tracking-tight font-medium">
                   Compare Features
                 </div>
                 <div className="text-[13px] text-[#7A7A7A] leading-relaxed max-w-[320px]">
                   A detailed breakdown of what each plan unlocks.
                 </div>
               </div>
               <div className="hidden md:flex items-end justify-center pb-4 text-[17px] font-medium text-white/80">Starter</div>
               <div className="hidden md:flex items-end justify-center pb-4 text-[17px] font-medium text-white/80">Pro</div>
               <div className="hidden md:flex items-end justify-center pb-4 text-[17px] font-medium text-white/80">Agency</div>
            </div>

            {/* Matrix Data */}
            {categories.map((category, cIdx) => (
              <div key={cIdx} className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-subgrid gap-y-2">
                <div className="col-span-1 md:col-span-4 mt-4 mb-1 z-10">
                  <div className="h-11 px-6 flex items-center rounded-full bg-[#111] border border-white/5">
                    <span className="text-[11px] font-medium tracking-[0.04em] uppercase text-[#FFF3F0]/60">
                      {category.name}
                    </span>
                  </div>
                </div>

                {category.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-subgrid relative group rounded-2xl md:rounded-none bg-[#111] md:bg-transparent border border-white/5 md:border-transparent mb-2 md:mb-0 pb-2 md:pb-0"
                  >
                    <div className="min-h-[72px] rounded-t-2xl md:rounded-2xl p-4 md:px-5 flex items-center relative z-10 bg-[#0a0a0a] border-b border-white/5 md:border-transparent md:group-hover:bg-[#111] md:group-hover:border-white/5 transition-colors">
                      <div className="grid gap-1 min-w-0 pr-4">
                        <div className="text-[15px] font-medium text-[#FFF3F0]">
                          {feature.name}
                        </div>
                        <div className="text-[13px] text-[#7A7A7A] mt-0.5 leading-snug">
                          {feature.description}
                        </div>
                      </div>
                    </div>

                    <div className="md:hidden flex items-center justify-between px-5 py-2.5 text-[13px] border-b border-white/5">
                      <span className="text-white/50 font-medium">Starter</span>
                      <div className="flex justify-end">{renderValue(feature.starter)}</div>
                    </div>
                    <div className="md:hidden flex items-center justify-between px-5 py-2.5 text-[13px] border-b border-white/5">
                      <span className="text-white/50 font-medium">Pro</span>
                      <div className="flex justify-end">{renderValue(feature.pro)}</div>
                    </div>
                    <div className="md:hidden flex items-center justify-between px-5 py-2.5 text-[13px]">
                      <span className="text-white/50 font-medium">Agency</span>
                      <div className="flex justify-end">{renderValue((feature as any).agency)}</div>
                    </div>

                    <div className="hidden md:flex min-h-[72px] rounded-2xl p-3 items-center justify-center text-center bg-[#111] border border-transparent group-hover:bg-[#151515] group-hover:border-white/5 transition-colors relative z-10">
                      {renderValue(feature.starter)}
                    </div>

                    <div className="hidden md:flex min-h-[72px] rounded-2xl p-3 items-center justify-center text-center bg-[#111] border border-transparent group-hover:bg-[#151515] group-hover:border-white/5 transition-colors relative z-10">
                      {renderValue(feature.pro)}
                    </div>

                    <div className="hidden md:flex min-h-[72px] rounded-2xl p-3 items-center justify-center text-center bg-[#111] border border-transparent group-hover:bg-[#151515] group-hover:border-white/5 transition-colors relative z-10">
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
