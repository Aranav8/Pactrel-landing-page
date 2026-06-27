import { useState, useEffect } from "react";
import { GrainGradient } from "@paper-design/shaders-react";

function GradientBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <GrainGradient
        style={{ height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}
        colorBack="#000000"
        softness={0.76}
        intensity={0.45}
        noise={0.03}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={0}
        colors={["#222222", "#111111", "#1a1a1a"]}
      />
    </div>
  );
}

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const handlePlanSelection = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSelectedPlan(customEvent.detail);
    };
    window.addEventListener("selectPlan", handlePlanSelection);
    return () => window.removeEventListener("selectPlan", handlePlanSelection);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, plan: selectedPlan }),
      });

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="flex flex-col items-center justify-center py-24 md:py-32 px-6">
      <div className="max-w-6xl w-full border border-white/5 rounded-[32px] p-8 md:p-16 relative overflow-hidden flex flex-col items-center isolation-auto z-0 bg-[#0a0a0a]/50">
        {/* Background radical gradient from imported component */}
        <GradientBackground />

        <div className="container flex w-full flex-col items-center justify-center max-w-2xl relative z-10">
          <h2 className="py-2 text-center text-4xl md:text-[56px] tracking-tight text-[#FFF3F0] mb-4">
            Stop duct-taping your onboarding together.
          </h2>
          <div className="flex flex-col items-center gap-6 mb-10 w-full max-w-xl">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-white/90">
                <strong className="text-white">23</strong> of 50 founding spots remaining
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-2xl p-4 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2563eb] to-transparent" />
                <span className="text-xs font-semibold tracking-wider text-[#2563eb] uppercase mb-1">First 50</span>
                <span className="text-xl font-medium text-[#2563eb] mb-1">40% off</span>
                <span className="text-xs text-[#2563eb]/80">forever at launch</span>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center">
                <span className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-1">Next 100</span>
                <span className="text-xl font-medium text-white/80 mb-1">30% off</span>
                <span className="text-xs text-white/60">first 3 months</span>
              </div>
            </div>
          </div>

          {selectedPlan && (
            <div className="text-sm font-medium text-[#2563eb] bg-[#2563eb]/10 border border-[#2563eb]/20 px-4 py-2 rounded-full mb-6 flex items-center gap-2">
              Interested in: {selectedPlan}
              <button 
                type="button" 
                onClick={() => setSelectedPlan(null)}
                className="hover:text-[#2563eb]/80 text-[#2563eb]"
              >
                &times;
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center gap-3 p-1">
            <input
              className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-4 md:px-5 font-medium text-white shadow-none ring-0 placeholder:text-white/40 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
              placeholder="Enter your work email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              disabled={loading}
              className="h-12 rounded-full bg-[#E5E5E5] px-6 text-[#111] hover:bg-white font-medium transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Claiming..." : submitted ? "Spot Claimed!" : "Claim my spot"}
            </button>
          </form>

          {submitted && (
            <div className="mt-4 text-green-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
              Thanks for joining the waitlist! We'll be in touch soon.
            </div>
          )}

          {error && (
            <div className="mt-4 text-red-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
              {error}
            </div>
          )}

          <div className="mt-12 flex items-center gap-3">
            <p className="tracking-tight text-white/50 text-sm">
              Join web designers, developers, and consultants already on the list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
