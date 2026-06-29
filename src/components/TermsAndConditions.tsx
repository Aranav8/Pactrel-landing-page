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

          <h2 className="text-2xl font-medium text-white">5. Payments and Deposits</h2>
          <p>
            Pactrel integrates with third-party payment processors (such as Stripe) to facilitate transactions. Pactrel does not directly hold or manage user funds. All transactions are subject to the terms and conditions of the respective payment processor. You are solely responsible for ensuring your compliance with their terms.
          </p>

          <h2 className="text-2xl font-medium text-white">6. Limitation of Liability</h2>
          <p>
            In no event shall Pactrel, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-medium text-white">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-2xl font-medium text-white">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at hello@pactrel.com.
          </p>
        </div>
      </div>
    </div>
  );
}
