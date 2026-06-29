import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if the user hasn't explicitly accepted or declined yet
    const hasConsented = localStorage.getItem("pactrel_cookie_consent");
    if (!hasConsented) {
      // Add a slight delay before showing it so it doesn't distract immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("pactrel_cookie_consent", "accepted");
    // If you add PostHog opt-in tracking logic later, you can trigger it here
    // window.posthog?.opt_in_capturing();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("pactrel_cookie_consent", "declined");
    // window.posthog?.opt_out_capturing();
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
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
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
