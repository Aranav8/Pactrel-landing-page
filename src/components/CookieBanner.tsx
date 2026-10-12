import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CLARITY_ID = import.meta.env.VITE_CLARITY_ID as string | undefined;

// Microsoft Clarity only loads after the visitor accepts analytics cookies.
function loadClarity() {
  if (!CLARITY_ID || (window as any).clarity) return;
  (function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] = c[a] || function (...args: unknown[]) { (c[a].q = c[a].q || []).push(args); };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode!.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID);
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if the user hasn't explicitly accepted or declined yet
    const hasConsented = localStorage.getItem("pactrel_cookie_consent");
    if (hasConsented === "accepted") loadClarity();
    if (!hasConsented) {
      // Add a slight delay before showing it so it doesn't distract immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("pactrel_cookie_consent", "accepted");
    loadClarity();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("pactrel_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 md:max-w-sm w-auto bg-[#111] border border-white/10 p-5 rounded-2xl shadow-2xl flex flex-col gap-4"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h4 className="text-white font-medium text-[15px] mb-1">
                We value your privacy
              </h4>
              <p className="text-white/60 text-[13px] leading-relaxed">
                With your consent, we use Microsoft Clarity analytics cookies to see how visitors use this site, including session recordings. Nothing loads unless you click "Accept". See our <a href="/privacy" className="underline underline-offset-2 hover:text-white">Privacy Policy</a>.
              </p>
            </div>
            <button 
              onClick={handleDecline}
              className="text-white/40 hover:text-white transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-2 w-full">
            <button 
              onClick={handleDecline}
              className="flex-1 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white/80 text-[13px] font-medium transition-colors"
            >
              Decline
            </button>
            <button 
              onClick={handleAccept}
              className="flex-1 px-4 py-2 rounded-xl bg-white hover:bg-gray-200 text-black text-[13px] font-medium transition-colors"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
