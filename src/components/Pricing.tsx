import { Check } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

const plans = [
  {
    name: "Starter",
    subtitle: "For solo freelancers",
    price: "$11",
    originalPrice: "$19",
    period: "/mo",
    desc: "5 active portals, e-signature, deposits, and white-label branding.",
    badge: "Waitlist price",
    features: [
      "5 active client portals",
      "E-signature + proposals",
      "Deposit collection",
      "File upload & storage",
      "White-label branding",
      "Client intake forms",
      "Project status page",
    ],
  },
  {
    name: "Pro",
    subtitle: "For growing freelancers",
    price: "$17",
    originalPrice: "$29",
    period: "/mo",
    desc: "Unlimited portals, email automations, final invoices, and custom domains.",
    badge: "Waitlist price",
    features: [
      "Everything in Starter",
      "Unlimited active portals",
      "Email automations",
      "Final invoice & balance collection",
      "Custom domain",
      "Priority email support",
    ],
  },
  {
    name: "Agency",
    subtitle: "For small teams",
    price: "$29",
    originalPrice: "$49",
    period: "/mo",
    desc: "Everything in Pro plus 3 team seats, priority support, and integrations.",
    badge: "Waitlist price",
    features: [
      "Everything in Pro",
      "3 team seats",
      "Analytics dashboard",
      "Zapier integration",
      "Priority support",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-32 px-6 flex justify-center border-t border-white/5 bg-black" id="pricing">
      <div className="max-w-6xl w-full">
        <div className="mb-20">
          <SectionHeader
            badge="Pricing"
            title={
              <>
                Simple, flat pricing.{" "}
                <span className="text-white/65">No per-user fees. Ever.</span>
              </>
            }
            description="Launching soon. Secure your spot on the waitlist to lock in early-access pricing."
          />
          <div className="flex flex-col items-center gap-2 mt-6">
            <p className="text-center text-[#2563eb] text-[15px] font-medium">
              First 50 members get 40% off forever.
            </p>
            <p className="text-center text-white/60 text-[14px]">
              Next 100 get 30% off their first 3 months.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-[24px] p-6 border relative backdrop-blur-sm ${i === 1 ? "border-white/20 bg-white/5 shadow-2xl shadow-white/5" : "border-white/5 bg-[#0a0a0a]"} flex flex-col`}
            >
              {i === 1 && (
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              )}

              <div className="flex justify-between items-start mb-8 h-12">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-medium text-white tracking-tight">{plan.name}</h3>
                  <p className="text-[14px] text-white/50">{plan.subtitle}</p>
                </div>
                {plan.badge && (
                  <div className="flex items-center px-3 py-1 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 shrink-0">
                    <span className="text-[10px] text-[#60a5fa] font-semibold whitespace-nowrap uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-end gap-2 mb-4 relative">
                <div className="flex flex-col">
                  {plan.originalPrice && (
                    <span className="text-white/40 line-through text-lg font-medium tracking-tight mb-1">
                      {plan.originalPrice}
                    </span>
                  )}
                  <div className="flex items-end gap-2">
                    <span className="text-[40px] font-medium leading-none text-[#FFF3F0] tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-white/50 text-sm mb-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                {/* Annotations */}
                {i === 0 && (
                  <div className="absolute right-1 -top-2 flex-col items-center hidden sm:flex pointer-events-none z-20 w-[90px]">
                    <span className="text-[11px] leading-tight text-center font-medium text-[#e5c1a5] -rotate-[6deg] mb-1 font-mono tracking-tight">
                      cheaper than 3 lattes!
                    </span>
                    <svg width="35" height="28" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#e5c1a5] mr-4 overflow-visible">
                      <path d="M42 4 C 30 12 20 28 4 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 20 L 4 28 L 12 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                {i === 1 && (
                  <div className="absolute right-1 -top-2 flex-col items-center hidden sm:flex pointer-events-none z-20 w-[90px]">
                    <span className="text-[11px] leading-tight text-center font-medium text-[#e5c1a5] -rotate-[6deg] mb-1 font-mono tracking-tight">
                      less than a decent lunch!
                    </span>
                    <svg width="35" height="28" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#e5c1a5] mr-4 overflow-visible">
                      <path d="M42 4 C 30 12 20 28 4 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 20 L 4 28 L 12 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                {i === 2 && (
                  <div className="absolute right-1 -top-2 flex-col items-center hidden sm:flex pointer-events-none z-20 w-[90px]">
                    <span className="text-[11px] leading-tight text-center font-medium text-[#e5c1a5] -rotate-[6deg] mb-1 font-mono tracking-tight">
                      less than a team pizza!
                    </span>
                    <svg width="35" height="28" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#e5c1a5] mr-4 overflow-visible">
                      <path d="M42 4 C 30 12 20 28 4 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 20 L 4 28 L 12 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-[15px] text-white/60 mb-8 mt-4 leading-relaxed h-[80px]">{plan.desc}</p>

              <a
                href="#waitlist"
                onClick={() => window.dispatchEvent(new CustomEvent('selectPlan', { detail: plan.name }))}
                className={`w-full py-3 rounded-full text-[15px] font-medium mb-10 transition-all inline-block text-center ${i === 1 ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8]" : "bg-[#e5e5e5] text-black hover:bg-white"}`}
              >
                Claim my spot →
              </a>

              <div className="hidden">
                <ul className="space-y-4 text-[13px] text-white/80">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Check
                          className="w-3 h-3 text-[#FFF3F0]"
                        />
                      </div>
                      <span className="font-medium text-white/90 leading-tight">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
