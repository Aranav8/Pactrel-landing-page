import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Features } from "./components/Features";
import { Problem } from "./components/Problem";
import { FounderNote } from "./components/FounderNote";
import { HowItWorks } from "./components/HowItWorks";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { ComparisonTable } from "./components/ComparisonTable";
import { FAQ } from "./components/FAQ";
import { Waitlist } from "./components/Waitlist";
import { Footer } from "./components/Footer";
import { MouseGlow } from "./components/ui/MouseGlow";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white antialiased">
      <MouseGlow />
      <Navbar />

      <main className="w-full">
        <Hero />
        <Intro />
        <Problem />
        <FounderNote />
        <Features />
        <HowItWorks />
        <Benefits />

        {/* Pricing & Comparison */}
        <ComparisonTable />
        <FAQ />
        <Waitlist />
      </main>

      <Footer />
    </div>
  );
}
