import { Check } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

export function Benefits() {
  const benefits = [
    {
      label: "Get paid faster",
      description: "Deposits collected before work starts. Final invoices sent from inside the portal. No more chasing. No more \"I'll send it over later.\" Revenue arrives on time, every time.",
    },
    {
      label: "Look like the pro you are",
      description: "Your client's first experience is a clean, branded portal with your logo - not a chain of emails from three different apps. First impressions convert. A professional onboarding flow signals a professional outcome.",
    },
    {
      label: "Kill the status update messages",
      description: "A shared progress page means your client knows what's happening without asking you. Fewer \"just checking in\" messages means more deep work hours. That's the real value.",
    },
    {
      label: "Everything in one place, forever",
      description: "Contracts, deposits, briefs, files, updates, and invoices - all tied to one project, one link. When a client asks about something six months later, you open one page, not your entire inbox.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 flex justify-center border-t border-white/5 relative overflow-hidden bg-black">
      <div className="max-w-6xl w-full flex flex-col relative z-10">
        <div className="mb-20">
          <SectionHeader
            badge="Benefits"
            title="Focus on the work, not the process"
            description="Every hour you spend on admin is an hour you're not getting paid for. Pactrel eliminates that entirely."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-8 rounded-[24px] bg-[#0a0a0a] border border-white/5 hover:bg-[#111] hover:border-white/10 transition-colors duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-[#1f1f1f] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#2563eb]/10 group-hover:border-[#2563eb]/20 transition-colors mt-1">
                <Check className="w-6 h-6 text-[#2563eb]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[19px] font-medium text-[#FFF3F0] tracking-tight">
                  {benefit.label}
                </span>
                <span className="text-[15px] text-white/60 leading-relaxed">
                  {benefit.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(249,117,24,0.03) 0%, transparent 60%)" }} />
    </section>
  );
}
