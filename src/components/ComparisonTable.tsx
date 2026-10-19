import { planSignupUrl } from "../lib/links";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { HandText, ArrowDown } from "./ui/Hand";
import { SectionHeader } from "./ui/SectionHeader";

export function ComparisonTable() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      description: "Send a real portal and see",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      monthlyOriginal: "",
      yearlyOriginal: "",
      badge: "Free plan",
      cta: "Start free →",
      description2: "Proposals, e-signature, deposits, briefs, files and the final invoice, end to end, on up to 3 projects.",
      highlight: false,
      yearlyCalc: "",
      finePrint: "3 projects sent, ever. Shows a Powered by Pactrel badge."
    },
    {
      name: "Starter",
      description: "Your whole client list, under your name",
      monthlyPrice: "$12",
      yearlyPrice: "$120",
      monthlyOriginal: "$19",
      yearlyOriginal: "$190",
      badge: "Founding price",
      cta: "Get started →",
      description2: "10 active projects, no Pactrel badge, automatic reminders and change orders. Everything in Free.",
      highlight: false,
      yearlyCalc: "($10/mo · 2 months free)",
      finePrint: "Founding price for the first 100 customers, kept while you stay subscribed."
    },
    {
      name: "Pro",
      description: "Most popular · The admin runs itself",
      monthlyPrice: "$25",
      yearlyPrice: "$250",
      monthlyOriginal: "$39",
      yearlyOriginal: "$390",
      badge: "Founding price",
      cta: "Get started →",
      description2: "Unlimited projects, 2 seats, recurring invoices, analytics, your own domain and required 2FA. Everything in Starter.",
      highlight: true,
      yearlyCalc: "($20.83/mo · 2 months free)",
      finePrint: "Founding price for the first 100 customers, kept while you stay subscribed."
    },
    {
      name: "Agency",
      description: "Your team, in one workspace",
      monthlyPrice: "$49",
      yearlyPrice: "$490",
      monthlyOriginal: "$79",
      yearlyOriginal: "$790",
      badge: "By request",
      cta: "Talk to us →",
      href: "mailto:hello@pactrel.com?subject=Pactrel%20Agency",
      description2: "Everything in Pro plus 3 seats (more available), up to 5 brands, email from your own domain and priority support.",
      highlight: false,
      yearlyCalc: "($40.83/mo · 2 months free)",
      finePrint: "Set up with you by hand for now. Founding price applies."
    },
  ];

  const columns = [
    { key: "free", label: "Free" },
    { key: "starter", label: "Starter" },
    { key: "pro", label: "Pro" },
    { key: "agency", label: "Agency" },
  ] as const;

  type Value = boolean | string;
  type Feature = { name: string; description: string; free: Value; starter: Value; pro: Value; agency: Value };

  const categories: { name: string; features: Feature[] }[] = [
    {
      name: "Every project, end to end",
      features: [
        {
          name: "Projects",
          description: "Free counts projects sent; paid plans count active ones",
          free: "3 sent, ever",
          starter: "10 active",
          pro: "Unlimited",
          agency: "Unlimited",
        },
        {
          name: "Proposals + e-signature",
          description: "Typed signature with timestamp, IP and audit trail. Signed PDF download.",
          free: true,
          starter: true,
          pro: true,
          agency: true,
        },
        {
          name: "Deposits, payment plans + final invoice",
          description: "Clear pay-this steps. Clients pay you directly. No transaction fees.",
          free: true,
          starter: true,
          pro: true,
          agency: true,
        },
        {
          name: "Briefs, files, messages + approvals",
          description: "Deliverables the client approves, plus a shared project calendar",
          free: true,
          starter: true,
          pro: true,
          agency: true,
        },
        {
          name: "Storage",
          description: "For files shared in your portals",
          free: "512 MB",
          starter: "5 GB",
          pro: "50 GB",
          agency: "200 GB",
        },
        {
          name: "Saved templates",
          description: "Reuse your proposals and project setups",
          free: "1",
          starter: "5",
          pro: "Unlimited",
          agency: "Unlimited",
        },
        {
          name: "People on each client portal",
          description: "Your client plus the colleagues they invite to sign in",
          free: "2",
          starter: "3",
          pro: "6",
          agency: "Any number",
        },
        {
          name: "No \"Powered by Pactrel\" badge",
          description: "Portals carry only your name",
          free: false,
          starter: true,
          pro: true,
          agency: true,
        },
      ],
    },
    {
      name: "Automation & growth",
      features: [
        {
          name: "Automatic reminders",
          description: "Chase clients for you, so you don't have to",
          free: false,
          starter: true,
          pro: true,
          agency: true,
        },
        {
          name: "Recurring invoices",
          description: "Retainers that invoice themselves",
          free: false,
          starter: false,
          pro: true,
          agency: true,
        },
        {
          name: "Change orders",
          description: "Scope, price or timeline changes the client signs",
          free: false,
          starter: true,
          pro: true,
          agency: true,
        },
        {
          name: "Analytics",
          description: "Win rate, time to sign, pipeline and payments",
          free: false,
          starter: false,
          pro: true,
          agency: true,
        },
        {
          name: "Portal on your own domain",
          description: "e.g. clients.yourstudio.com, set up with a DNS record",
          free: false,
          starter: false,
          pro: true,
          agency: true,
        },
      ],
    },
    {
      name: "Team & security",
      features: [
        {
          name: "Team seats",
          description: "Invite a VA, co-founder, or team member",
          free: "1",
          starter: "1",
          pro: "2",
          agency: "3 + extra",
        },
        {
          name: "Workspaces",
          description: "One business per workspace. Need a second? Email us.",
          free: "1",
          starter: "1",
          pro: "1",
          agency: "1",
        },
        {
          name: "Brands",
          description: "Separate client-facing identities in one workspace",
          free: "Your studio",
          starter: "Your studio",
          pro: "Your studio",
          agency: "Up to 5",
        },
        {
          name: "Client emails from your domain",
          description: "Portal emails come from your own address",
          free: false,
          starter: false,
          pro: false,
          agency: true,
        },
        {
          name: "Required 2FA for the team",
          description: "Everyone in the workspace signs in with two-factor",
          free: false,
          starter: false,
          pro: true,
          agency: true,
        },
        {
          name: "Per-person analytics",
          description: "See results for each team member",
          free: false,
          starter: false,
          pro: false,
          agency: true,
        },
      ],
    },
  ];

  const renderValue = (val: Value) => {
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
              description="Flat pricing, no transaction fees. Start on Free with no card. The first 100 paying customers get the founding price, and keep it for as long as they stay subscribed."
            />
            <p className="mt-5 text-[14px] text-[#7A7A7A] font-medium tracking-tight">
              Yearly plans include 2 months free on top of the locked rate.
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                    <HandText className={`text-[19px] leading-none ${plan.highlight ? "" : "opacity-70"}`}>
                      {plan.badge}
                    </HandText>
                    <ArrowDown width={22} className={`text-[#e5c1a5] -scale-x-100 -translate-x-2 ${plan.highlight ? "" : "opacity-70"}`} />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center gap-2 mb-1 min-h-[30px]">
                    {plan.monthlyOriginal && (
                      <>
                        <span className="text-white/40 line-through text-[20px] font-medium tracking-tight">
                          {billing === "monthly" ? plan.monthlyOriginal : plan.yearlyOriginal}
                        </span>
                        <span className="text-[13px] text-white/40">
                          {billing === "monthly" ? "/mo" : "/yr"} launch price
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-end gap-1.5 mb-1.5">
                    <span className="text-[56px] leading-[1.1] tracking-[-0.06em] text-[#FFF3F0] font-medium">
                      {billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    {plan.monthlyPrice !== "$0" && (
                      <span className="text-[15px] text-[#7A7A7A] mb-3 whitespace-nowrap">
                        {billing === "monthly" ? "/mo" : "/yr"}
                      </span>
                    )}
                  </div>
                  
                  <span className="text-[14px] font-semibold tracking-wide uppercase text-emerald-400 mb-2">
                    {plan.monthlyPrice === "$0" ? "free plan" : "forever locked"}
                  </span>
                  
                  {billing === "yearly" && plan.yearlyCalc !== "" && (
                    <span className="text-[13px] text-[#7A7A7A] mb-2 font-mono">
                      {plan.yearlyCalc}
                    </span>
                  )}
                </div>

                <div className="relative z-10 text-[14px] text-white/70 leading-relaxed self-start min-h-[40px] mb-4">
                  {plan.description2}
                </div>
                
                <div className="relative z-10 mt-auto pt-6 w-full flex flex-col items-center">
                  {(plan.href ?? planSignupUrl(plan.name, billing)) ? (
                    <a
                      href={plan.href ?? planSignupUrl(plan.name, billing) ?? undefined}
                      className={`w-full min-h-[52px] px-4 rounded-full flex items-center justify-center text-[15px] font-semibold tracking-wide transition-colors inline-flex shadow-lg whitespace-nowrap ${plan.highlight ? "text-white bg-[#2563eb] border border-[#2563eb]/50 hover:bg-[#1d4ed8]" : "text-black bg-[#E5E5E5] border border-transparent hover:bg-white"}`}
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className={`w-full min-h-[52px] px-4 rounded-full flex items-center justify-center text-[15px] font-semibold tracking-wide inline-flex whitespace-nowrap cursor-default ${plan.highlight ? "text-white/80 bg-[#2563eb]/40 border border-[#2563eb]/30" : "text-white/60 bg-white/[0.06] border border-white/10"}`}
                    >
                      Opening soon
                    </span>
                  )}
                  <span className="block text-[12px] leading-[1.5] min-h-[3lh] text-[#7A7A7A] mt-4 font-medium text-center">
                    {plan.finePrint}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Matrix Container */}
        <div className="w-full bg-[#0a0a0a] border border-white/5 rounded-3xl p-2 md:p-2.5 overflow-hidden md:overflow-x-auto">
          <div className="w-full md:min-w-[1000px] grid grid-cols-1 md:grid-cols-[minmax(240px,1.2fr)_repeat(4,minmax(170px,1fr))] gap-2 md:gap-3 items-stretch relative">
            
            {/* Matrix Column Headers */}
            <div className="col-span-1 md:col-span-5 grid grid-cols-1 md:grid-cols-subgrid mb-2 md:mb-2">
               <div className="p-4 md:px-5 flex flex-col justify-end gap-2.5 relative z-10">
                 <div className="text-[21px] text-[#FFF3F0] tracking-tight font-medium">
                   Compare Features
                 </div>
                 <div className="text-[13px] text-[#7A7A7A] leading-relaxed max-w-[320px]">
                   A detailed breakdown of what each plan unlocks.
                 </div>
               </div>
               {columns.map((col) => (
                 <div key={col.key} className="hidden md:flex items-end justify-center pb-4 text-[17px] font-medium text-white/80">{col.label}</div>
               ))}
            </div>

            {/* Matrix Data */}
            {categories.map((category, cIdx) => (
              <div key={cIdx} className="col-span-1 md:col-span-5 grid grid-cols-1 md:grid-cols-subgrid gap-y-2">
                <div className="col-span-1 md:col-span-5 mt-4 mb-1 z-10">
                  <div className="h-11 px-6 flex items-center rounded-full bg-[#111] border border-white/5">
                    <span className="text-[11px] font-medium tracking-[0.04em] uppercase text-[#FFF3F0]/60">
                      {category.name}
                    </span>
                  </div>
                </div>

                {category.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="col-span-1 md:col-span-5 grid grid-cols-1 md:grid-cols-subgrid relative group rounded-2xl md:rounded-none bg-[#111] md:bg-transparent border border-white/5 md:border-transparent mb-2 md:mb-0 pb-2 md:pb-0"
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

                    {columns.map((col, i) => (
                      <div key={col.key} className={`md:hidden flex items-center justify-between px-5 py-2.5 text-[13px] ${i < columns.length - 1 ? "border-b border-white/5" : ""}`}>
                        <span className="text-white/50 font-medium">{col.label}</span>
                        <div className="flex justify-end">{renderValue(feature[col.key])}</div>
                      </div>
                    ))}

                    {columns.map((col) => (
                      <div key={col.key} className="hidden md:flex min-h-[72px] rounded-2xl p-3 items-center justify-center text-center bg-[#111] border border-transparent group-hover:bg-[#151515] group-hover:border-white/5 transition-colors relative z-10">
                        {renderValue(feature[col.key])}
                      </div>
                    ))}
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
