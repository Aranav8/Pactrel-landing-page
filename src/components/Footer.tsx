export function Footer() {
  return (
    <footer className="py-20 px-6 mx-auto w-full flex flex-col items-center bg-black">
        <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="flex flex-col gap-4">
              <div className="flex items-center shrink-0">
                 <img src="/Logo.svg" alt="Pactrel" className="h-7 md:h-8 w-auto" />
              </div>
              <p className="text-sm text-white/50 max-w-[200px]">
                The client portal for freelancers who don't have time to waste.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-20 gap-y-12 text-sm w-full md:w-auto">
                <div className="flex flex-col gap-5 text-white/60">
                    <p className="font-semibold text-white/80 mb-2">Product</p>
                    <a href="#features" className="hover:text-white transition-colors">Features</a>
                    <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                    <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                </div>
                <div className="flex flex-col gap-5 text-white/60">
                    <p className="font-semibold text-white/80 mb-2">Legal</p>
                    <a href="#" className="hover:text-white transition-colors">Terms of service</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                </div>
            </div>
        </div>

        <div className="max-w-5xl w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
            <p>© Pactrel, Inc., 2026. All rights reserved.</p>
        </div>
    </footer>
  );
}
