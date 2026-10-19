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
    answer: "Pactrel is a white-label client portal for freelancers and small studios. You create a project, fill in your proposal, set a deposit, and Pactrel emails your client a branded invite. From one portal they accept the proposal, e-sign the agreement, pay the deposit, submit the brief and book the kickoff call, without creating an account. After kickoff, the same portal runs the whole project: updates, files, messages, deliverables they approve, a shared calendar, and the final invoice."
  },
  {
    category: "General",
    question: "How long does it take to set up?",
    answer: "Most freelancers have their first portal live within 30 minutes. Create an account, add your branding, write your proposal, set your deposit, and hit send. There are no complex automation flows or conditional logic to configure. If you've used Notion or a Google Form before, Pactrel will feel immediately familiar."
  },
  {
    category: "General",
    question: "Does my client need to create an account?",
    answer: "No. There's no signup and no password. Your client presses the button in their invite email and their browser is signed in to the portal, staying signed in for 30 days of use. On a new device, a one-time code sent to their email gets them back in. They can complete the whole start of the project (accept, sign, pay, brief, kickoff) in a single sitting. This is deliberate: every extra login is a reason for a client to stall before paying."
  },
  {
    category: "General",
    question: "Can I sign or approve on my client's behalf?",
    answer: "No, and that's on purpose. You never get a working copy of your client's portal: you see a read-only preview of it instead. Only someone who has proved they own the client's email address can accept the proposal, sign the agreement, sign a change order or approve a deliverable. That's what makes the signature and the approval trail worth something if there's ever a dispute."
  },
  {
    category: "General",
    question: "Is the e-signature legally binding?",
    answer: "For a typical freelance service agreement, generally yes. Pactrel records the typed or drawn signature, the signer's consent, the time, the IP address and a fingerprint of the exact text signed, and both sides get the signed agreement as a PDF. That is a simple electronic signature, which the US ESIGN Act and the EU's eIDAS regulation recognise for most commercial contracts. Some countries treat it as weaker evidence than a certified digital signature (India, for example), and some documents can't be signed electronically at all, such as property transfers, powers of attorney, wills and trusts. Use Pactrel for service agreements, and for anything unusual or high-value, ask a lawyer."
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
    answer: "There's no trial because there's a Free plan: send up to 3 projects, end to end, at no cost. Paid plans lift the project limit, remove the Pactrel badge, and add more features. The first 100 paying customers get the founding price, and keep it for as long as they stay subscribed."
  },
  {
    category: "Pricing & Plans",
    question: "Can I switch plans later?",
    answer: "Yes. You can move between plans from your account. If you cancel, you keep your paid plan until the end of the period you've paid for, then move to Free. Projects you've already sent stay live for your clients. A founding price stays with your workspace when you change plans, and you can pause instead of cancelling to keep it."
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
    answer: "A clean page with your logo and the project name, never a Pactrel dashboard. They go through the proposal (ticking any optional extras you offered, with the price updating as they go), sign the agreement, pay the deposit, fill in the brief and book the kickoff call, one step at a time. After that, the portal shows whose turn it is and what's next. They come back any time to see updates, message you, share files, approve deliverables and pay invoices."
  },
  {
    category: "Client Experience",
    question: "Can more than one person on the client's side use the portal?",
    answer: "Yes. Your main client contact can invite colleagues, such as a co-founder who signs or a marketing lead who reviews the work, and each of them signs in with their own email. Every plan includes at least one extra person per portal; the comparison table above shows the limit on each plan."
  },
  {
    category: "Client Experience",
    question: "What happens if my client doesn't complete the onboarding?",
    answer: "From Starter up, automatic email reminders chase clients who haven't finished a step, like signing the agreement or paying an invoice. On every plan, you get an email when your client first opens their portal, and you can see which step each project is on."
  },
  {
    category: "Client Experience",
    question: "Can my client upload files?",
    answer: "Yes. In the brief, clients can upload brand assets and references, or paste a Google Drive or Dropbox link for big folders. During the project they can share more files, and you can upload deliverables for them to download and approve. Everything is stored per project and stays in the portal for both of you."
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
