export function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-[#FFF3F0]/80 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-medium text-white mb-12">Terms and Conditions</h1>
        
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using Pactrel's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access our service.
          </p>

          <h2 className="text-2xl font-medium text-white">2. Description of Service</h2>
          <p>
            Pactrel provides a client onboarding portal that allows freelancers and agencies to present proposals, collect electronic signatures, receive payments, and intake client briefs via a single unified platform.
          </p>

          <h2 className="text-2xl font-medium text-white">3. User Accounts and Responsibilities</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
          </p>

          <h2 className="text-2xl font-medium text-white">4. Electronic Signatures and Contracts</h2>
          <p>
            Pactrel facilitates the signing of contracts between you and your clients. By using our electronic signature feature, you agree that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Electronic signatures processed through Pactrel are intended to be legally binding and equivalent to handwritten signatures.</li>
            <li>Pactrel acts merely as a technological conduit and is not a party to any contract established between you and your clients.</li>
            <li>We do not guarantee the enforceability or legal validity of any specific contract generated or signed via our platform; users should seek their own legal counsel.</li>
          </ul>

          <h2 className="text-2xl font-medium text-white">5. Subscriptions, Billing, and Cancellation</h2>
          <p>
            Pactrel offers subscription plans billed monthly or annually. By subscribing, you authorize us to charge your payment method on a recurring basis until you cancel.
          </p>
          <p>
            You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of your current billing period — we do not provide partial refunds for unused time.
          </p>
          <p>
            Waitlist members who locked in early-access pricing retain that rate for as long as their subscription remains active without interruption. A lapsed or cancelled subscription forfeits the locked rate; reactivation is subject to current pricing.
          </p>
          <p>
            If your subscription lapses, existing client portals may become inaccessible to your clients until the subscription is reactivated. We recommend downloading any critical files before cancelling.
          </p>

          <h2 className="text-2xl font-medium text-white">6. Payments and Deposits</h2>
          <p>
            Pactrel integrates with third-party payment processors (such as Dodo Payments) to facilitate transactions. Pactrel does not directly hold or manage user funds. All transactions are subject to the terms and conditions of the respective payment processor. You are solely responsible for ensuring your compliance with their terms.
          </p>

          <h2 className="text-2xl font-medium text-white">7. Limitation of Liability</h2>
          <p>
            In no event shall Pactrel, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-medium text-white">8. Content Ownership</h2>
          <p>
            You retain ownership of all content you and your clients submit through Pactrel, including contracts, project briefs, and uploaded files. We do not claim ownership over this content. You are responsible for ensuring you have the right to collect and store any client data submitted through your portals.
          </p>

          <h2 className="text-2xl font-medium text-white">9. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-2xl font-medium text-white">10. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at aranavk08@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
