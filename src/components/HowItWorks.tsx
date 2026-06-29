import { Link, FileSignature, Rocket } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

export function HowItWorks() {
  const steps = [
    {
      icon: <Link className="w-6 h-6 text-[#FFF3F0]" />,
      title: "Create a portal and send the link",
      description: "Set up your proposal, deposit, and intake questions once. Share one branded link.",
    },
    {
      icon: <FileSignature className="w-6 h-6 text-[#FFF3F0]" />,
      title: "Client signs, pays, and briefs you",
      description: "They review, e-sign, pay the deposit, and fill the brief in one tab, no account needed.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#FFF3F0]" />,
      title: "Start work. Client tracks progress.",
      description: "Your portal becomes a live project page. Update the status in seconds. Send the final invoice when done.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 flex justify-center border-t border-white/5 relative overflow-hidden bg-black" id="how-it-works">
      <div className="max-w-6xl w-full flex flex-col">
        <SectionHeader
          badge="How it works"
          title="From signed to started in three steps."
          description="Replace a week of back-and-forth emails with a single, polished workflow."
        />

        <div className="mt-20 relative w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-16 md:gap-6">
          {/* S-Curve Dashed line connector */}
          <div className="absolute top-8 left-[16.66%] right-[16.66%] hidden md:block z-0 pointer-events-none">
            <svg
              width="100%"
              height="60"
              viewBox="0 0 100 60"
              preserveAspectRatio="none"
              className="overflow-visible"
            >
              <path
                d="M 0,30 Q 25,80 50,30 T 100,30"
                fill="none"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center z-10 w-full md:w-1/3"
            >
              <div className="relative w-24 h-24 flex items-center justify-center rounded-full border border-dashed border-white/10 mb-6 bg-black">
                <div className="w-16 h-16 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium text-[#FFF3F0] mb-3">
                {step.title}
              </h3>
              <p className="text-[#7A7A7A] max-w-[260px] text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
