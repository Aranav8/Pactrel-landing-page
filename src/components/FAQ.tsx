import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function ContactForm({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, hidden from real visitors
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, website }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`bg-[#0a0a0a] border border-white/5 rounded-[24px] p-8 flex flex-col w-full ${className}`}>
      <h4 className="text-xl font-medium text-[#FFF3F0] mb-3">
        Still have questions?
      </h4>
      <p className="text-[#FFF3F0]/60 text-[15px] mb-6 leading-relaxed">
        We built this for freelancers. Send us a message and we'll get back to you fast.
      </p>
      
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in duration-300 h-full">
          <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-green-400 font-medium">Message sent!</p>
          <p className="text-white/50 text-[14px] mt-1">We'll get back to you shortly.</p>
        </div>
      ) : (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <input 
            type="email" 
            placeholder="Your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#2563eb]/50 transition-colors disabled:opacity-50"
            required
          />
          <textarea 
            placeholder="How can we help?" 
            rows={3}
            maxLength={2000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === "loading"}
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#2563eb]/50 transition-colors resize-none disabled:opacity-50"
            required
          />
          {status === "error" && (
            <p className="text-red-400 text-[13px] px-1 animate-in fade-in">{errorMsg}</p>
          )}
          <button 
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-white text-black rounded-xl px-4 py-2.5 text-[14px] font-medium hover:bg-gray-200 transition-colors mt-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}

const faqs = [
  // General
  {
    category: "General",
    question: "What is Pactrel and how does it work?",
    answer: "Pactrel is a white-label client portal for freelancers and small studios. You create a project, fill in your proposal, set a deposit, and share one branded link with your client. They open it, accept the proposal, e-sign the agreement, pay the deposit, and submit a brief, without creating an account. After kickoff, the same link runs the whole project: files, messages, deliverables they approve, a shared calendar, and the final invoice."
  },
  {
    category: "General",
    question: "How long does it take to set up?",
    answer: "Most freelancers have their first portal live within 30 minutes. Create an account, add your branding, write your proposal, set your deposit, and hit send. There are no complex automation flows or conditional logic to configure. If you've used Notion or a Google Form before, Pactrel will feel immediately familiar."
  },
  {
    category: "General",
    question: "Does my client need to create an account?",
    answer: "No. Your client opens your portal link in their browser with no signup and no password. For sensitive steps, like signing, they may be asked for a one-time code sent to their email. They can complete the whole start of the project (sign, pay, brief) in a single session. This is deliberate: every extra login is a reason for a client to stall before paying."
  },
  {
    category: "General",
    question: "Is the e-signature legally binding?",
    answer: "Yes. Pactrel captures a typed signature, IP address, timestamp, and unique session token for every signing event. This meets the requirements of the US ESIGN Act and EU eIDAS regulation for simple electronic signatures. A full audit trail is stored, and the signed agreement can be downloaded as a PDF. For very high-value contracts, we recommend consulting a lawyer, but for typical freelance agreements, Pactrel's e-signature is fully enforceable."
  },
  {
    category: "General",
    question: "How does the deposit payment work?",
    answer: "After signing, your client sees a clear step to pay the deposit. They pay you directly, by bank transfer to your account or through a payment link you own (for example your Stripe payment link, PayPal.me, or a Wise request). When the money arrives, you mark the payment as received in Pactrel. Pactrel never processes or holds client money, and there are no transaction fees on top of your subscription. Payment plans and the final invoice work the same way."
  },
  {
    category: "General",
    question: "Can I use my own domain name?",
    answer: "Yes, on the Pro and Agency plans. Your client portal can be served from your own subdomain (e.g. clients.yourstudio.com) so your branding is consistent end to end. Setup is a single DNS record. From Starter up, the \"Powered by Pactrel\" badge is removed so portals carry only your name. The Free plan shows the badge."
  },

  // Pricing & Plans
  {
    category: "Pricing & Plans",
    question: "Is there a free trial?",
    answer: "There's no trial because there's a Free plan: send up to 3 projects, end to end, at no cost. Paid plans lift the project limit, remove the Pactrel badge, and add more features. While we're in the waitlist period, claiming a spot on a paid plan locks in the waitlist rate, and you pay nothing until launch."
  },
  {
    category: "Pricing & Plans",
    question: "Can I switch plans later?",
    answer: "Yes. You can move between plans from your account. If you cancel, you keep your paid plan until the end of the period you've paid for, then move to Free. Projects you've already sent stay live for your clients. A waitlist rate stays with your workspace when you change tiers."
  },
  {
    category: "Pricing & Plans",
    question: "Do you charge per client or per project?",
    answer: "No. All plans are flat pricing, monthly or yearly, with no per-client fees. The limits are on projects: Free includes 3 projects sent (ever), Starter includes 10 active projects at a time, and Pro and Agency are unlimited."
  },

  // Client Experience
  {
    category: "Client Experience",
    question: "What does my client actually see?",
    answer: "Your client clicks a link and lands on a clean, branded page with your logo and project name. They see the proposal, sign the agreement, pay the deposit, and fill in the brief, all in one sequential flow. After that, they can return to the same link at any time to check progress, message you, download files, approve deliverables, and pay invoices. It feels like a custom client portal you built yourself."
  },
  {
    category: "Client Experience",
    question: "What happens if my client doesn't complete the onboarding?",
    answer: "On Pro and Agency, automatic email reminders chase clients who haven't finished a step, like signing the agreement or paying the deposit. On every plan, you can see which step each project is on."
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 md:py-32 px-6 flex justify-center border-t border-white/5 bg-black" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

            <ContactForm className="hidden md:flex" />
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

            <ContactForm className="md:hidden flex mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
