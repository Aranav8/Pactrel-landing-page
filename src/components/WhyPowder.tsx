import { SectionHeader } from "./ui/SectionHeader";

export function WhyPowder() {
  return (
    <section className="py-24 md:py-32 px-6 flex justify-center bg-black relative">
      <div className="max-w-5xl w-full">
         <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between mb-16">
            <SectionHeader 
              badge="Why Powder"
              title={
                <>
                  One AI agent for <span className="text-white/65">answers, actions, and momentum</span>
                </>
              }
            />
            <p className="text-base text-[#7A7A7A] max-w-[280px] pb-2">
                Powder brings knowledge, context, and execution into a single handy interface.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { title: "Shared context", desc: "Bring docs, tools, and team knowledge into one place.", icon: "📚" },
                { title: "Trusted answers", desc: "Get clear responses with sources and useful context.", icon: "✨" },
                { title: "Instant action", desc: "Turn prompts into tickets, replies, drafts, and next steps.", icon: "🚀" }
            ].map((feature, i) => (
                <div key={i} className="flex flex-col p-8 rounded-2xl bg-[#111] border border-white/5 relative overflow-hidden group hover:border-white/10 hover:bg-[#151515] transition-all">
                    {/* Abstract illustration placeholder */}
                    <div className="h-48 rounded-xl bg-[#0a0a0a] border border-white/5 mb-8 flex items-center justify-center text-4xl opacity-50 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent mix-blend-overlay opacity-50" />
                       <div className="w-16 h-16 rounded border border-white/10 bg-white/5 flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
                          <div className="text-2xl">{feature.icon}</div>
                       </div>
                    </div>
                    <h3 className="text-lg font-medium text-[#FFF3F0] mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
