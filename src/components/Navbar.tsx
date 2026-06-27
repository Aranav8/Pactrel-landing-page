import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      // Only trigger a re-render if the state actually changed
      if (scrolled !== isScrolledRef.current) {
        isScrolledRef.current = scrolled;
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 h-32 z-40 pointer-events-none transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9991670137442732) 2.0408163265306123%, rgba(0, 0, 0, 0.9966680549770929) 4.081632653061225%, rgba(0, 0, 0, 0.9925031236984589) 6.122448979591836%, rgba(0, 0, 0, 0.9866722199083715) 8.16326530612245%, rgba(0, 0, 0, 0.9791753436068305) 10.204081632653061%, rgba(0, 0, 0, 0.9700124947938359) 12.244897959183673%, rgba(0, 0, 0, 0.9591836734693877) 14.285714285714285%, rgba(0, 0, 0, 0.946688879633486) 16.3265306122449%, rgba(0, 0, 0, 0.9325281132861307) 18.367346938775512%, rgba(0, 0, 0, 0.9167013744273219) 20.408163265306122%, rgba(0, 0, 0, 0.8992086630570596) 22.448979591836736%, rgba(0, 0, 0, 0.8800499791753436) 24.489795918367346%, rgba(0, 0, 0, 0.8592253227821741) 26.53061224489796%, rgba(0, 0, 0, 0.8367346938775511) 28.57142857142857%, rgba(0, 0, 0, 0.8125780924614744) 30.612244897959183%, rgba(0, 0, 0, 0.7867555185339442) 32.6530612244898%, rgba(0, 0, 0, 0.7592669720949604) 34.69387755102041%, rgba(0, 0, 0, 0.7301124531445231) 36.734693877551024%, rgba(0, 0, 0, 0.6992919616826323) 38.775510204081634%, rgba(0, 0, 0, 0.6668054977092878) 40.816326530612244%, rgba(0, 0, 0, 0.6326530612244898) 42.857142857142854%, rgba(0, 0, 0, 0.5968346522282382) 44.89795918367347%, rgba(0, 0, 0, 0.5593502707205331) 46.93877551020408%, rgba(0, 0, 0, 0.5201999167013744) 48.97959183673469%, rgba(0, 0, 0, 0.47980008329862534) 51.02040816326531%, rgba(0, 0, 0, 0.4406497292794669) 53.06122448979592%, rgba(0, 0, 0, 0.40316534777176183) 55.10204081632652%, rgba(0, 0, 0, 0.36734693877551017) 57.14285714285714%, rgba(0, 0, 0, 0.3331945022907121) 59.183673469387756%, rgba(0, 0, 0, 0.3007080383173677) 61.224489795918366%, rgba(0, 0, 0, 0.2698875468554769) 63.26530612244898%, rgba(0, 0, 0, 0.24073302790503948) 65.3061224489796%, rgba(0, 0, 0, 0.2132444814660559) 67.3469387755102%, rgba(0, 0, 0, 0.1874219075385255) 69.38775510204081%, rgba(0, 0, 0, 0.16326530612244916) 71.42857142857143%, rgba(0, 0, 0, 0.14077467721782577) 73.46938775510205%, rgba(0, 0, 0, 0.11995002082465644) 75.51020408163265%, rgba(0, 0, 0, 0.10079133694294051) 77.55102040816327%, rgba(0, 0, 0, 0.08329862557267798) 79.59183673469387%, rgba(0, 0, 0, 0.06747188671386928) 81.63265306122449%, rgba(0, 0, 0, 0.053311120366513975) 83.6734693877551%, rgba(0, 0, 0, 0.04081632653061251) 85.71428571428571%, rgba(0, 0, 0, 0.029987505206164) 87.75510204081633%, rgba(0, 0, 0, 0.02082465639316977) 89.79591836734694%, rgba(0, 0, 0, 0.013327780091628272) 91.83673469387756%, rgba(0, 0, 0, 0.007496876301541278) 93.87755102040816%, rgba(0, 0, 0, 0.0033319450229072345) 95.91836734693877%, rgba(0, 0, 0, 0.0008329862557268086) 97.95918367346938%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4">
        <div className="w-full max-w-7xl flex items-center justify-between relative">
          <div className="flex items-center">
            <img src="/Logo.svg" alt="Pactrel" className="h-6 md:h-8 w-auto" />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-4 hidden md:flex">
            <a href="#waitlist" className="text-[13px] font-medium px-5 py-2.5 text-white transition-all rounded-full border border-white/10 bg-black/20 backdrop-blur-md hover:bg-black/40 hover:border-white/20 shadow-lg">
              Claim my spot
            </a>
          </div>

          {/* Mobile nav placeholder */}
          <div className="md:hidden flex items-center">
            <a href="#waitlist" className="text-sm font-medium px-4 py-2 bg-white text-black rounded-full hover:bg-white/90">
              Claim my spot
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
