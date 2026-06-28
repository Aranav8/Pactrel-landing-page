import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  // General
  {
    category: "General",
    question: "What is Pactrel and how does it work?",
    answer: "Pactrel is a client onboarding portal for freelancers and small agencies. You create a project portal, fill in your proposal details, set a deposit amount, and share one branded link with your client. They open it, review the proposal, e-sign the contract, pay the deposit, and submit a brief - all in a single session, without creating an account. You get notified at every step, and the project dashboard stays live throughout the engagement."
  },
  {
    category: "General",
    question: "How long does it take to set up?",
    answer: "Most freelancers have their first portal live within 30 minutes. Create an account, add your branding, write your proposal, set your deposit, and hit send. There are no complex automation flows or conditional logic to configure. If you've used Notion or a Google Form before, Pactrel will feel immediately familiar."
  },
  {
    category: "General",
    question: "Does my client need to create an account?",
    answer: "No. Your client receives a magic link and opens it in their browser - no signup, no password, no friction. They complete the entire onboarding flow (sign, pay, brief) in a single session. This is a deliberate design choice: we've seen completion rates drop significantly when clients are forced to create accounts before paying."
  },
  {
    category: "General",
    question: "Is the e-signature legally binding?",
    answer: "Yes. Pactrel captures a typed signature, IP address, timestamp, and unique session token for every signing event. This meets the requirements of the US ESIGN Act and EU eIDAS regulation for simple electronic signatures. A full audit trail is stored and exportable per project. For very high-value contracts, we recommend consulting a lawyer - but for typical freelance agreements, Pactrel's e-signature is fully enforceable."
  },
  {
    category: "General",
    question: "How does the deposit payment work?",
    answer: "After signing the contract, your client is taken directly to the payment step. They can pay by credit card, bank transfer, or ACH. Payments are processed securely and you receive a notification the moment payment clears. Pactrel never holds funds - money goes directly to your account. There are no transaction fees on top of your subscription."
  },
  {
    category: "General",
    question: "Can I use my own domain name?",
    answer: "Yes, on the Pro plan and above. Your client portal can be served from your own subdomain (e.g. clients.yourstudio.com) so your branding is consistent end to end. Setup takes about 5 minutes with a simple DNS record. White-label branding (your logo, your colors, no Pactrel mentions) is included on all plans including Starter."
  },

  // Pricing & Plans
  {
    category: "Pricing & Plans",
    question: "Is there a free trial?",
    answer: "Because we are currently in a pre-launch waitlist period, the platform isn't open for trials just yet. By claiming your spot today, you lock in your discounted rate and pay absolutely nothing until we officially launch."
  },
  {
    category: "Pricing & Plans",
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade or downgrade at any time. When you upgrade, you're charged the prorated difference for the remainder of the billing period. When you downgrade, the change takes effect at the next billing cycle."
  },
  {
    category: "Pricing & Plans",
    question: "Do you charge per client or per project?",
    answer: "No. All plans are flat monthly pricing. You pay one price for Pactrel regardless of how many clients you onboard or how many projects you run (within your portal limit). Starter gives you 5 simultaneous portals. Pro and Agency give you unlimited portals."
  },

  // Client Experience
  {
    category: "Client Experience",
    question: "What does my client actually see?",
    answer: "Your client clicks a link and lands on a clean, branded page with your logo and project name. They see the proposal details, sign the contract, pay the deposit, and fill in the intake form - all in one sequential flow. After that, they can return to the same link at any time to check project status, download files, and leave feedback. It feels like a custom client portal you built yourself."
  },
  {
    category: "Client Experience",
    question: "What happens if my client doesn't complete the onboarding?",
    answer: "Pactrel sends automatic email reminders if a client opens the portal but doesn't complete a step - like signing the contract or paying the deposit (Pro and Agency plans). You can also see exactly where a client dropped off in your dashboard and send a manual nudge with one click."
  },
  {
    category: "Client Experience",
    question: "Can my client upload files?",
    answer: "Yes. After submitting the intake form, clients can upload brand assets, references, and any other files directly to the project portal. You can also upload deliverables for them to download. All files are stored per project and accessible at any time through the shared dashboard."
  }
];

const categories = ["General", "Pricing & Plans", "Client Experience"];

export function FAQ() {
  const [activeTab, setActiveTab] = useState("General");
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(f => f.category === activeTab);

  return (
    <section className="py-24 md:py-32 px-6 flex justify-center border-t border-white/5 bg-black" id="faq">
      <div className="max-w-6xl w-full flex flex-col gap-16 md:gap-24">
        {/* Header Row */}
        <div className="flex flex-col mb-4">
          <SectionHeader
            badge="FAQ"
            title="Everything you want to know before joining."
            description="If something's still unclear, email us and we'll reply within a few hours."
          />
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start relative">
          {/* Left Column - Navigation */}
          <div className="flex md:w-[38%] flex-col gap-6 w-full md:sticky md:top-32 self-start">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-[24px] p-1.5 flex flex-col">
              {categories.map((cat) => {
                const isActive = activeTab === cat;
                return (
                  <div
                    key={cat}
                    onClick={() => {
                      setActiveTab(cat);
                      setOpenItemIndex(null);
                    }}
                    className={`px-5 py-4 rounded-[60px] cursor-pointer transition-colors text-center ${
                      isActive 
                        ? "bg-[#1f1f1f]/85 border border-white/5 shadow-[inset_0_1px_rgba(255,255,255,0.05)] text-[#FFF3F0]" 
                        : "text-[#FFF3F0]/80 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="font-medium text-[15px]">{cat}</span>
                  </div>
                );
              })}
            </div>

            <div className="hidden md:flex bg-[#0a0a0a] border border-white/5 rounded-[24px] p-8 flex-col w-full">
              <h4 className="text-xl font-medium text-[#FFF3F0] mb-3">
                Still have questions?
              </h4>
              <p className="text-[#FFF3F0]/60 text-[15px] mb-6 leading-relaxed">
                We built this for freelancers. Send us a message and we'll get back to you fast.
              </p>
              <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); const btn = e.currentTarget.querySelector('button'); if(btn) btn.innerText = 'Message sent!'; }}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#2563eb]/50 transition-colors"
                  required
                />
                <textarea 
                  placeholder="How can we help?" 
                  rows={3}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#2563eb]/50 transition-colors resize-none"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-white text-black rounded-xl px-4 py-2.5 text-[14px] font-medium hover:bg-gray-200 transition-colors mt-1"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="flex-1 flex flex-col gap-4 w-full min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 w-full"
              >
                {filteredFaqs.map((q, i) => {
                  const isOpen = openItemIndex === i;
                  return (
                    <div
                      key={i}
                      onClick={() => setOpenItemIndex(isOpen ? null : i)}
                      className="group flex flex-col p-6 py-7 md:px-8 bg-[#0a0a0a] border border-white/5 rounded-[20px] cursor-pointer hover:bg-[#111] hover:border-white/10 transition-colors"
                    >
                      <div className="flex justify-between items-center w-full gap-4">
                        <span className="text-[#FFF3F0] text-[17px] font-medium leading-snug">
                          {q.question}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-[#171717] flex items-center justify-center border border-white/10 shrink-0 group-hover:bg-[#202020] transition-colors">
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-white/50" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-white/50" />
                          )}
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-white/65 leading-relaxed text-[15px]">
                              {q.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <div className="md:hidden flex bg-[#0a0a0a] border border-white/5 rounded-[24px] p-8 flex-col w-full mt-4">
              <h4 className="text-xl font-medium text-[#FFF3F0] mb-3">
                Still have questions?
              </h4>
              <p className="text-[#FFF3F0]/60 text-[15px] mb-6 leading-relaxed">
                We built this for freelancers. Send us a message and we'll get back to you fast.
              </p>
              <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); const btn = e.currentTarget.querySelector('button'); if(btn) btn.innerText = 'Message sent!'; }}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#2563eb]/50 transition-colors"
                  required
                />
                <textarea 
                  placeholder="How can we help?" 
                  rows={3}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#2563eb]/50 transition-colors resize-none"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-white text-black rounded-xl px-4 py-2.5 text-[14px] font-medium hover:bg-gray-200 transition-colors mt-1"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
