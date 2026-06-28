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
        speed={1.2}
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
  const [selectedPlan, setSelectedPlan] = useState<{ plan: string, billing: string } | null>(null);

  useEffect(() => {
    const handlePlanSelection = (e: Event) => {
      const customEvent = e as CustomEvent;
      // Support for the old format (just string) or the new object format
      if (typeof customEvent.detail === 'string') {
        setSelectedPlan({ plan: customEvent.detail, billing: 'monthly' });
      } else {
        setSelectedPlan(customEvent.detail);
      }
    };
    window.addEventListener("selectPlan", handlePlanSelection);
    return () => window.removeEventListener("selectPlan", handlePlanSelection);
  }, []);

  const getLockedRate = (plan: string, billing: string) => {
    if (billing === "yearly") {
      if (plan === "Starter") return "$108/yr";
      if (plan === "Pro") return "$162/yr";
      if (plan === "Agency") return "$270/yr";
    } else {
      if (plan === "Starter") return "$13/mo";
      if (plan === "Pro") return "$19/mo";
      if (plan === "Agency") return "$32/mo";
    }
    return "";
  };

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
        body: JSON.stringify({ email, plan: selectedPlan?.plan, billing: selectedPlan?.billing }),
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
      <div className="max-w-6xl w-full border border-white/5 rounded-2xl md:rounded-[32px] p-6 md:p-16 relative overflow-hidden flex flex-col items-center isolation-auto z-0 bg-[#0a0a0a]/50">
        <GradientBackground />

        <div className="container flex w-full flex-col items-center justify-center max-w-2xl relative z-10">
          <h2 className="py-2 text-center text-4xl sm:text-5xl md:text-[56px] tracking-tight text-[#FFF3F0] mb-6 md:mb-8">
            Stop duct-taping your onboarding together.
          </h2>
          
          <div className="w-full max-w-md flex flex-col items-center mb-6 md:mb-8 min-h-[32px] justify-center">
            {!selectedPlan ? (
              <div className="flex flex-col sm:flex-row items-center gap-3 text-[15px] text-white/80 w-full sm:w-auto text-center sm:text-left">
                <span className="font-medium">Select your plan:</span>
                <select
                  className="bg-transparent border border-white/20 rounded-md px-3 py-1.5 text-[#FFF3F0] focus:outline-none focus:border-white/40 hover:border-white/40 transition-colors cursor-pointer w-full sm:w-auto text-center sm:text-left"
                  onChange={(e) => {
                    if (e.target.value) {
                      const [plan, billing] = e.target.value.split('-');
                      setSelectedPlan({ plan, billing });
                    }
                  }}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#111] text-white/50">Choose a plan...</option>
                  <optgroup label="Monthly" className="bg-[#111] text-white/50 font-semibold">
                    <option value="Starter-monthly" className="bg-[#111] text-white font-normal">Starter · $13/mo</option>
                    <option value="Pro-monthly" className="bg-[#111] text-white font-normal">Pro · $19/mo</option>
                    <option value="Agency-monthly" className="bg-[#111] text-white font-normal">Agency · $32/mo</option>
                  </optgroup>
                  <optgroup label="Yearly (2 months free)" className="bg-[#111] text-white/50 font-semibold">
                    <option value="Starter-yearly" className="bg-[#111] text-white font-normal">Starter · $108/yr</option>
                    <option value="Pro-yearly" className="bg-[#111] text-white font-normal">Pro · $162/yr</option>
                    <option value="Agency-yearly" className="bg-[#111] text-white font-normal">Agency · $270/yr</option>
                  </optgroup>
                </select>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center text-[15px] text-center sm:text-left gap-1 sm:gap-0">
                <span className="text-[#FFF3F0]">
                  <span className="text-emerald-400 font-bold mr-2">✓</span>
                  <span className="font-medium">{selectedPlan.plan}</span> · {getLockedRate(selectedPlan.plan, selectedPlan.billing)} locked forever
                </span>
                <button 
                  type="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlan(null);
                    window.location.hash = "#pricing";
                  }}
                  className="text-[#60a5fa] hover:text-white transition-colors underline underline-offset-2 sm:ml-4 text-[13px]"
                >
                  Change
                </button>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md items-center gap-3 p-1">
            <input
              className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-4 md:px-5 font-medium text-white shadow-none ring-0 placeholder:text-white/40 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all text-center sm:text-left"
              placeholder="Enter your work email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              disabled={loading || !selectedPlan}
              className="h-12 w-full sm:w-auto rounded-full bg-[#E5E5E5] px-6 text-[#111] hover:bg-white font-medium transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
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
        </div>
      </div>
    </section>
  );
}
