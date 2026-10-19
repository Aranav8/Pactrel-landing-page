import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Features } from "./components/Features";
import { Problem } from "./components/Problem";
import { FounderNote } from "./components/FounderNote";
import { HowItWorks } from "./components/HowItWorks";
import { Benefits } from "./components/Benefits";
import { ComparisonTable } from "./components/ComparisonTable";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { MouseGlow } from "./components/ui/MouseGlow";
import { CookieBanner } from "./components/CookieBanner";

import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { DataProcessingAgreement } from "./components/DataProcessingAgreement";
import { NotFound } from "./components/NotFound";

export default function App() {
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white antialiased">
      <MouseGlow />
      <CookieBanner />
      <Navbar />

      {path === "/" ? (
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
          <FinalCTA />
        </main>
      ) : path === "/privacy" ? (
        <PrivacyPolicy />
      ) : path === "/terms" ? (
        <TermsAndConditions />
      ) : path === "/dpa" ? (
        <DataProcessingAgreement />
      ) : (
        <NotFound />
      )}

      <Footer />
    </div>
  );
}
